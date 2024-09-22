'use client'

import { Code, Database, FileCode, GitBranch, Smartphone, Terminal } from "lucide-react"
import { useState } from "react"

const techStacks = [
  { name: "React", icon: <Code className="h-8 w-8" /> },
  { name: "JavaScript", icon: <FileCode className="h-8 w-8" /> },
  { name: "C++", icon: <span className="text-2xl font-bold">C++</span> },
  { name: "Java", icon: <span className="text-2xl font-bold">J</span> },
  { name: "Git", icon: <GitBranch className="h-8 w-8" /> },
  { name: "Postman", icon: <span className="text-2xl font-bold">P</span> },
  { name: "Android Studio", icon: <Smartphone className="h-8 w-8" /> },
  { name: "Python", icon: <Terminal className="h-8 w-8" /> },
  { name: "MySQL", icon: <Database className="h-8 w-8" /> },
]

export function TechStackRibbon() {
  const [hoveredTech, setHoveredTech] = useState(null)

  return (
    (<div className="w-full bg-black p-4 overflow-x-auto flex justify-center">
      <div className="flex space-x-8 items-start">
        {techStacks.map((tech) => (
          <div
            key={tech.name}
            className={`flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
              hoveredTech === tech.name ? "transform -translate-y-1" : ""
            }`}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}>
            <div
              className={`mb-2 ${hoveredTech === tech.name ? "text-orange-500" : "text-white"}`}>
              {tech.icon}
            </div>
            <div
              className={`text-xs text-center whitespace-nowrap ${
                hoveredTech === tech.name ? "text-orange-500" : "text-white"
              }`}>
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>)
  );
}