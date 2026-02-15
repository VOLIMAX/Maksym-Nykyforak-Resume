# Maksym Nykyforak - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my professional experience as a Full Stack .NET Developer.

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

### Environment Variables

#### Frontend (`/app/frontend/.env`)
```env
REACT_APP_BACKEND_URL=<your-backend-url>
```

### Running the Application

#### Development Mode

**Frontend:**
```bash
cd frontend
yarn start
```
The frontend will run on `http://localhost:3000`

#### Production Mode

**Frontend:**
```bash
cd frontend
yarn build
```

## 👤 Author

**Maksym Nykyforak**
- Email: nykyforak.maks@gmail.com
- LinkedIn: [maksym-nykyforak](https://www.linkedin.com/in/maksym-nykyforak-3b4006236)
- Location: Toronto, ON, Canada
