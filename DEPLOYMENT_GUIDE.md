# 🚀 Deployment Guide for Prathfolio

## Prerequisites
- GitHub account (you already have this)
- GitHub Student Pack (you mentioned you have this)
- Your domain configured

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure you've completed these steps:

- [ ] Replaced `/public/profile.png` with your photo
- [ ] Updated domain URLs in `src/config/site.ts`
- [ ] Updated GitHub username/repo in `src/config/site.ts`
- [ ] Created OG image at `/public/og-image.png`
- [ ] Tested build locally: `cd chanhdai.com && pnpm build`

---

## 🌐 Deployment Option 1: Vercel (Recommended)

### Why Vercel?
- ✅ Built by Next.js team - best integration
- ✅ Automatic HTTPS & SSL
- ✅ Global CDN (Edge Network)
- ✅ Automatic deployments on git push
- ✅ Free hobby plan (perfect for portfolios)
- ✅ GitHub Student Pack gives extra credits

### Steps:

1. **Push to GitHub**
   ```bash
   cd /home/prathamesh/Desktop/prathfolio
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Login" → Choose "Continue with GitHub"
   - Click "Add New" → "Project"
   - Import your `prathfolio` repository
   
3. **Configure Build Settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `chanhdai.com`
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install`
   - **Node.js Version**: 20.x

4. **Environment Variables** (if needed)
   ```
   APP_URL=https://yoursite.com
   ```

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes
   - You'll get a URL like: `prathameshtech.in`

6. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions
   - Vercel will automatically provision SSL

---

## 🟠 Deployment Option 2: Cloudflare Pages

### Why Cloudflare Pages?
- ✅ Unlimited bandwidth (truly unlimited!)
- ✅ Excellent global CDN
- ✅ Free tier very generous
- ✅ Built-in DDoS protection
- ✅ Works well with Cloudflare DNS

### Steps:

1. **Push to GitHub** (same as Vercel step 1)

2. **Deploy to Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Login/Sign up
   - Go to "Pages" → "Create a project"
   - Connect to Git → Select GitHub
   - Select your `prathfolio` repository

3. **Configure Build Settings**
   - **Framework preset**: Next.js (SSR)
   - **Build command**: `cd chanhdai.com && pnpm build`
   - **Build output directory**: `chanhdai.com/.next`
   - **Root directory**: `/`
   - **Environment variables**:
     ```
     NODE_VERSION=20
     ```

4. **Deploy & Configure Domain**
   - Click "Save and Deploy"
   - Wait for build to complete
   - Add custom domain in Pages settings

---

## 🎓 GitHub Student Pack Benefits

Since you have the GitHub Student Pack, you get:

### For Vercel:
- $150 in credits
- Pro features for 12 months
- Access to: Analytics, Advanced deployment controls, Team features

### How to Apply:
1. Go to Vercel dashboard
2. Settings → Billing
3. Click "Apply GitHub Student Developer Pack"
4. Verify your GitHub Education status

---

## 🔧 Post-Deployment

### 1. Test Your Site
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Blog posts display
- [ ] Components showcase works
- [ ] Contact form works
- [ ] Dark/Light theme toggle
- [ ] Mobile responsive

### 2. Setup Analytics (Optional)
The site has OpenPanel integration built-in. Check `src/app/layout.tsx` for configuration.

### 3. Setup Monitoring
- Vercel automatically monitors:
  - Build status
  - Deployment health
  - Performance metrics
  - Error tracking

### 4. Configure Git Workflow
Automatic deployments are now enabled:
- Push to `main` → Production deployment
- Push to other branches → Preview deployments
- Pull requests → Preview deployments with unique URLs

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Test locally first
cd chanhdai.com
pnpm build

# If it works locally, check:
# - Node version (should be 20.x or 22.x)
# - Environment variables
# - Build logs on deployment platform
```

### Domain Not Working
- Check DNS records (A/CNAME)
- Wait for DNS propagation (can take up to 48 hours)
- Verify SSL certificate is issued

### Images Not Loading
- Check image paths (should be absolute: `/profile.png`)
- Verify images exist in `/public` directory
- Check Next.js image configuration in `next.config.ts`

---

## 📊 Performance Optimization

Your site is already optimized with:
- ✅ Next.js App Router (RSC)
- ✅ Static generation where possible
- ✅ Image optimization
- ✅ Code splitting
- ✅ Turbopack for fast builds

### Expected Performance:
- **Build time**: 1-2 minutes
- **First load**: < 2s
- **Lighthouse score**: 90+
- **Bundle size**: Optimized

---

## 🔄 Continuous Deployment

Once deployed, your workflow is:

```bash
# 1. Make changes locally
git checkout -b feature/my-feature
# ... make changes ...

# 2. Test build
cd chanhdai.com
pnpm build

# 3. Commit and push
git add .
git commit -m "Add feature"
git push origin feature/my-feature

# 4. Create PR on GitHub
# 5. Review preview deployment
# 6. Merge to main → Automatic production deployment!
```

---

## 📝 Next Steps

1. ✅ Complete TODO items from CLEANUP_SUMMARY.md
2. ✅ Test build locally
3. ✅ Push to GitHub
4. ✅ Deploy to Vercel or Cloudflare
5. ✅ Configure custom domain
6. ✅ Share your portfolio!

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Next.js Docs: https://nextjs.org/docs

**Your deployment is ready! 🎉**
