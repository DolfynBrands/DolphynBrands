# DolphynBrands - Deployment Guide

## Project Overview
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Output**: `dist/` folder

## Method 1: GitHub Actions (Recommended)

### Setup Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Set up GitHub Secrets:**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `FTP_SERVER`: Your Hostinger FTP server (e.g., `ftp.yourdomain.com`)
     - `FTP_USERNAME`: Your Hostinger FTP username
     - `FTP_PASSWORD`: Your Hostinger FTP password

3. **Automatic Deployment:**
   - Every push to `main` branch will trigger automatic deployment
   - Manual deployment available via GitHub Actions tab

## Method 2: Hostinger's Built-in Git Integration

1. **Log into Hostinger Control Panel**
2. **Go to "Git" section**
3. **Connect GitHub account**
4. **Select repository**: `DolphynBrands`
5. **Configure:**
   - Source directory: `/`
   - Target directory: `public_html`
   - Branch: `main`

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

## Development Workflow

1. **Local Development:**
   ```bash
   npm run dev
   ```

2. **Build for Production:**
   ```bash
   npm run build
   ```

3. **Preview Build:**
   ```bash
   npm run preview
   ```

4. **Deploy:**
   - Push to GitHub (automatic deployment)
   - Or manually upload `dist/` contents

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