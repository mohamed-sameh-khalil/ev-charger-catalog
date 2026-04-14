# EV Charger Catalog — Technical Documentation

Frontend SPA for an EV charging product catalog, recommendation tool, and knowledge base. Built for [Solargeco E-Mobility](https://www.solargyco.com/mobility).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Routing | React Router v6 |
| State | React Context API |
| Deployment | Netlify (static SPA) |
| Data | Mock data in `src/services/products.js` (Supabase-ready) |
| Fonts | Inter (EN) · Cairo (AR) via Google Fonts |

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx            # Nav, language toggle, "Talk to Expert" button
│   ├── Footer.jsx            # Contact info, logo
│   ├── ProductCard.jsx       # Card used in catalog and homepage grid
│   ├── CompareBar.jsx        # Fixed bottom bar for product comparison
│   └── ExpertFormModal.jsx   # "Talk to Expert" modal + "Request a Quote" modal
├── contexts/
│   ├── LanguageContext.jsx   # EN/AR switching, RTL/LTR, t() translation function
│   └── CompareContext.jsx    # Compare feature state (max 3 products)
├── data/
│   ├── translations.js       # All UI strings in English and Arabic
│   └── questions.js          # "Help Me Choose" questionnaire questions (bilingual)
├── hooks/
│   └── useProducts.js        # React hook wrapping getProducts() with loading state
├── pages/
│   ├── HomePage.jsx          # Hero, best sellers, help me choose banner, contact
│   ├── CatalogPage.jsx       # Search + filter sidebar + product grid
│   ├── ProductDetailPage.jsx # Full product page with specs, image, datasheet
│   ├── QuestionnairePage.jsx # 4-step "Help Me Choose" questionnaire
│   ├── ResultsPage.jsx       # Questionnaire results with matched products
│   ├── KnowledgeBankPage.jsx # FAQ accordion with rich HTML answers
│   └── ComparePage.jsx       # Side-by-side product comparison table
├── services/
│   └── products.js           # ⭐ Data service layer — all data access goes here
└── index.css                 # Tailwind imports, brand theme tokens, KB answer styles

public/
├── _redirects                # Netlify SPA routing fix (/* → /index.html)
├── products/
│   ├── images/               # Product images (PNG)
│   └── datasheets/           # Product datasheets (PDF)
└── icons.svg
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/catalog` | Product catalog with filters |
| `/catalog/:slug` | Individual product detail page |
| `/find-your-charger` | Help Me Choose questionnaire |
| `/find-your-charger/results` | Questionnaire results |
| `/knowledge-bank` | FAQ knowledge base |
| `/compare` | Side-by-side product comparison |

---

## Data Layer (`src/services/products.js`)

All data access is isolated behind this single file. Every exported function returns a `Promise`, so swapping in Supabase requires no changes to any component — only this file changes.

### Key functions

| Function | Description |
|---|---|
| `getProducts(filters)` | Fetch products with optional filters (see below) |
| `getProductBySlug(slug)` | Fetch a single product by URL slug |
| `getCategories()` | Fetch all categories |
| `getBrands()` | Fetch unique brand names from active products |
| `getConnectorTypes()` | Fetch unique connector types from active products |
| `getImageUrl(path)` | Resolve an image storage path to a URL |
| `getDatasheetUrl(path)` | Resolve a datasheet storage path to a URL |
| `submitExpertRequest(payload)` | Submit "Talk to Expert" form |
| `submitQuoteRequest(payload)` | Submit "Request a Quote" form |

### Supported filter keys for `getProducts()`

```js
{
  category_id,      // string — filter by category ID
  category_name,    // string — filter by category name
  is_featured,      // boolean — best sellers only
  connector_type,   // string — 'Type 1' | 'Type 2' | 'GBT'
  phase,            // string — 'Single Phase' | 'Three Phase'
  min_power_kw,     // number
  max_power_kw,     // number
  is_smart,         // boolean
  brand,            // string
  price_sort,       // 'asc' | 'desc'
  search,           // string — searches name, short_description, brand
}
```

### Product data shape

```js
{
  id, slug, name, brand, category_id,
  short_description, long_description,
  price, currency,                        // e.g. 22655, 'EGP'
  power_output_kw,                        // numeric, used for filtering
  power_output_label,                     // optional string e.g. '7.4 kW / 22 kW' for dual-power products
  connector_type, phase,
  is_smart, is_featured, is_active,
  warranty,
  key_features: [],                       // string[]
  categories: { name },                   // denormalised category name
  product_images: [
    { storage_path, alt_text, is_primary, display_order }
  ],
  product_datasheets: [
    { storage_path, file_name, file_size_bytes }
    // storage_path: null  → shows "Coming soon" badge
    // storage_path: '/products/datasheets/file.pdf' → active download button
  ],
}
```

---

## Branding & Theme

Defined in `src/index.css` under `@theme`:

| Token | Value | Usage |
|---|---|---|
| `--color-brand-dark` | `#060B18` | Page background |
| `--color-brand-navy` | `#0C1A35` | Cards, sidebars |
| `--color-brand-blue` | `#0078FF` | Primary buttons, accents |
| `--color-brand-sky` | `#50C8FF` | Links, highlights |

Used as Tailwind utilities: `bg-brand-blue`, `text-brand-sky`, etc.

---

## Bilingual Support (EN / AR)

- Language state lives in `LanguageContext`. Toggle switches between `en` and `ar`.
- The root `<div>` gets `dir="rtl"` and `lang="ar"` when Arabic is active — all layout flips automatically via Tailwind logical properties (`ps-`, `pe-`, `ms-`, `me-`, `start-`, `end-`, `border-inline-start`).
- All strings live in `src/data/translations.js` under `en` and `ar` keys.
- To add a new string: add it to both `en` and `ar` objects, then use `t('your_key')` in any component.
- Fonts: Cairo (AR) / Inter (EN) applied via `[dir='rtl']` / `[dir='ltr']` CSS selectors.

---

## Product Images & Datasheets

Currently served as static files from `public/products/`:

```
public/products/images/       ← product photos (PNG)
public/products/datasheets/   ← datasheets (PDF)
```

In `products.js`, `storage_path` values are set to paths like `/products/images/rolec-evo.png`. The `getImageUrl()` and `getDatasheetUrl()` functions pass these through as-is, which Vite/Netlify serves directly.

**When migrating to Supabase Storage**, replace the two helper functions:

```js
// getImageUrl
return supabase.storage.from('product-images').getPublicUrl(storagePath).data.publicUrl

// getDatasheetUrl
return supabase.storage.from('product-datasheets').getPublicUrl(storagePath).data.publicUrl
```

---

## Netlify Deployment

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA routing:** `public/_redirects` contains `/* /index.html 200` — this fixes 404 errors when refreshing any route other than `/`.
- **Environment variables:** None required for the current frontend-only setup.

---

## Forms (Current State)

Both forms — "Talk to Our Expert" and "Request a Quote" — show a professional confirmation popup on submit. **No data is currently sent anywhere.** The submit functions in `products.js` are intentional no-ops pending backend integration.

```js
export async function submitExpertRequest(_payload) {
  // no-op — success popup is shown client-side
}
export async function submitQuoteRequest(_payload) {
  // no-op — success popup is shown client-side
}
```

---

## Next Steps

### 1. Email / Form Backend
Wire up form submissions to deliver leads to `hossam.mostafa@solargyco.com`. Recommended options:

| Option | Effort | Notes |
|---|---|---|
| **[EmailJS](https://emailjs.com)** | Very low | Client-side only, no backend needed, free tier available |
| **[Resend](https://resend.com)** + Netlify Function | Low | Free tier, clean API, good deliverability |
| **Supabase Edge Function** | Medium | Best if Supabase is already being used for the database |

The payload shape is already correct — `submitExpertRequest({ name, mobile })` and `submitQuoteRequest({ name, mobile, product_name })`. Just replace the no-op function bodies.

### 2. Supabase Database Integration
Replace the mock `PRODUCTS` and `CATEGORIES` arrays with real Supabase queries. All queries are marked with `// TODO` comments in `src/services/products.js`. No component files need to change.

Steps:
1. Create a Supabase project
2. Create `categories` and `products` tables matching the data shape above
3. Create `product-images` and `product-datasheets` Storage buckets (public)
4. Replace each service function body with the corresponding Supabase query
5. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to Netlify environment variables

### 3. Add More Products
Currently done by editing `src/services/products.js`. After Supabase is integrated, products are managed entirely from the Supabase dashboard — no code changes needed.

### 4. Knowledge Bank Contact Link
The apartment FAQ answer links to `/#contact`. Once the site has a dedicated contact page, update the `href` in both the EN and AR `kb_faq` entries in `src/data/translations.js` (question 15, the apartment question).

### 5. Logo Hosting
The logo is currently loaded from an external URL (`solargyco.com`). It should be hosted locally under `public/` for reliability and performance.

---

## Local Development

```bash
npm install
npm run dev      # starts at http://localhost:5173
npm run build    # production build → dist/
```
