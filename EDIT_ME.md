# How to Edit This Page (No Technical Knowledge Needed)

**All content lives in one file: `content.json`**
Open it in GitHub, click the pencil ✏️ icon, make changes, click "Commit changes".

---

## Change Text
Find the section with `"type": "text"` and edit the `"text"` value.  
Use `**word**` to make text **bold**. Use `\n` for a new line.

## Add a YouTube Video
1. Go to your YouTube video → Share → Copy the **embed** link (looks like `https://www.youtube.com/embed/VIDEOID`)
2. Paste it as `"videoEmbed"` in a `"type": "video"` section (see template below)

## Add an Image
1. In GitHub, go to `assets/images/` → click "Add file" → "Upload files"
2. In `content.json`, set `"image": "assets/images/your-filename.jpg"`

## Add a Local Video (under 25 MB)
Upload `.mp4` to `assets/videos/`, then set `"videoFile": "assets/videos/your-video.mp4"` in a video section.

---

## Template – Copy & Paste to Add a New Section

```json
{
  "id": "my-new-section",
  "title": "Section Title Here",
  "type": "video",
  "videoEmbed": "https://www.youtube.com/embed/PASTE_VIDEO_ID_HERE",
  "description": "Optional caption shown above the video."
}
```

Change `"type"` to `"text"` or `"image"` for other content types.
