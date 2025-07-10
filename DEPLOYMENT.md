# DolphynBrands - Deployment Guide

## Project Overview
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Output**: `dist/` folder

## Branch Strategy
- **`main`**: Development branch (auto-deploys on push)
- **`prod`**: Production branch (manual deployment only)

## Method 1: GitHub Actions (Recommended)

### Development Workflow:

1. **Push to Main (Development):**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
   ✅ **Automatic deployment** to Hostinger

2. **Manual Production Deployment:**
   - Go to GitHub repository → Actions tab
   - Select "Deploy to Production" workflow
   - Click "Run workflow"
   - Choose environment (production/staging)
   - Click "Run workflow"

### Setup Steps:

1. **Set up GitHub Secrets:**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `FTP_SERVER`: Your Hostinger FTP server (e.g., `ftp.yourdomain.com`)
     - `FTP_USERNAME`: Your Hostinger FTP username
     - `FTP_PASSWORD`: Your Hostinger FTP password

2. **Workflow Files:**
   - `.github/workflows/deploy.yml` - Auto-deploys from main branch
   - `.github/workflows/deploy-prod.yml` - Manual production deployment

## Method 2: Hostinger's Built-in Git Integration

1. **Log into Hostinger Control Panel**
2. **Go to "Git" section**
3. **Connect GitHub account**
4. **Select repository**: `DolphynBrands`
5. **Configure:**
   - Source directory: `/`
   - Target directory: `public_html`
   - Branch: `main` (for development)

## Method 3: Manual Upload

### Files to Upload:
```
public_html/
├── index.html
├── sitemap.xml
├── robots.txt
├── .htaccess
└── assets/
    ├── index-CxxX1e54.css
    └── index-DqOdCe-V.js
```

### Upload Steps:
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload via File Manager:**
   - Log into Hostinger control panel
   - Go to File Manager
   - Navigate to `public_html`
   - Upload all files from `dist/` folder

3. **Upload via FTP:**
   - Use FileZilla or similar FTP client
   - Connect to your Hostinger FTP server
   - Upload all files from `dist/` folder to `public_html`

## Important Configuration

### .htaccess File
The `.htaccess` file is already included in the `dist/` folder and provides:
- ✅ React Router support
- ✅ Security headers
- ✅ Asset caching (1 year for CSS/JS)
- ✅ Gzip compression
- ✅ Protection for sensitive files

### Domain Configuration
1. **Point domain to hosting** in Hostinger control panel
2. **Enable SSL certificate** for HTTPS
3. **Configure subdomain** if needed

## Development Workflow

### Daily Development:
1. **Make changes** in your code
2. **Test locally:**
   ```bash
   npm run dev
   ```
3. **Commit and push to main:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
4. **Automatic deployment** to Hostinger

### Production Release:
1. **Test thoroughly** on development (main branch)
2. **Go to GitHub Actions** → "Deploy to Production"
3. **Click "Run workflow"**
4. **Select "production"** environment
5. **Monitor deployment** in Actions tab

## Troubleshooting

### Common Issues:

1. **404 errors on page refresh:**
   - Ensure `.htaccess` file is uploaded
   - Check that mod_rewrite is enabled

2. **Assets not loading:**
   - Verify all files in `assets/` folder are uploaded
   - Check file permissions (644 for files, 755 for folders)

3. **Build errors:**
   - Run `npm install` before `npm run build`
   - Check for TypeScript errors with `npm run lint`

### Performance Optimization:
- ✅ Assets are automatically minified and compressed
- ✅ CSS and JS files are cached for 1 year
- ✅ Gzip compression enabled
- ✅ Security headers configured

## File Structure
```
DolphynBrands/
├── src/
│   ├── components/
│   │   ├── AISection.tsx
│   │   ├── AnimatedBackground.tsx
│   │   ├── BrandShowcase.tsx
│   │   ├── CompanySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Hero.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── dist/ (build output)
└── package.json
```

## Support
- **GitHub Issues**: For code-related problems
- **Hostinger Support**: For hosting/server issues
- **Documentation**: Check Vite and React docs for framework-specific issues 