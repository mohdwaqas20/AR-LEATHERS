# AR LEATHERS — Website

A premium, light-luxury corporate website for AR LEATHERS, built with React + Vite.

## Tech Stack
- React + Vite
- Tailwind CSS (custom leather-inspired theme: Cocoa Noir, Amber Lux, Sandalwood + Accent Gold)
- Framer Motion (animations, page/scroll reveals)
- Swiper.js (product image galleries, testimonials)
- React Router DOM (Home + individual product detail pages)
- React CountUp + React Intersection Observer (animated statistics)
- React Icons

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> outputs to /dist
npm run preview    # preview the production build locally
```

## Project Structure

```
src/
  assets/            # logo + sample product image (placeholders)
  components/        # all homepage sections (Hero, About, Products, Process, Services, ...)
  data/products.js   # all 10 product entries — EDIT HERE to update product content/images
  pages/
    Home.jsx         # assembles all homepage sections
    ProductDetail.jsx# individual product page (gallery, specs, related products)
  App.jsx            # routing, navbar, footer, floating buttons
```

## Important — Placeholder Images

Every product currently uses the same sample hide photo (3 copies) as a placeholder,
exactly as requested, so the layout and gallery/slider can be reviewed before real
product photography is supplied.

**To replace images later:** open `src/data/products.js` and, for each product,
update the `images: [...]` array with the paths to the new photos (drop new files
into `src/assets/` and import them at the top of the file, then reference them per
product — 3 or more images per product are supported).

## Editable Content

- **Logo:** `src/assets/logo.png`
- **Color palette:** `tailwind.config.js` -> `theme.extend.colors`
- **Company text / About / Mission:** `src/components/About.jsx`, `src/components/WhyChoose.jsx`
- **Products:** `src/data/products.js`
- **Contact details:** `src/components/Contact.jsx` (phone, email, address, WhatsApp number, map embed)
- **WhatsApp number:** `src/components/FloatingUI.jsx` and `src/components/Contact.jsx`

## Notes
- The Global Export section uses a stylised radial "hub" diagram rather than a literal
  world map — it's animated and can be swapped for a geographic map later if preferred.
- Contact form and newsletter form currently show a confirmation state client-side;
  connect them to your email/CRM backend (e.g. Formspree, EmailJS, or a custom API) to
  actually receive submissions.
