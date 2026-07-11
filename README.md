# IINTEKKU Group Website

## 🚀 Quick Start

### Installation
```bash
npm install
npm run build
```

### Development
```bash
npm run dev
```

### For Hostinger Upload
1. Run `npm run build` (creates `out` folder)
2. Upload ALL files from `out` folder to `public_html`
3. Add `.htaccess` file (see below)
4. Visit your domain

### .htaccess Content
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

## 📁 File Structure
```
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── styles/
│   ├── types/
│   ├── lib/
│   └── utils/
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🌐 URLs
- Home: https://yourdomain.com
- Clock: https://yourdomain.com/clock

## ✨ Features
- Real-time global clock
- 6 major business time zones
- Responsive design
- Dark theme
- Beautiful animations

## 📞 Contact
info@iintekkugroup.org
