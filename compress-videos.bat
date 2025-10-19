@echo off
echo.
echo 🎬 Video Compression Guide for Portfolio
echo ========================================
echo.
echo 📊 Current file sizes:
dir public\videos\*-original.mp4 /s
echo.
echo 🔧 COMPRESSION STEPS:
echo.
echo 1. Open your web browser
echo 2. Go to: https://www.videosmaller.com/
echo 3. Upload each video one by one:
echo    - rythym-original.mp4 (301MB → target: under 50MB)
echo    - greedam-original.mp4 (161MB → target: under 50MB)  
echo    - photo-studio-original.mp4 (33MB → target: under 30MB)
echo.
echo 4. For each video:
echo    - Set quality to 60-70%% for large files
echo    - Set quality to 80%% for smaller files
echo    - Click "Upload Video File"
echo    - Wait for compression
echo    - Download the compressed file
echo.
echo 5. Rename downloaded files to:
echo    - rythym-demo-compressed.mp4
echo    - greedam-demo-compressed.mp4
echo    - photo-studio-demo-compressed.mp4
echo.
echo 6. Place renamed files in: public\videos\
echo.
echo 7. After all videos are compressed, run:
echo    git add .
echo    git commit -m "Add compressed demo videos"
echo    git push
echo.
echo ✅ Your portfolio will then have working demo videos!
echo.
pause