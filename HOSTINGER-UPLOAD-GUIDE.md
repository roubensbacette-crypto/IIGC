# 🚀 HOSTINGER UPLOAD GUIDE

## Step-by-Step Instructions

### 1️⃣ BUILD THE PROJECT LOCALLY
```bash
cd IIGC
npm install
npm run build
```
This creates an `out` folder with all static files.

### 2️⃣ OPEN HOSTINGER FILE MANAGER
1. Login to Hostinger Dashboard
2. Go to **Hosting** → **File Manager**
3. Navigate to **public_html**

### 3️⃣ UPLOAD FILES
1. Open the `out` folder on your computer
2. Select ALL files and folders inside `out`
3. Drag & drop or upload to Hostinger `public_html`

**Expected structure in public_html:**
```
public_html/
├── index.html ✅
├── clock/
│   └── index.html
├── _next/
│   ├── static/
│   └── data/
├── fonts/
└── .htaccess (create this)
```

### 4️⃣ CREATE .htaccess FILE
1. In Hostinger File Manager, click **Create File**
2. Name: `.htaccess`
3. Add this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 5️⃣ TEST YOUR SITE
Wait 5-10 minutes, then visit:
- https://yourdomain.com
- https://yourdomain.com/clock

## ❌ TROUBLESHOOTING

| Issue | Solution |
|-------|----------|
| 404 Error | Files in wrong folder - should be in public_html root |
| CSS not loading | Make sure _next folder was uploaded |
| Blank page | Clear browser cache (Ctrl+Shift+Del) |
| /clock shows 404 | Add .htaccess file |

## ✅ DONE!
Your website is now LIVE! 🎉
