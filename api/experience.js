export default function handler(req, res) {
  // --- CORS FIX ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // ----------------

  const experience = [
    {
      id: 1,
      role: "SQL Intern",
      company: "Codtech IT Solutions Pvt. Ltd.",
      period: "June 2024 - August 2024",
      bullets: [
        "Developed and optimized complex SQL queries",
        "Designed database schemas",
        "Improved performance through indexing & tuning",
        "Automated tasks using stored procedures"
      ]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Unified Mentor (Freelance)",
      period: "Jan 2024 - May 2024",
      bullets: [
        "Built responsive React & Node apps",
        "Integrated REST APIs",
        "Managed Docker & CI/CD pipelines",
        "Worked closely with clients delivering solutions"
      ]
    }
  ];

  return res.status(200).json(experience);
}
