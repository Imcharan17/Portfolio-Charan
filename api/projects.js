export default function handler(req, res) {
  const projects = [
    { id: 1, title: "AI Support Ticket System", desc: "Spring Boot backend with AI ticket classification.", tags: ["Spring Boot", "AI", "MySQL"] },
    { id: 2, title: "E-Bus Management System", desc: "Real-time bus tracking & ticket booking", tags: ["Firebase", "JavaScript"] },
    { id: 3, title: "Sign Language Translator", desc: "Real-time hand gesture detection", tags: ["Python", "OpenCV", "ML"] },
    { id: 4, title: "API Gateway Management", desc: "Microservices gateway with rate-limiting", tags: ["NGINX", "Node.js"] }
  ];

  return res.status(200).json(projects);
}
