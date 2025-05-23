# Windows PowerShell build script for Jekyll site
Write-Host "Building KMUpower Jekyll site..." -ForegroundColor Green
Write-Host "Make sure you have Jekyll installed. If not, run: gem install jekyll bundler" -ForegroundColor Yellow

# Navigate to the site directory (this script assumes it's run from the site root)
# Build the site
Write-Host "Running: bundle exec jekyll build" -ForegroundColor Cyan
bundle exec jekyll build

# Provide feedback
if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Site generated in _site directory." -ForegroundColor Green
    Write-Host "To preview locally run: bundle exec jekyll serve" -ForegroundColor Cyan
} else {
    Write-Host "Build failed. Check the error messages above." -ForegroundColor Red
}
