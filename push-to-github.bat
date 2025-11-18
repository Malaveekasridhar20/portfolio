@echo off
echo ========================================
echo  Pushing Changes to GitHub
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Checking git status...
git status
echo.

echo Step 2: Adding all files...
git add .
echo.

echo Step 3: Committing changes...
git commit -m "Added Liver Cure Clinic project, improved SEO, updated phone number, and enhanced portfolio"
echo.

echo Step 4: Pushing to GitHub...
git push origin main
echo.

if %errorlevel% neq 0 (
    echo.
    echo Trying with 'master' branch instead...
    git push origin master
)

echo.
echo ========================================
echo  Done! Check your GitHub repository
echo ========================================
echo.
pause
