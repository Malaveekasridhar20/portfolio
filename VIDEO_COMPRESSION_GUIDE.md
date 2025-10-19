# 🎬 Video Compression Guide for Portfolio

## Current Status
Your portfolio videos were removed due to GitHub's 100MB file size limit:
- `rythym-demo.mp4` was 301MB
- `greedam-demo.mp4` was 161MB  
- `photo-studio-demo.mp4` was large

## Target Specifications
- **Max file size**: 50MB each (safe margin below 100MB limit)
- **Resolution**: 720p (1280x720) or lower
- **Bitrate**: 1-2 Mbps
- **Format**: MP4 (H.264)

## Compression Methods

### Method 1: FFmpeg (Best Quality)
```bash
# Install FFmpeg first: https://ffmpeg.org/download.html

# Compress to under 50MB
ffmpeg -i input-video.mp4 -vf scale=1280:720 -c:v libx264 -crf 28 -c:a aac -b:a 128k output-compressed.mp4

# For even smaller files (under 25MB)
ffmpeg -i input-video.mp4 -vf scale=854:480 -c:v libx264 -crf 32 -c:a aac -b:a 96k output-small.mp4
```

### Method 2: Online Tools
1. **CloudConvert**: https://cloudconvert.com/mp4-converter
2. **VideoSmaller**: https://www.videosmaller.com/
3. **Compress.com**: https://www.compress.com/

**Settings to use:**
- Resolution: 720p or 480p
- Quality: Medium (70-80%)
- Target size: Under 50MB

### Method 3: Handbrake (Free Software)
1. Download: https://handbrake.fr/
2. Load your video
3. Preset: "Web" → "Gmail Small 25 MB 5 Minutes 480p30"
4. Adjust duration if needed

## File Naming Convention
- `rythym-demo-compressed.mp4`
- `greedam-demo-compressed.mp4`
- `photo-studio-demo-compressed.mp4`

## After Compression
1. Place compressed videos in `public/videos/`
2. Update file references in Projects.tsx
3. Test file sizes: `ls -lh public/videos/*.mp4`
4. Commit and push to GitHub

## Quality vs Size Balance
- **50MB**: Good quality, safe for GitHub
- **25MB**: Acceptable quality, very safe
- **10MB**: Lower quality but fast loading

Choose based on your video content and quality requirements.