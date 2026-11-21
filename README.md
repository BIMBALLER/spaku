# Spaku Kleaners Limited

**Luxury Cleaning, Redefined.**

Official web application for **Spaku Kleaners Limited**, providing premium residential, commercial, and industrial cleaning and fumigation services across **Ikoyi, Victoria Island, Lekki, and Banana Island, Lagos**.

- **Live Website:** [https://www.spakukleaners.com.ng/](https://www.spakukleaners.com.ng/)
- **Ranked.ng Profile:** [Spaku Kleaners Limited (Ranked Verified)](https://ranked.ng/place/spaku-kleaners-limited-ifqzbo)

---

## Features

- **Luxury Dark Navy & Brushed Gold Aesthetic** (`#081022` & `#d4af37`) tailored for high-end residential and corporate clients.
- **Full-Bleed Hero Video Showcase** with an interactive floating booking & availability bar.
- **Service Catalog:** Commercial Cleaning, Deep Cleaning, Fumigation, Rug & Upholstery Restoration, Post-Construction Cleaning, and Industrial Facility Management.
- **Live Field Video Portfolio (`Our Work in Action`):** IntersectionObserver-powered lazy-loading video reels showcasing real transformations.
- **Concierge Booking & Quote Form:** Pre-fills service, location, property size, and preferred date from the landing page into a Formspree-backed inquiry workflow.
- **Analytics & Verification:** Integrated Google Analytics (`G-7MXVYMFT98`), Google Ads conversion tracking (`AW-18150730623`), and official Ranked.ng verification badge.

---

## Tech Stack

- **Framework:** React + Vite
- **Routing:** React Router (`react-router-dom`)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Forms:** Formspree

---

## Project Structure

```text
├── public/
│   ├── logo.jpg          # Brand logo
│   ├── VID-20261121-WA0003.mp4       # Hero background & Commercial/Residential overview
│   ├── VID-20261121-WA0004.mp4       # Deep Cleaning showcase
│   ├── VID-20261121-WA0005.mp4        # Pest Eradication & Fumigation showcase
│   └── 134662.mp4        # Rug & Upholstery restoration showcase
├── src/
│   ├── App.jsx           # Main application, routing, sections & booking form
│   ├── index.css         # Global styles & luxury font definitions
│   └── main.jsx          # React entry point
├── index.html            # HTML template & metadata
└── package.json