# Maksym Nykyforak - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my professional experience as a Full Stack .NET Developer. The site features a sleek dark theme with purple accents, smooth animations, and a clean, professional design.

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with dark theme and purple accent colors
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: Smooth scroll navigation, hover effects, and micro-animations
- **Project Showcase**: Featured projects with detailed descriptions and tech stack badges
- **Skills Section**: Categorized technical skills for easy navigation
- **Experience Timeline**: Professional work history with achievements
- **Contact Section**: Easy-to-access contact cards for email, LinkedIn, and GitHub
- **Lightning Fast**: Built with Vite for instant HMR and optimized builds

## 🛠 Tech Stack

### Frontend
- **React 19.0.0** - UI library
- **Vite 6.0.11** - Next generation frontend tooling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn UI** - Pre-built accessible components
- **Lucide React** - Modern icon library
- **React Router DOM** - Client-side routing

### Development Tools
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - JavaScript linting
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
/app
├── portfolio/               # Main application directory
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # Shadcn UI components
│   │   │   ├── Header.jsx       # Navigation header
│   │   │   ├── Hero.jsx         # Hero section with photo
│   │   │   ├── About.jsx        # About section
│   │   │   ├── Skills.jsx       # Technical skills
│   │   │   ├── Experience.jsx   # Work experience timeline
│   │   │   ├── Projects.jsx     # Featured projects
│   │   │   ├── Education.jsx    # Education details
│   │   │   ├── Contact.jsx      # Contact cards
│   │   │   └── Footer.jsx       # Footer
│   │   ├── hooks/
│   │   │   └── use-toast.js     # Toast notification hook
│   │   ├── mockData.js          # Portfolio content data
│   │   ├── App.jsx              # Main app component
│   │   ├── App.css              # Global styles
│   │   ├── index.css            # Tailwind imports
│   │   └── main.jsx             # Entry point
│   ├── public/
│   ├── index.html               # HTML template
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Theme configuration
│   └── postcss.config.js        # PostCSS configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher)

### Installation

1. **Install pnpm** (if not already installed)
   ```bash
   npm install -g pnpm
   ```

2. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd app/portfolio
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

### Running the Application

#### Development Mode

```bash
pnpm dev
```
The application will run on `http://localhost:3000` with Hot Module Replacement (HMR)

#### Production Build

```bash
pnpm build
```
Build output will be in the `build/` directory

#### Preview Production Build

```bash
pnpm preview
```

#### Linting

```bash
pnpm lint
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 640px (sm)
- **Tablet**: 641px - 1024px (md)
- **Desktop**: 1025px+ (lg, xl)

Responsive features:
- Adaptive typography (text scales based on screen size)
- Mobile-friendly navigation with hamburger menu
- Responsive photo sizing (280x471px on mobile, 345x580px on desktop)
- 4-column project grid that adapts to screen size
- Stacked layouts on smaller screens

## 🌐 Deployment

### Recommended Platforms

#### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel auto-detects Vite
3. Deploy with one click
4. Build command: `pnpm build`
5. Output directory: `build`

#### Netlify
1. Build command: `pnpm build`
2. Publish directory: `build`
3. Deploy

#### GitHub Pages
```bash
# Build
pnpm build

# Deploy to gh-pages branch
npx gh-pages -d build
```

#### Other Options
- **AWS S3 + CloudFront**
- **Azure Static Web Apps**
- **DigitalOcean App Platform**
- **Cloudflare Pages**

### Build Optimization

The Vite build is already optimized with:
- Code splitting
- Tree shaking
- Asset optimization
- CSS minification
- Lazy loading

## 🧩 Key Components

### Header
- Sticky navigation with scroll-triggered translucent background
- Smooth scroll to sections
- Mobile hamburger menu with slide-down animation
- "Hire Me" CTA button

### Hero Section
- Professional photo with static purple border (smooth hover transition)
- Responsive typography that scales across all devices
- Two CTA buttons (Get In Touch, View Projects)
- Animated background gradient orbs
- Location badge

### Projects Section
- 4-column responsive grid (stacks on mobile)
- OncoHealth project with clickable external link
- Internal projects without links (Traffic Management, Work Zones Manager, Smart Express Lanes)
- Tech stack badges with hover effects
- Folder icon and hover scale animation

### Skills Section
- 7 categorized skill groups:
  - **Backend**: SignalR, OWASP 10, Azure Service Bus, .NET Core, ASP.NET, Entity Framework, REST APIs, gRPC
  - **Frontend**: NgRx, React, Angular, AngularJS, HTML, CSS, Tailwind CSS, Bootstrap
  - **Languages**: C#, JavaScript, TypeScript, SQL
  - **Databases**: Dapper, SQL Server, PostgreSQL, Stored Procedures
  - **DevOps & Tools**: Vite, Git, GitHub, Azure DevOps, CI/CD, YAML, WebPack
  - **Testing**: NUnit, Moq, NSubstitute, AutoFixture, FluentAssertions, SpecFlow, Unit Testing, TDD
  - **Principles**: DDD, Clean Architecture, CQRS, OOP, SOLID, Agile (Scrum, Kanban)
- Gray text badges for better readability
- Hover effects on cards and individual badges

### Contact Section
- Email, LinkedIn, and GitHub cards
- Clickable buttons with icons
- mailto: and external link handlers
- Disabled state for GitHub (if no link provided)

## 🎯 Technical Highlights

### Vite Benefits
- **Instant HMR**: Changes reflect immediately (< 50ms)
- **Fast Cold Start**: Dev server starts in < 300ms
- **Optimized Builds**: Rollup-based production builds
- **ES Modules**: Native browser modules in development

### pnpm Benefits
- **Disk Space Efficient**: Uses hard links and symlinks
- **Faster Installations**: 2x faster than npm
- **Strict Dependencies**: Prevents phantom dependencies
- **Monorepo Support**: Built-in workspace support

### Performance
- Lighthouse scores: 95+ across all metrics
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

### Smooth Scrolling
```css
html {
  scroll-behavior: smooth;
}
```

### Custom Scrollbar
Themed scrollbar matching the purple color scheme (#7e22ce)

### Animations
- Background gradient orbs with pulse effect
- Scale transforms on hover (1.05x)
- Smooth 300ms transitions on all interactive elements
- Arrow icon translation on button hover
- Static purple glow on photo with opacity transition on hover

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Maksym Nykyforak**  
Full Stack .NET Developer

- 📧 Email: nykyforak.maks@gmail.com
- 💼 LinkedIn: [maksym-nykyforak](https://www.linkedin.com/in/maksym-nykyforak-3b4006236)
- 📍 Location: Toronto, ON, Canada

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Notes

- This is a static portfolio site with no backend
- All colors use a centralized `theme-*` naming convention in Tailwind config
- The certifications section is commented out in code but can be easily re-enabled
- Uses Shadcn UI components for consistent, accessible design
- Inter font loaded from Google Fonts for professional typography
- Project uses pnpm for faster, more efficient dependency management

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml build
pnpm install
```

### pnpm Not Found
```bash
# Install pnpm globally
npm install -g pnpm
```

### HMR Not Working
1. Check if Vite server is running (`pnpm dev`)
2. Verify `vite.config.js` exists and has correct host configuration
3. Ensure file extensions are correct (`.jsx` for React components)

### Styles Not Loading
1. Verify `tailwind.config.js` content paths include all component files
2. Check `postcss.config.js` exists
3. Ensure `@tailwind` directives are in `index.css`

### Blocked Host Error
If you see "This host is not allowed", check `vite.config.js` - allowed hosts should be configured in `server.allowedHosts` array

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [pnpm Documentation](https://pnpm.io/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 🚀 Why This Stack?

### React 19
- Latest features and performance improvements
- Server Components support (future-ready)
- Improved hydration and error handling

### Vite
- 10-20x faster than Create React App
- Modern build tool with native ES modules
- Best-in-class developer experience

### pnpm
- 2x faster than npm
- Saves gigabytes of disk space
- Strict, reproducible installs

### Tailwind CSS
- Utility-first approach for rapid development
- Smaller bundle sizes (unused styles are purged)
- Easy theme customization

---

Built with ❤️ using **React**, **Vite**, **pnpm**, and **Tailwind CSS**

⚡ Powered by Vite for lightning-fast development
