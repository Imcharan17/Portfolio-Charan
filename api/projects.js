export default function handler(req, res) {
  // --- CORS FIX ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // ----------------

  const projects = [
    { id: 1, title: "AI Support Ticket System", desc: "Spring Boot backend with AI ticket classification.", tags: ["Spring Boot", "AI", "MySQL"] },
    {
      id: 2,
      title: "Visitor Pass Management System",
      eyebrow: "Secure, streamlined visitor access",
      desc: "A responsive visitor management platform with role-based dashboards for administrators, receptionists, and employees. It supports the complete visitor workflow from registration and approval to check-in, check-out, and activity tracking.",
      tags: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST API", "Axios"],
      highlights: [
        "Role-based dashboards and protected navigation",
        "Visitor registration, approval, check-in, and check-out",
        "Search, filtering, form validation, and activity tracking",
        "Business rules for visit dates, duplicate requests, and access control",
        "Dashboard statistics for pending and active visits"
      ],
      accent: "from-cyan-300 via-blue-400 to-indigo-500",
      liveUrl: "https://gatehouse-frontend.onrender.com/",
      image: "/images/visitor-pass-management.svg"
    },
    { id: 3, title: "E-Bus Management System", desc: "Real-time bus tracking & ticket booking", tags: ["Firebase", "JavaScript"] },
    { id: 4, title: "Sign Language Translator", desc: "Real-time hand gesture detection", tags: ["Python", "OpenCV", "ML"] },
    { id: 5, title: "API Gateway Management", desc: "Microservices gateway with rate-limiting", tags: ["NGINX", "Node.js"] }
  ];

  return res.status(200).json(projects);
}
