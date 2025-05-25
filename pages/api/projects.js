export default function handler(req, res) {
    const project = [
        {
            id: 1,
            name: "Ugly Portfolio",
            description: "Now powered by a Next.js API and React!",
            tags: ["Next.js", "API", "Tailwind CSS", "React"]
        },
        {
            id: 2,
            name: "Secret Project 🔒",
            description: "Still brewing...",
            tags: ["React", "Node.js"]
        }
    ];
    res.json(project);
}