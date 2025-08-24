// data/projects.js
export const PROJECTS = [
  {
    id: "roomikey",
    title: "Roomikey – Property Platform",
    role: "Lead Fullstack Developer",
    color: "#4ade80",
    blurb: "A property booking platform connecting owners, brokers, and clients in real-time.",
    description: `
      Property listing and booking platform serving 30+ property owners across Nairobi. 
      Features include multi-role authentication, real-time search, integrated payments (Bank Payment & M-Pesa), 
      and dashboards for admins, brokers, and clients.
    `,
    highlights: [
      "Onboarded 20+ property owners in 6 months",
      "Facilitated hundreds of property rentals & bookings",
      "95%+ user satisfaction and 2s page load speed",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    tags: [
      "MERN", "JWT Auth", "Role Based", "Real-time Search",
      "Image Uploads", "Stripe", "M-Pesa", "Bookings",
      "Admin Dashboard", "Client Dashboard", "AWS", "Docker"
    ],
    link: "https://roomikey.com",
  },
  {
    id: "rorito",
    title: "Rorito – Solar Ecommerce Mobile PWA",
    role: "Lead Fullstack Developer",
    color: "#facc15",
    blurb: "Solar ecommerce PWA with offline mode, push notifications, and installable UX.",
    description: `
      Mobile Progressive Web App for solar products with offline support, push notifications, and an installable 
      app-like experience. Includes full ecommerce flow with cart, checkout, and order history.
    `,
    highlights: [
      "PWA with offline mode & push notifications",
      "Integrated Stripe & PayPal payments",
      "Redux store with offline sync via Redux Persist",
    ],
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    tags: [
      "PWA", "Offline Mode", "Installable", "Push Notifications",
      "Ecommerce", "Cart & Checkout", "Stripe", "PayPal",
      "Redux", "Redux Persist", "Responsive UI"
    ],
    link: "https://rorito-solar-website.vercel.app/",
  },
  {
    id: "soma",
    title: "Soma – School Tracking System",
    role: "Frontend Developer",
    color: "#60a5fa",
    blurb: "Digital school platform bridging parents, teachers, and students.",
    description: `
      End-to-end digital school management platform connecting parents, teachers, and students. 
      Features include secure role-based authentication, real-time communication, and academic tracking.
    `,
    highlights: [
      "Replaced paper-based processes with digital workflows",
      "Real-time academic updates & attendance tracking",
      "Boosted parent-teacher connectivity significantly",
    ],
    tech: ["React", "Django", "PostgreSQL"],
    tags: [
      "React", "Django", "PostgreSQL", "RBAC",
      "Attendance", "Grades", "Announcements",
      "Real-time Updates", "Paperless Workflow"
    ],
    link: "https://project-soma.vercel.app/",
  },
  {
    id: "exhibit",
    title: "Exhibit HR System",
    role: "Fullstack Developer",
    color: "#c084fc",
    blurb: "Modern HR system for payroll, leave, and employee analytics.",
    description: `
      HR management system for employee records, leave requests, payroll, and reporting. 
      Designed to streamline HR operations and provide real-time insights into workforce performance.
    `,
    highlights: [
      "Automated payroll & leave management",
      "Centralized employee database with secure access",
      "Analytics & reporting for HR teams",
    ],
    tech: ["React", "Flask", "PostgreSQL"],
    tags: [
      "HRMS", "Employee Records", "Leave Management",
      "Payroll", "Analytics", "Reporting", "RBAC",
      "Flask API", "React UI", "PostgreSQL"
    ],
    link: "https://hr-system-frontend-phi.vercel.app/",
  },
]
