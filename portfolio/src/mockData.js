export const portfolioData = {
  personal: {
    fullName: "Maksym Nykyforak",
    title: "Full Stack .NET Developer",
    tagline: "Building scalable, real-time web applications with clean architecture and modern UX.",
    location: "Toronto, ON, Canada",
    email: "nykyforak.maks@gmail.com",
    linkedin: "https://www.linkedin.com/in/maksym-nykyforak-3b4006236",
    github: "",
    photo: "https://customer-assets.emergentagent.com/job_maksym-dev/artifacts/dv2zomfj_Purple%20headshot.JPG"
  },

  about: {
    summary: "Full Stack .NET Developer with 5+ years of experience building scalable web applications using .NET Core, C#, React, and Angular. Proven track record in modernizing legacy systems, integrating real-time services, and driving full-cycle development. Experienced in large-scale infrastructure and healthcare products, with a strong focus on clean architecture, test-driven development, and CI/CD.",
    focusAreas: [
      "Scalable web platforms",
      "Real-time systems",
      "System modernization",
      "Clean architecture",
      "Test-driven development"
    ]
  },

  skills: {
    categories: [
      {
        name: "Backend",
        items: [".NET Core", "ASP.NET", "Entity Framework", "REST APIs", "gRPC", "SignalR", "OWASP 10", "Azure Service Bus"]
      },
      {
        name: "Frontend",
        items: ["React", "Angular", "AngularJS", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "NgRx"]
      },
      {
        name: "Languages",
        items: ["C#", "JavaScript", "TypeScript", "SQL"]
      },
      {
        name: "Databases",
        items: ["SQL Server", "PostgreSQL", "Stored Procedures", "Dapper"]
      },
      {
        name: "DevOps & Tools",
        items: ["Azure DevOps", "Git", "GitHub", "CI/CD", "YAML", "WebPack", "Vite"]
      },
      {
        name: "Testing",
        items: ["SpecFlow", "Unit Testing", "Test-Driven Development", "NUnit", "Moq", "NSubstitute", "AutoFixture", "FluentAssertions"]
      },
      {
        name: "Principles",
        items: ["OOP", "SOLID", "Agile (Scrum, Kanban)", "Domain-Driven Design (DDD)", "Clean Architecture", "CQRS"]
      }
    ]
  },

  experience: [
    {
      company: "Arcadis IBI Group",
      role: "Full Stack Software Engineer",
      period: "09/2022 - Present",
      domain: "Large-scale transportation and infrastructure systems",
      highlights: [
        "Improved custom Google Maps layer performance by 150% by redesigning the marker rendering algorithm.",
        "Built a hosted service to automate device-event associations, reducing manual review time by 50%.",
        "Refactored legacy systems into microservices, improving scalability and maintainability.",
        "Implemented real-time device data integration using frontend services connected to third-party APIs.",
        "Introduced unit testing tools and promoted TDD practices to improve code reliability.",
        "Developed modular, responsive UI components using React; maintained AngularJS and Angular codebases.",
        "Supported and debugged complex distributed systems for large-scale transportation platforms."
      ],
      techStack: ["C#", ".NET Core", "React", "Angular", "Azure", "Microservices", "Google Maps API"]
    },
    {
      company: "SoftServe",
      role: "Full Stack .NET Developer",
      period: "03/2021 - 07/2022",
      domain: "Healthcare software (OncoHealth product)",
      highlights: [
        "Contributed to CI/CD pipelines and participated in structured code reviews.",
        "Designed modular backend components using .NET Core and SOLID principles.",
        "Built and maintained automated API test suites using SpecFlow.",
        "Collaborated with stakeholders to analyze requirements and deliver system features."
      ],
      techStack: ["C#", ".NET Core", "SQL Server", "SpecFlow", "Azure DevOps"]
    },
    {
      company: "SoftServe",
      role: "Software Engineer Intern",
      period: "Internship",
      domain: "Software Engineering",
      highlights: [
        "Refactored stored procedures and C# code to improve system performance.",
        "Designed and implemented RESTful APIs as part of backend team initiatives."
      ],
      techStack: ["C#", "SQL", "REST APIs"]
    }
  ],

  projects: [
    {
      name: "Advanced Traffic Management System",
      description: "Large-scale platform for real-time traffic monitoring and control across urban infrastructure.",
      highlights: [
        "Boosted custom Google Maps rendering performance by 150%",
        "Integrated real-time device data with third-party APIs",
        "Built responsive UI components for traffic visualization"
      ],
      techStack: ["Angular", ".NET Core", "SQL Server", "Google Maps API", "Microservices"],
      link: null
    },
    {
      name: "Work Zones Manager",
      description: "Automated system for managing and coordinating construction work zones and road closures.",
      highlights: [
        "Developed hosted service reducing manual review time by 50%",
        "Implemented device-event association automation",
        "Created modular backend components following SOLID principles"
      ],
      techStack: ["React", ".NET Core", "PostgreSQL"],
      link: null
    },
    {
      name: "Smart Express Lanes System",
      description: "Intelligent toll lane management system with real-time pricing and traffic flow optimization.",
      highlights: [
        "Refactored legacy monolithic systems into scalable microservices",
        "Enhanced system maintainability and performance",
        "Supported complex distributed architecture"
      ],
      techStack: [".NET Core", "Microservices", "Angular"],
      link: null
    },
    {
      name: "OncoHealth",
      description: "Healthcare platform providing oncology management solutions and patient care coordination.",
      highlights: [
        "Contributed to CI/CD pipelines and participated in code reviews",
        "Designed modular backend components using .NET Core and SOLID principles",
        "Built and maintained API test suites using SpecFlow",
        "Collaborated with stakeholders to define system requirements"
      ],
      techStack: ["C#", ".NET Core", "SQL Server", "SpecFlow", "Azure DevOps"],
      link: "https://oncohealth.us/solutions/?utm_source=google+ads&utm_medium=search&utm_campaign=solutions&gad_source=1&gad_campaignid=23543273274&gbraid=0AAAAAoJSQ4oygSKJq4HL6WbPp2tRr1lTw&gclid=CjwKCAiA-sXMBhAOEiwAGGw6LE17-GB4R2ZqFOxqYMIjsWukCX5ST2tEjDF_Z4fHRn66PlaTo1RxBxoCW_oQAvD_BwE"
    }
  ],

  education: {
    degree: "Bachelor's degree in Economic Cybernetics",
    institution: "Yuriy Fedkovych Chernivtsi National University",
    period: "09/2019 – 06/2023"
  },

  certifications: []
};