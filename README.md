# Maksym Nykyforak - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my professional experience as a Full Stack .NET Developer. The site features a sleek dark theme with purple accents, smooth animations, and a clean, professional design.

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with dark theme and purple accent colors
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: Smooth scroll navigation, hover effects, and micro-animations
- **Project Showcase**: Featured projects with detailed descriptions and tech stack badges
- **Skills Section**: Categorized technical skills for easy navigation
- **Experience Timeline**: Professional work history with achievements
- **Contact Section**: Easy-to-access contact cards for email, LinkedIn, and GitHub

## 🛠 Tech Stack

### Frontend
- **React 19.0.0** - UI library
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn UI** - Pre-built accessible components
- **Lucide React** - Modern icon library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client

### Backend
- **FastAPI 0.110.1** - Modern Python web framework
- **MongoDB** - NoSQL database
- **Motor** - Async MongoDB driver
- **Uvicorn** - ASGI server

### Development Tools
- **CRACO** - Create React App Configuration Override
- **ESLint** - JavaScript linting
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
/app
├── frontend/
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
│   │   ├── App.js               # Main app component
│   │   ├── App.css              # Global styles
│   │   └── index.css            # Tailwind imports
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js       # Theme configuration
│
├── backend/
│   ├── server.py                # FastAPI server
│   ├── requirements.txt         # Python dependencies
│   └── .env                     # Environment variables
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.9 or higher)
- **MongoDB** (local or cloud instance)
- **Yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd app
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### Environment Variables

#### Frontend (`/app/frontend/.env`)
```env
REACT_APP_BACKEND_URL=<your-backend-url>
```

#### Backend (`/app/backend/.env`)
```env
MONGO_URL=<your-mongodb-connection-string>
DB_NAME=<your-database-name>
```

### Running the Application

#### Development Mode

**Frontend:**
```bash
cd frontend
yarn start
```
The frontend will run on `http://localhost:3000`

**Backend:**
```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```
The backend will run on `http://localhost:8001`

#### Production Mode

**Frontend:**
```bash
cd frontend
yarn build
```

**Backend:**
Use a production ASGI server like Gunicorn:
```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker server:app
```

## 🎨 Customization

### Updating Portfolio Content

Edit `/app/frontend/src/mockData.js` to customize:

- Personal information (name, title, location, contact)
- About section and focus areas
- Technical skills (categorized)
- Work experience and achievements
- Featured projects
- Education details

### Changing Theme Colors

The entire color scheme is centralized in `/app/frontend/tailwind.config.js`:

```javascript
theme: {
  '500': '#7e22ce',  // Main theme color (purple)
  '600': '#6b21a8',  // Darker shade
  // ... other shades
}
```

Change the `theme` color values to customize the accent color throughout the site.

### Updating Photo

Replace the photo URL in `/app/frontend/src/mockData.js`:

```javascript
personal: {
  photo: "your-photo-url-here"
}
```

Photo dimensions: 345x580px (desktop), 280x471px (mobile)

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

Responsive features:
- Adaptive typography (text scales with screen size)
- Mobile-friendly navigation menu
- Flexible photo sizing
- Stacked layouts on smaller screens

## 🌐 Deployment

### Frontend Deployment Options
- **Vercel** (Recommended for React)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Backend Deployment Options
- **Heroku**
- **AWS EC2/ECS**
- **DigitalOcean**
- **Railway**

### Environment Variables
Make sure to set all environment variables in your deployment platform:
- `REACT_APP_BACKEND_URL` for frontend
- `MONGO_URL` and `DB_NAME` for backend

## 🧩 Key Components

### Header
- Sticky navigation with scroll-triggered background
- Smooth scroll to sections
- Mobile hamburger menu
- CTA button

### Hero Section
- Professional photo with glowing border effect
- Name, title, and tagline
- Call-to-action buttons
- Animated background elements

### Projects Section
- 4-column grid layout (responsive)
- Clickable cards (OncoHealth has external link)
- Tech stack badges
- Hover effects with scale transform

### Skills Section
- 7 categorized skill groups
- Badge-style skill items
- Hover effects on cards and badges

### Contact Section
- Email, LinkedIn, and GitHub cards
- Clickable buttons with icons
- Disabled state for GitHub (if no link provided)

## 🎯 Features Implementation

### Smooth Scrolling
Custom scroll behavior implemented in CSS:
```css
html {
  scroll-behavior: smooth;
}
```

### Custom Scrollbar
Themed scrollbar matching the purple color scheme in `/app/frontend/src/App.css`

### Animations
- Pulse animations on background elements
- Scale transforms on hover
- Smooth transitions on all interactive elements
- Arrow icon translation on button hover

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Maksym Nykyforak**
- Email: nykyforak.maks@gmail.com
- LinkedIn: [maksym-nykyforak](https://www.linkedin.com/in/maksym-nykyforak-3b4006236)
- Location: Toronto, ON, Canada

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 Notes

- The backend includes basic MongoDB setup for potential future features (blog, contact form, etc.)
- All colors are centralized in Tailwind config for easy theme changes
- The certifications section is commented out but can be easily re-enabled
- Project uses Shadcn UI components for consistent, accessible design

## 🔧 Troubleshooting

### Frontend Issues

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

### Backend Issues

**MongoDB connection errors:**
- Verify `MONGO_URL` in `.env` file
- Check MongoDB service is running
- Verify network connectivity

**Port conflicts:**
```bash
# Change port in uvicorn command
uvicorn server:app --reload --host 0.0.0.0 --port 8002
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

Built with ❤️ using React, Tailwind CSS, and FastAPI
