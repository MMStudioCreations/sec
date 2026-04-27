(function () {
  "use strict";

  const CONTENT_URL = "content.json";

  async function loadContent() {
    const res = await fetch(CONTENT_URL);
    if (!res.ok) throw new Error(`Could not load content.json (HTTP ${res.status})`);
    return res.json();
  }

  // ── Markdown-lite: **bold** and newlines ──────────────────────────────────
  function renderText(raw) {
    return raw
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }

  // ── Section renderers ─────────────────────────────────────────────────────
  function buildTextSection(sec) {
    const card = document.createElement("article");
    card.className = "section-card";
    card.innerHTML = `
      <h2 class="section-title">${esc(sec.title)}</h2>
      <div class="section-text">${renderText(sec.text || "")}</div>
    `;
    return card;
  }

  function buildImageSection(sec) {
    const card = document.createElement("article");
    card.className = "section-card";

    let imageHTML;
    if (sec.image) {
      imageHTML = `<img class="section-image" src="${esc(sec.image)}" alt="${esc(sec.altText || sec.title)}" loading="lazy">`;
    } else {
      imageHTML = `<div class="image-placeholder">No image path set — add an "image" field in content.json</div>`;
    }

    card.innerHTML = `
      <h2 class="section-title">${esc(sec.title)}</h2>
      <div class="section-image-wrap">${imageHTML}</div>
      ${sec.caption ? `<p class="section-caption">${esc(sec.caption)}</p>` : ""}
    `;
    return card;
  }

  function buildVideoSection(sec) {
    const card = document.createElement("article");
    card.className = "section-card";

    let videoHTML;

    if (sec.videoEmbed) {
      // YouTube / Vimeo embed URL
      const safeUrl = sanitizeEmbedUrl(sec.videoEmbed);
      videoHTML = safeUrl
        ? `<div class="video-embed-wrap"><iframe src="${safeUrl}" allowfullscreen loading="lazy" title="${esc(sec.title)}"></iframe></div>`
        : `<div class="image-placeholder">Invalid embed URL.</div>`;
    } else if (sec.videoFile) {
      // Local file
      videoHTML = `
        <video class="video-local" controls preload="metadata"
          ${sec.poster ? `poster="${esc(sec.poster)}"` : ""}>
          <source src="${esc(sec.videoFile)}" type="video/mp4">
          Your browser does not support the video tag.
        </video>`;
    } else {
      videoHTML = `<div class="image-placeholder">No video source set — add "videoEmbed" (YouTube URL) or "videoFile" in content.json</div>`;
    }

    card.innerHTML = `
      <h2 class="section-title">${esc(sec.title)}</h2>
      ${sec.description ? `<p class="video-description">${esc(sec.description)}</p>` : ""}
      ${videoHTML}
    `;
    return card;
  }

  // Only allow known embed domains to prevent XSS via embed URLs
  function sanitizeEmbedUrl(url) {
    try {
      const u = new URL(url);
      const allowed = ["www.youtube.com", "youtube.com", "player.vimeo.com", "www.vimeo.com"];
      return allowed.includes(u.hostname) ? url : null;
    } catch {
      return null;
    }
  }

  function esc(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ── Main render ───────────────────────────────────────────────────────────
  function render(data) {
    // Hero
    const heroSection = document.getElementById("hero");
    if (heroSection && data.hero) {
      const h = data.hero;
      heroSection.innerHTML = `
        <img class="hero-img" src="${esc(h.image)}" alt="${esc(h.heading)}" loading="eager">
        <div class="hero-overlay">
          <h1 class="hero-heading">${esc(h.heading)}</h1>
          <p class="hero-subheading">${esc(h.subheading)}</p>
          <div class="hero-bar"></div>
        </div>
      `;
    }

    // Title
    if (data.title) document.title = data.title;

    // Sections
    const main = document.getElementById("sections");
    if (!main) return;
    main.innerHTML = "";

    (data.sections || []).forEach((sec) => {
      let el;
      switch (sec.type) {
        case "text":  el = buildTextSection(sec);  break;
        case "image": el = buildImageSection(sec); break;
        case "video": el = buildVideoSection(sec); break;
        default:
          el = document.createElement("div");
          el.textContent = `Unknown section type: "${sec.type}"`;
      }
      main.appendChild(el);
    });

    // CTA
    const ctaWrap = document.getElementById("cta");
    if (ctaWrap && data.cta) {
      ctaWrap.innerHTML = `<a class="cta-btn" href="${esc(data.cta.url)}">${esc(data.cta.text)}</a>`;
    }
  }

  // ── Boot ──────────────────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    const loading = document.getElementById("loading");
    const errorMsg = document.getElementById("error-msg");

    loadContent()
      .then(function (data) {
        if (loading) loading.remove();
        render(data);
      })
      .catch(function (err) {
        if (loading) loading.remove();
        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.textContent = "Could not load content: " + err.message +
            " — Make sure content.json is in the same folder and you're viewing via a web server (not file://).";
        }
        console.error(err);
      });
  });
})();
