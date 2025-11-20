# Dermacure Clinic - Portfolio Website

A modern, accessible static portfolio website for a dermatology clinic built with Next.js, Tailwind CSS, and shadcn/ui components.

## 🌟 Features

- **Modern Design**: Clean and professional UI with responsive design
- **Accessibility**: Built with WCAG guidelines in mind
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Fast loading times with optimized assets

## 📋 Sections

1. **Hero**: Eye-catching introduction with call-to-action
2. **Services**: 
   - Dermatology (Medical treatments)
   - Aesthetic (Cosmetic procedures)
3. **Portfolio**: Showcase of treatment results
4. **Testimonials**: 5 fictional patient reviews
5. **Contact/CTA**: Includes responsive Google Maps embed for clinic location

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components based on shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AmmarAhmedl200961/druzmaashfaq-website.git
cd druzmaashfaq-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build

To create a production build:

```bash
npm run build
```

This will generate static files in the `out` directory.

## 🌐 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://[username].github.io/druzmaashfaq-website/`

### Manual Deployment

You can manually deploy the contents of the `out` directory to any static hosting service.

## 📝 Customization

### Update Clinic Information

Edit `/app/page.tsx` to update:
- Clinic name and branding
- Service offerings
- Contact information
- Google Maps location

### Modify Styling

- Update theme colors in `/app/globals.css`
- Modify component styles in `/components/ui/`

### Change Content

All content is in `/app/page.tsx` - update text, add/remove sections as needed.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

For questions or support, please contact the repository owner.

---

Built with ❤️ using Next.js and Tailwind CSS
