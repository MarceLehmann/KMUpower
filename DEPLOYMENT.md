# GitHub Pages Deployment Instructions

## Changes Made to Fix Jekyll Build Errors

1. **Fixed SCSS imports**:
   - Removed references to the "minimal-mistakes" theme that was causing build errors in the SCSS files
   - Created a proper SCSS import structure using the jekyll-theme-primer theme

2. **Updated Jekyll Configuration**:
   - Added the jekyll-theme-primer theme explicitly in _config.yml
   - Configured proper SASS/SCSS processing settings
   - Updated Gemfile to use the github-pages gem for consistent environments

3. **Added GitHub Actions Workflow**:
   - Created a workflow file to automate deployments to GitHub Pages

4. **Added Testing Files**:
   - Created a test page (test.html) to verify styling

## Next Steps

To deploy these changes and fix the build error:

1. **Commit and push the changes to GitHub**:
   ```
   git add .
   git commit -m "Fix Jekyll build errors by updating theme and SCSS imports"
   git push origin main
   ```

2. **Verify the GitHub Pages deployment**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Check the deployment status
   - Once deployed, visit https://marcelehmann.github.io/KMUpower/

3. **Test the website**:
   - Make sure all pages load correctly
   - Verify CSS styling is applied properly
   - Check the test page at https://marcelehmann.github.io/KMUpower/test.html

If you encounter any issues after deployment, you can:
- Check the Actions tab in your GitHub repository to see the build logs
- Make further adjustments to the theme or CSS as needed

## Local Testing (Optional)

If you have Ruby and Jekyll installed locally:

1. Run `bundle install` to install dependencies
2. Run `bundle exec jekyll serve` to preview the site locally
3. Visit http://localhost:4000/KMUpower/ in your browser

Alternatively, use the provided build script:
```
.\build.ps1
```

## Project Structure

The site now follows a standard Jekyll structure with:
- Main styling in `assets/css/style.scss` (the primary entry point for CSS)
- Custom styles in `assets/css/custom.scss` and `assets/css/main.scss`
- Jekyll theme: jekyll-theme-primer
