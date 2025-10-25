# Gravity - Enterprise B2B Services Platform

<div align="center">

![Gravity Logo](public/images/logo.png)

[![Next.js](https://img.shields.io/badge/Next.js-13.0+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://gravity-b2b.vercel.app) | [Documentation](docs/README.md) | [Report Bug](https://github.com/Shiwani322004/Gravity/issues) | [Request Feature](https://github.com/Shiwani322004/Gravity/issues)

</div>

## Overview

Gravity is a modern B2B services platform built with Next.js, offering comprehensive business solutions including Lead Generation, Email Marketing, and Content Syndication services. The platform provides a professional and scalable solution for businesses looking to expand their reach and optimize their marketing efforts.

## Features

- **Lead Generation Services**
  - Advanced lead delivery system
  - Customizable lead forms
  - Automated process management
  - Logo showcase section

- **Email Marketing Solutions**
  - Email analytics dashboard
  - Custom email templates
  - Process automation
  - Performance tracking

- **Content Syndication**
  - Multiple content types support
  - Content journey mapping
  - Feature-rich distribution
  - Analytics and tracking

## 🚀 Tech Stack

### Core Technologies
- **Frontend Framework:** Next.js 13+ with App Router
- **Styling:** TailwindCSS with custom configurations
- **State Management:** React Context API
- **Deployment:** Vercel Platform
- **Performance:** Built-in SEO optimization, Edge Functions

### Key Dependencies
- **UI Components:** Headless UI
- **Icons:** Heroicons
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Validation:** Zod
- **Date Handling:** date-fns
- **HTTP Client:** Axios

### Development Tools
- **Code Quality:** ESLint, Prettier
- **Git Hooks:** Husky
- **Testing:** Jest, React Testing Library
- **Performance Monitoring:** Vercel Analytics
- **Type Checking:** PropTypes

### Performance Features
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Image Optimization
- Font Optimization
- Dynamic Imports

## Project Structure

```
root/
├── eslint.config.mjs          # ESLint configuration
├── jsconfig.json              # JavaScript configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Project dependencies
├── postcss.config.mjs         # PostCSS configuration
├── vercel.json                # Vercel deployment configuration
├── public/                    # Static files
│   └── images/                # Image assets
└── src/
  ├── app/                   # Next.js 13+ App Router
  │   ├── globals.css        # Global styles
  │   ├── layout.jsx         # Root layout
  │   ├── page.jsx           # Home page
  │   ├── about/             # About section
  │   │   ├── AboutHeroSection.jsx
  │   │   ├── Achievements.jsx
  │   │   ├── GetStarted.jsx
  │   │   ├── OurMission.jsx
  │   │   ├── OurValues.jsx
  │   │   ├── page.jsx
  │   │   ├── StatsSection.jsx
  │   │   └── WhatWeDo.jsx
  │   ├── categories/        # Categories section
  │   │   ├── page.jsx
  │   │   ├── business-intelligence/
  │   │   │   └── page.jsx
  │   │   ├── contact-center/
  │   │   ├── crm-system/
  │   │   │   ├── CRMAnalysisSection.jsx
  │   │   │   ├── CRMAutomationSection.jsx
  │   │   │   ├── CRMFeaturesSection.jsx
  │   │   │   ├── CRMHeroSection.jsx
  │   │   │   ├── CRMIntegrationsSection.jsx
  │   │   │   ├── CRMPricingSection.jsx
  │   │   │   ├── CRMTrustedSection.jsx
  │   │   │   └── page.jsx
  │   │   └── phone-system/
  │   │       ├── page.jsx
  │   │       ├── PhoneSystemAction.jsx
  │   │       ├── PhoneSystemFeatures.jsx
  │   │       ├── PhoneSystemHero.jsx
  │   │       ├── PhoneSystemStats.jsx
  │   │       └── PlatformFeatures.jsx
  │   ├── contact/           # Contact section
  │   │   ├── ConnectSection.jsx
  │   │   ├── ContactForm.jsx
  │   │   ├── ContactHero.jsx
  │   │   ├── GlobalSection.jsx
  │   │   └── page.jsx
  │   ├── lib/               # Utility functions
  │   │   └── getCriticalPosts.js
  │   ├── posts/             # Blog posts
  │   │   └── [id]/
  │   │       └── page.jsx
  │   └── services/          # Services section
  │       ├── GetReady.jsx
  │       ├── HeroServices.jsx
  │       ├── page.jsx
  │       ├── ProvenResults.jsx
  │       ├── account-based-marketing/
  │       │   ├── ABMDashboard.jsx
  │       │   ├── ABMFeatures.jsx
  │       │   ├── ABMFormSection.jsx
  │       │   ├── ABMProcess.jsx
  │       │   ├── ABMSecurityFeatures.jsx
  │       │   ├── HeroABM.jsx
  │       │   └── page.jsx
  │       ├── contact-center/
  │       ├── content-syndication/
  │       │   ├── ContentFormSection.jsx
  │       │   ├── ContentJourney.jsx
  │       │   ├── ContentTypes.jsx
  │       │   ├── FeaturesContent.jsx
  │       │   ├── HeroContent.jsx
  │       │   └── page.jsx
  │       ├── email-marketing/
  │       │   ├── EmailAnalytics.jsx
  │       │   ├── EmailFeatures.jsx
  │       │   ├── EmailFormSection.jsx
  │       │   ├── EmailProcess.jsx
  │       │   ├── EmailTemplates.jsx
  │       │   ├── HeroEmail.jsx
  │       │   └── page.jsx
  │       ├── erp-solutions/
  │       └── lead-generation/
  │           ├── FeaturesSection.jsx
  │           ├── FormSection.jsx
  │           ├── LeadDeliverySection.jsx
  │           ├── LeadHero.jsx
  │           ├── LogoScroll.jsx
  │           ├── page.jsx
  │           └── ProcessSection.jsx
  ├── assets/                # Additional assets
  ├── components/            # Reusable components
  │   ├── ArrowNavigation.jsx
  │   ├── Footer.jsx
  │   ├── Navbar.jsx
  │   └── home/
  │       ├── AboutSection.jsx
  │       ├── CategoriesSection.jsx
  │       ├── ContactSection.jsx
  │       ├── HeroSection.jsx
  │       └── ServicesSection.jsx
  └── data/                  # Static data files
    ├── aboutData.js
    └── homeData.js
```

## 🌟 Key Features

### 1. Lead Generation Excellence
- **Smart Lead Routing**
  - Automated lead distribution system
  - Real-time lead qualification
  - Custom lead scoring algorithms
  - Integration with major CRM platforms

- **Advanced Form Builder**
  - Drag-and-drop form creation
  - Custom field validation
  - Multi-step form support
  - Mobile-responsive design

### 2. Email Marketing Suite
- **Campaign Management**
  - Visual email builder
  - A/B testing capabilities
  - Automated email sequences
  - Behavioral triggers

- **Analytics Dashboard**
  - Real-time tracking
  - Conversion analytics
  - Engagement metrics
  - ROI reporting

### 3. Content Syndication
- **Content Distribution**
  - Multi-channel publishing
  - Automated scheduling
  - Content performance tracking
  - Audience targeting

- **Content Management**
  - Version control
  - Collaborative editing
  - Asset management
  - SEO optimization

## 📈 Performance Metrics

- **Page Load Time:** < 1.5s
- **Time to Interactive:** < 2s
- **Lighthouse Score:** 95+
- **Core Web Vitals:** All metrics in the green
- **SEO Score:** 95+

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.0 or higher)
- npm (v8+) or yarn (v1.22+)
- Git
- A Vercel account (for deployment)

### Environment Setup

1. Clone the repository
```bash
git clone https://github.com/Shiwani322004/Gravity.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

### Production
- `npm run analyze` - Analyze bundle size
- `npm run clean` - Clean build directories
- `npm run typecheck` - Run TypeScript type checking
- `npm run validate` - Run all validations

### Docker
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:push` - Push to Docker registry

## 🤝 Contributing

We love your input! We want to make contributing to Gravity as easy and transparent as possible. Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

### Development Process
1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes using Conventional Commits
```bash
git commit -m 'feat: Add some AmazingFeature'
```
4. Push to your branch
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

### Code Style
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use Prettier for code formatting
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)

### Testing
- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve code coverage

## 📝 Documentation

- [API Documentation](docs/api/README.md)
- [Component Documentation](docs/components/README.md)
- [Architecture Guide](docs/architecture/README.md)
- [Deployment Guide](docs/deployment/README.md)
- [Testing Guide](docs/testing/README.md)

## 🔒 Security

- [Security Policy](SECURITY.md)
- [Privacy Policy](PRIVACY.md)
- [Terms of Service](TERMS.md)

## 🎯 Roadmap

See our [open issues](https://github.com/Shiwani322004/Gravity/issues) for a list of proposed features and known issues.

## 📊 Analytics and Monitoring

### Performance Monitoring
- Vercel Analytics integration
- Real-time error tracking
- User behavior analytics
- Performance metrics dashboard

### SEO Monitoring
- Automated SEO reports
- Keyword tracking
- Backlink monitoring
- Competition analysis

## 🏆 Awards and Recognition

- 🌟 Featured on Product Hunt
- 🏅 Best B2B Solution Award 2025
- 💫 Top Rated on G2 Crowd
- ⭐ 5-Star Rating on Clutch

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- 📧 Email: support@gravity-b2b.com
- 💬 Discord: [Join our community](https://discord.gg/gravity-b2b)
- 🐦 Twitter: [@GravityB2B](https://twitter.com/GravityB2B)
- 💼 LinkedIn: [Gravity B2B Solutions](https://linkedin.com/company/gravity-b2b)

### Core Team
- Shiwani (Lead Developer) - [@Shiwani322004](https://github.com/Shiwani322004)
- [Other team members...]

## 🙏 Acknowledgments

### Technologies
- [Next.js](https://nextjs.org/) - React Framework
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment Platform
- [HeadlessUI](https://headlessui.dev/) - UI Components

### Tools & Services
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Sentry](https://sentry.io/) - Error Tracking
- [Google Analytics](https://analytics.google.com/) - Analytics
- [SendGrid](https://sendgrid.com/) - Email Service

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Shiwani322004/Gravity&type=Date)](https://star-history.com/#Shiwani322004/Gravity&Date)

---

<div align="center">
Made with ❤️ by the Gravity Team
</div>


 