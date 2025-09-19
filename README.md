# Eolas Landing Page V2

A futuristic, modern lead-generation landing page for Eolas built with Next.js 14, TypeScript, and advanced animations.

## 🚀 Features

### **Core Features**:
- Modern Next.js 14 App Router architecture with TypeScript
- Futuristic dark theme with neon glow effects and gradient accents
- Advanced animations using Framer Motion and Anime.js
- Responsive design optimized for all devices
- Lead generation form with validation using React Hook Form + Zod
- SEO optimized with proper meta tags and structured data
- Production-ready code with clean organization
- API endpoint for lead capture with validation

### **Design Elements**:
- Dark theme with neon blue/purple/cyan gradient system
- Glass morphism cards with subtle blur effects
- Smooth scroll-triggered animations and micro-interactions  
- Floating 3D shapes and particle animations
- Responsive breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Modern typography with Inter and JetBrains Mono fonts

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS with custom CSS variables
- **Animations**: Framer Motion + Anime.js
- **Forms**: React Hook Form + @hookform/resolvers + Zod
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter + JetBrains Mono)

## 📁 Project Structure

```
app/
├── api/lead/route.ts          # Lead capture API endpoint
├── globals.css                # Global styles and CSS variables
├── layout.tsx                 # Root layout with SEO metadata
└── page.tsx                   # Main landing page

components/
├── Navbar.tsx                 # Sticky navigation with mobile menu
├── Hero.tsx                   # Hero section with animated background
├── About.tsx                  # About section with mission statement
├── Features.tsx               # Edge, Reach, Trace feature cards
├── Timeline.tsx               # How it works timeline animation
├── LeadForm.tsx               # Lead capture form with validation
├── Footer.tsx                 # Footer with social links
├── Button.tsx                 # Reusable button component
└── AnimatedBackground.tsx     # Canvas-based particle animation

lib/
└── animations.ts              # Framer Motion variants and Anime.js functions
```

## 🎨 Brand Theme

### Edge, Reach, Trace Narrative
- **Edge**: Advanced trading capabilities with real-time market analysis
- **Reach**: Social engagement and multi-platform integration
- **Trace**: Complete transparency and security monitoring

### Color System
- **Neon Blue**: #00d4ff (primary actions, borders)
- **Neon Purple**: #8b5cf6 (gradients, accents)
- **Neon Cyan**: #22d3ee (highlights, secondary)
- **Neon Pink**: #f472b6 (special effects)

## 🔗 Call-to-Actions

### Primary CTAs
- **Follow on X**: https://twitter.com/eolas
- **Join Telegram**: https://t.me/eolas  
- **View Docs**: https://docs.eolas.fun

### Secondary CTAs
- **Join Waitlist**: Scrolls to lead form
- **Get Started**: Same as Join Waitlist

## 📝 Content Sections

1. **Hero**: Bold headline with Edge, Reach, Trace messaging
2. **About**: Mission statement with three pillar explanation
3. **Features**: Detailed cards for each capability area
4. **Timeline**: 4-step process (Analyze → Act → Communicate → Adapt)
5. **Lead Form**: Name, email, company, use case with validation
6. **Footer**: Social links, quick navigation, brand info

## 🎬 Animations

### Framer Motion
- Page entrance animations with stagger effects
- Scroll-triggered reveals for sections
- Hover states for interactive elements
- Form submission success animations

### Anime.js
- Floating 3D shapes in hero background
- Particle system animations
- Timeline step-by-step reveals
- Hover glow effects on feature cards

## 🔧 Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🎯 Customization

### Replace Placeholder Assets
- Update character visuals in `components/Hero.tsx` (line 45-55)
- Replace logo placeholder in `components/Navbar.tsx` (line 35)
- Add actual social media URLs in component files

### Update Content
- Edit messaging in each component file
- Modify form fields in `components/LeadForm.tsx`
- Update social links and documentation URLs

### Integrate Backend
- Connect lead form to your database in `app/api/lead/route.ts`
- Add email service integration (SendGrid, Resend)
- Implement CRM connections (HubSpot, Salesforce)

### Deploy
- Optimized for Vercel deployment
- Static export ready with `next.config.js`
- All assets and animations work in production

## 📱 Responsive Design

- **Mobile**: Stacked layout, simplified animations
- **Tablet**: 2-column grids, condensed navigation
- **Desktop**: Full layout with advanced animations

## 🔒 Form Validation

The lead form includes comprehensive validation:
- Required fields with helpful error messages
- Email format validation
- Minimum character requirements
- Success state with animated confirmation

## 🚀 Performance

- Optimized animations with `transform` and `opacity`
- Lazy loading for heavy components
- Minimal bundle size with tree-shaking
- Fast page loads with Next.js optimization

---

Built with ❤️ for the future of AI agents.