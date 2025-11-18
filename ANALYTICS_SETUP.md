# Analytics Setup Guide

## Google Analytics 4 Integration

### Step 1: Get Your Tracking ID
1. Go to https://analytics.google.com/
2. Create a new property
3. Get your Measurement ID (format: G-XXXXXXXXXX)

### Step 2: Add to Your Website

Add this code to `index.html` in the `<head>` section, right after the existing meta tags:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### Step 3: Track Custom Events (Optional)

Add event tracking for important actions:

```javascript
// Track project views
gtag('event', 'view_project', {
  'project_name': 'Liver Cure Clinic',
  'project_type': 'client'
});

// Track contact form submissions
gtag('event', 'contact_form_submit', {
  'form_type': 'main_contact'
});

// Track resume downloads
gtag('event', 'resume_download', {
  'file_name': 'MalaveekaSridhar-Resume.pdf'
});
```

## Google Search Console Setup

### Step 1: Verify Ownership

**Method 1: HTML Tag (Recommended)**
1. Go to https://search.google.com/search-console
2. Add property: `https://malaveeka-portfolio.vercel.app/`
3. Choose "HTML tag" verification method
4. Copy the meta tag they provide
5. Add it to your `index.html` in the `<head>` section:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

**Method 2: HTML File**
1. Download the verification file
2. Place it in your `public` folder
3. Deploy and verify

### Step 2: Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `https://malaveeka-portfolio.vercel.app/sitemap.xml`
3. Click "Submit"

### Step 3: Request Indexing
1. Use the URL Inspection tool
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for important pages

## Bing Webmaster Tools

### Setup
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify using HTML tag or file
4. Submit sitemap: `https://malaveeka-portfolio.vercel.app/sitemap.xml`

## Privacy-Friendly Analytics (Alternative)

If you prefer privacy-focused analytics, consider:

### Plausible Analytics
```html
<script defer data-domain="malaveeka-portfolio.vercel.app" src="https://plausible.io/js/script.js"></script>
```

### Simple Analytics
```html
<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
```

## Event Tracking Examples

### Track Button Clicks

Add to your components:

```typescript
// In Hero.tsx
const trackButtonClick = (buttonName: string) => {
  if (window.gtag) {
    window.gtag('event', 'button_click', {
      'button_name': buttonName,
      'page_location': window.location.href
    });
  }
};

// Usage
<Button onClick={() => {
  trackButtonClick('view_projects');
  scrollToSection("projects");
}}>
  View Projects
</Button>
```

### Track Project Views

```typescript
// In Projects.tsx
const trackProjectView = (projectName: string) => {
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      'item_name': projectName,
      'item_category': 'project'
    });
  }
};
```

### Track Contact Form

```typescript
// In Contact.tsx
const trackContactSubmit = (method: string) => {
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      'method': method,
      'value': 1
    });
  }
};
```

## TypeScript Declarations

Add to `src/types/analytics.d.ts`:

```typescript
interface Window {
  gtag?: (
    command: 'config' | 'event' | 'js',
    targetId: string | Date,
    config?: Record<string, any>
  ) => void;
  dataLayer?: any[];
}
```

## Environment Variables

Create `.env.local`:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GSC_VERIFICATION=your_verification_code
```

Use in your code:

```typescript
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
```

## Monitoring Dashboard

### Key Metrics to Track

1. **Traffic Metrics**
   - Total visitors
   - Page views
   - Bounce rate
   - Average session duration

2. **Acquisition**
   - Organic search traffic
   - Direct traffic
   - Referral sources
   - Social media traffic

3. **Behavior**
   - Most viewed pages
   - Most clicked projects
   - Resume downloads
   - Contact form submissions

4. **Conversions**
   - Contact form fills
   - Email clicks
   - Phone clicks
   - Resume downloads

### Weekly Review Checklist

- [ ] Check total visitors
- [ ] Review top pages
- [ ] Analyze traffic sources
- [ ] Check conversion rates
- [ ] Review search queries (GSC)
- [ ] Check for crawl errors
- [ ] Monitor page speed

## Performance Monitoring

### Core Web Vitals

Track these in Google Search Console:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### PageSpeed Insights

Test regularly:
```
https://pagespeed.web.dev/
```

Enter your URL and aim for:
- Mobile score: 90+
- Desktop score: 95+

## Privacy Compliance

### Cookie Consent (If Required)

If you're targeting EU users, add cookie consent:

```html
<!-- Cookie Consent Banner -->
<div id="cookie-consent" class="fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-50">
  <div class="container mx-auto flex items-center justify-between">
    <p class="text-sm">
      This site uses cookies to improve your experience and analyze traffic.
    </p>
    <button onclick="acceptCookies()" class="btn-primary">
      Accept
    </button>
  </div>
</div>

<script>
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'true');
  document.getElementById('cookie-consent').style.display = 'none';
  // Initialize analytics here
}

if (localStorage.getItem('cookieConsent') === 'true') {
  // Analytics already initialized
} else {
  document.getElementById('cookie-consent').style.display = 'block';
}
</script>
```

### Privacy Policy

Add a privacy policy page covering:
- What data you collect
- How you use it
- Third-party services (Google Analytics)
- User rights
- Contact information

## Troubleshooting

### Analytics Not Working?

1. **Check if script is loaded**
   - Open browser console
   - Type: `window.gtag`
   - Should return a function

2. **Check for ad blockers**
   - Disable ad blockers
   - Test in incognito mode

3. **Verify Measurement ID**
   - Double-check the ID format
   - Ensure no typos

### Search Console Issues?

1. **Not indexed?**
   - Check robots.txt
   - Verify sitemap is accessible
   - Request indexing manually

2. **Coverage errors?**
   - Review error details
   - Fix any broken links
   - Resubmit sitemap

## Next Steps

1. ✅ Set up Google Analytics
2. ✅ Verify Google Search Console
3. ✅ Submit sitemap
4. ✅ Set up Bing Webmaster Tools
5. ✅ Add event tracking
6. ✅ Monitor weekly metrics
7. ✅ Optimize based on data

---

**Need Help?** Let me know if you need assistance with any of these steps!

**Last Updated**: November 18, 2025
