# 👗 Tammiey's Design - Bespoke Tailoring Website

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [SEO & Performance](#seo--performance)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

##  Overview

Tammiey's Design is a **bespoke tailoring atelier** based in Potchefstroom, South Africa, specializing in custom-made garments that celebrate South African cultural heritage. This website serves as:

-  **Digital Portfolio:** Showcase 20+ completed projects with before/after galleries
-  **Booking Platform:** Integrated consultation scheduler
-  **E-Commerce Store:** Direct online ordering for bespoke tailoring
-  **Blog & Content Hub:** SEO-optimized articles on tailoring, fabrics, and styling
-  **Client Testimonials:** Build trust through authentic customer reviews

**Live Site:** [tammiesdesign.co.za](https://tammiesdesign.co.za)  
**Client Portal:** [app.tammiesdesign.co.za](https://app.tammiesdesign.co.za)

---

##  Features

### Core Features
-  **Fully Responsive Design** - Optimized for mobile (375px), tablet (768px), desktop (1025px+)
-  **Performance Optimized** - <2s load time on 4G networks (Google PageSpeed 90+)
-  **SEO Optimized** - Schema markup, meta tags, XML sitemap, keyword targeting
-  **Accessibility Compliant** - WCAG AA standards, keyboard navigation, alt text
-  **Dark/Light Theme Toggle** - User preference saved in localStorage
-  **Consultation Booking System** - Real-time calendar with Calendly integration
-  **Portfolio Gallery** - Image lazy-loading with lightbox functionality
-  **E-Commerce Integration** - WooCommerce with Stripe/PayPal payment processing
-  **Newsletter Signup** - Mailchimp integration with automated workflows

### Advanced Features
-  **Video Support** - Hero section with video background or carousel
-  **Client Testimonials** - 5-star ratings, video reviews, client photos
-  **Analytics Integration** - Google Analytics 4, Hotjar for user insights
-  **Email Automation** - Automated confirmation, reminder, and follow-up emails
-  **Security** - SSL/TLS encryption, PCI-DSS compliance, GDPR-ready
-  **Location Integration** - Google Maps embedded with business information
-  **Social Media Integration** - Instagram feed, social sharing, follow buttons


## Quick Start

### For Designers & Project Managers

1. **View Wireframes:** [/docs/wireframes](./docs/wireframes/)
2. **View Prototypes:** [Figma Design File](https://figma.com/file/xxx)
3. **Check User Flows:** [/docs/user-flows](./docs/user-flows/)


## 📁 Project Structure

```
tammies-design/
│
├── index.html                 # Homepage
├── about.html                 # About page
├── services.html              # Services & pricing
├── portfolio.html             # Portfolio gallery
├── blog.html                  # Blog listing
├── contact.html               # Contact form
│
├── css/
│   ├── styles.css            # Main stylesheet (with CSS variables)
│   ├── responsive.css        # Mobile/tablet media queries
│   └── animations.css        # Keyframe animations
│
├── js/
│   ├── main.js               # Core functionality
│   ├── booking.js            # Calendly integration
│   ├── theme-toggle.js       # Dark/light mode
│   ├── smooth-scroll.js      # Smooth scrolling
│   └── form-validation.js    # Contact form handling
│
├── images/
│   ├── logo/                 # Brand assets
│   ├── portfolio/            # Project photos
│   ├── team/                 # Team member photos
│   └── icons/                # UI icons (SVG)
│
├── docs/
│   ├── CONTRIBUTING.md       # Contribution guidelines
│   ├── DESIGN-SYSTEM.md      # Design token documentation
│   ├── SEO-STRATEGY.md       # SEO implementation details
│   ├── DEPLOYMENT.md         # Hosting & deployment guide
│   └── wireframes/           # Initial wireframe images
│
└── README.md                  # This file
```

---

## 🎨 Design System

### Color Palette

```css
:root {
  --black: #111111;
  --black-soft: #1a1a1a;
  
  --gold: #c9a66b;
  --gold-light: #e4c792;
  --gold-dark: #9f7b43;
  
  --white: #ffffff;
  --cream: #faf8f3;
  --cream-dark: #f2eee7;
  
  --text: #252525;
  --text-light: #6f6f6f;
  --text-muted: #999999;
  
  --border: #e5ded3;
  
  --success: #477a55;
  --error: #c1435e;
}
```

### Typography

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| **H1** | Georgia | 2.8rem - 5rem | 300-400 | 1.25 |
| **H2** | Georgia | 1.8rem - 2.8rem | 400 | 1.25 |
| **H3** | Segoe UI | 1.35rem | 600 | 1.4 |
| **Body** | Segoe UI | 16px | 400 | 1.7 |
| **Small** | Segoe UI | 0.9rem | 400 | 1.6 |

### Spacing Scale
- **xs:** 4px
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px
- **2xl:** 48px
- **3xl:** 64px

### Border Radius
- **sm:** 4px
- **md:** 8px
- **lg:** 16px
- **xl:** 24px

### Shadows
```css
--shadow-sm: 0 4px 15px rgba(0, 0, 0, 0.06);
--shadow-md: 0 12px 35px rgba(0, 0, 0, 0.10);
--shadow-lg: 0 20px 55px rgba(0, 0, 0, 0.15);
```

---

## 🛠️ Technologies Used

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic markup | Latest |
| **CSS3** | Styling & animations | Latest |
| **JavaScript (ES6+)** | Interactivity & functionality | Latest |
| **Intersection Observer API** | Scroll animations | Native |

### Backend & Integrations
| Service | Purpose | Status |
|---------|---------|--------|
| **Calendly API** | Consultation booking | ✅ Active |
| **Mailchimp API** | Newsletter management | ✅ Active |
| **Stripe/PayPal** | Payment processing | ✅ Active |
| **Google Analytics 4** | Traffic analytics | ✅ Active |
| **Google Search Console** | SEO monitoring | ✅ Active |
| **Hotjar** | User behavior analytics | ✅ Active |

### Hosting
- **Hosting Provider:** [Netlify / Vercel / AWS]
- **Domain Registrar:** [Namecheap / GoDaddy]
- **SSL Certificate:** Let's Encrypt (auto-renewed)
- **CDN:** Cloudflare (for image optimization)

---

## 💻 Installation

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text)
- Git (for version control)
- Optional: Node.js & npm (if using build tools)

### Step-by-Step Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/tammies-design.git
cd tammies-design
```

#### 2. Local Development
```bash
# Option A: Use Python (Python 3+)
python -m http.server 8000

# Option B: Use Node.js (with http-server)
npx http-server

# Option C: Use VS Code Live Server Extension
# Right-click index.html → "Open with Live Server"
```

#### 3. Open in Browser
Visit `http://localhost:8000` in your browser.

#### 4. Configuration Files to Update

**Environment Variables (.env):**
```env
CALENDLY_CALENDAR_URL=https://calendly.com/tammies-design
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_LIST_ID=your_list_id_here
STRIPE_PUBLIC_KEY=your_stripe_key_here
GA_TRACKING_ID=G-XXXXXXXXXX
```

**config.js:**
```javascript
const CONFIG = {
  siteName: "Tammiey's Design",
  siteURL: "https://tammiesdesign.co.za",
  email: "info@tammiesdesign.co.za",
  phone: "+27 (0)18 XXX XXXX",
  socialMedia: {
    instagram: "https://instagram.com/tammiesdesign",
    facebook: "https://facebook.com/tammiesdesign"
  }
};
```

---

## 🔧 Development

### Code Style Guidelines

#### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Include `alt` text on all images
- Validate with [W3C HTML Validator](https://validator.w3.org/)

#### CSS
- Use CSS variables for colors and spacing
- Mobile-first approach with breakpoints at 768px and 1024px
- Follow BEM naming convention: `.block__element--modifier`
- No inline styles; use external stylesheet only

#### JavaScript
- Use Vanilla JS (ES6+ preferred, no jQuery)
- Avoid global variables; use const/let in modules
- Add comments explaining complex logic
- Test in all supported browsers

### Development Workflow

```bash
# Create a feature branch
git checkout -b feature/new-feature

# Make changes and test locally
npm run dev

# Commit with descriptive messages
git commit -m "feat: add testimonial carousel"

# Push to GitHub
git push origin feature/new-feature

# Create a Pull Request for review
```

### Key JavaScript Functions

**Smooth Scrolling:**
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
```

**Dark Mode Toggle:**
```javascript
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.setAttribute(
    'data-theme',
    document.documentElement.getAttribute('data-theme') === 'light' 
      ? 'dark' 
      : 'light'
  );
  localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
});
```

**Scroll Reveal Animation:**
```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

---

## 🚀 Deployment

### Deploying to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Connect your repository
netlify connect

# Deploy
netlify deploy --prod
```

### Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Setup for Production

1. **Set environment variables** in hosting provider dashboard
2. **Configure custom domain** (tammiesdesign.co.za)
3. **Enable auto-HTTPS** (usually automatic)
4. **Set up automatic deployments** from GitHub main branch
5. **Configure redirects** for non-www URLs (optional)

**Redirects (netlify.toml or vercel.json):**
```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### Pre-Deployment Checklist
- [ ] All images optimized (<100KB each)
- [ ] No console errors or warnings
- [ ] Lighthouse score 90+ on all metrics
- [ ] Mobile responsiveness tested on 5+ devices
- [ ] Forms tested and working
- [ ] Analytics properly configured
- [ ] SSL certificate installed
- [ ] Backups configured

---

## 📊 SEO & Performance

### SEO Best Practices Implemented

**Meta Tags & Schema Markup:**
```html
<meta name="description" content="Bespoke tailoring celebrating South African heritage...">
<meta name="keywords" content="bespoke tailoring, custom garments, Johannesburg...">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tammiey's Design",
  "url": "https://tammiesdesign.co.za",
  "telephone": "+27 (0)18 XXX XXXX",
  "address": {...},
  "priceRange": "R$$",
  "aggregateRating": {...}
}
</script>
```

### Performance Optimization

**Image Optimization:**
- Responsive images with `srcset` and `sizes`
- WebP format with fallbacks
- Lazy loading with `loading="lazy"`
- Optimized thumbnail sizes

**CSS & JavaScript:**
- Minified CSS (production)
- Minified JavaScript (production)
- Critical CSS inline in `<head>`
- Deferred JavaScript loading
- No render-blocking resources

**Caching Strategy:**
- Browser caching (1 month for images, 1 week for CSS/JS)
- Server-side caching for API responses
- CDN for static assets (Cloudflare)

**Core Web Vitals Targets:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### SEO Monitoring

- Google Search Console: Monitor indexing, keywords, click-through rate
- Google Analytics 4: Track organic traffic, user behavior, conversions
- Rank tracking: Monthly monitoring of target keywords
- Backlink analysis: Using Ahrefs or Moz for competitor analysis

---

##  Accessibility

### WCAG AA Compliance

- ✅ **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
- ✅ **Keyboard Navigation:** All interactive elements accessible via Tab key
- ✅ **Alt Text:** Descriptive alt text on all images
- ✅ **Screen Readers:** Semantic HTML supports screen reader navigation
- ✅ **Focus Indicators:** Visible focus outlines on all buttons and links
- ✅ **Skip Links:** Skip to main content link on all pages
- ✅ **Form Labels:** Associated `<label>` tags on all form inputs
- ✅ **Video Captions:** All videos include captions or transcripts

### Accessibility Checklist

```html
<!-- ✅ Semantic structure -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<section>...</section>
<article>...</article>
<aside>...</aside>
<footer>...</footer>

<!-- ✅ Alt text on images -->
<img src="dress.jpg" alt="Custom bridal gown with gold embroidery">

<!-- ✅ Form labels -->
<label for="name">Full Name:</label>
<input id="name" type="text" required>

<!-- ✅ Skip link -->
<a href="#main" class="skip-link">Skip to main content</a>

<!-- ✅ ARIA labels for icons -->
<button aria-label="Open navigation menu">☰</button>
```

---

##  Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest 2 | ✅ Full |
| Firefox | Latest 2 | ✅ Full |
| Safari | Latest 2 | ✅ Full |
| Edge | Latest 2 | ✅ Full |
| Mobile Chrome | Latest | ✅ Full |
| Mobile Safari | Latest | ✅ Full |

**Polyfills:** For older browsers, consider:
- `core-js` for JavaScript features
- `postcss-preset-env` for CSS compatibility

---

##  Contributing

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/tammies-design.git
  

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
 

3. **Make changes** following code style guidelines

4. **Commit with clear messages**
   ```bash
   git commit -m "feat: add testimonial video section"
 

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
  

6. **Create a Pull Request** with description of changes

### Reporting Issues

Found a bug? Please report it in the [Issues tab](https://github.com/yourusername/tammies-design/issues) with:
- Clear title and description
- Steps to reproduce
- Expected vs. actual behavior
- Browser and OS information
- Screenshots if applicable

### Feature Requests

Have an idea? Open an issue with the `enhancement` label describing:
- What feature you'd like
- Why it would be useful
- How it might work



##  License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

**You are free to:**
- Use this code in personal or commercial projects
- Modify and distribute the code
- Include copyright notice

**You must:**
- Include original license and copyright notice


##  Contact & Support

**Project Owner:** Tammiey's Design  
**Email:** [info@tammiesdesign.co.za](mailto:info@tammiesdesign.co.za)  
**Phone:** [+27 (0)18 XXX XXXX]  
**Website:** [https://tammiesdesign.co.za](https://tammiesdesign.co.za)  
**Instagram:** [@tammiesdesign](https://instagram.com/tammiesdesign)  

**Development Team Lead:** [Your Name]  
**Email:** [your.email@example.com]

### Getting Help

-  **Documentation:** Check `/docs` folder
-  **Bug Reports:** Use GitHub Issues
-  **Questions:** Start a GitHub Discussion
-  **Direct Contact:** Email the project owner



## Project Status

**Current Version:** 1.0.0  
**Last Updated:** September 2026  
**Status:** ✅ Live in Production

### Roadmap

- [ ] **Phase 2 (Q4 2026):** Mobile app development
- [ ] **Phase 2 (Q4 2026):** 3D body visualization tool
- [ ] **Phase 3 (Q1 2027):** Multi-language support
- [ ] **Phase 3 (Q1 2027):** AR try-on feature
- [ ] **Phase 4 (Q2 2027):** AI style recommendations



##  Additional Resources

- [Design System Documentation](./docs/DESIGN-SYSTEM.md)
- [SEO Strategy & Implementation](./docs/SEO-STRATEGY.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./CONTRIBUTING.md)
- [Project Proposal (Rubric-Aligned)](./docs/PROPOSAL.md)
