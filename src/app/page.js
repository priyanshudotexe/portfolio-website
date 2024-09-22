import React from "react";
//import { landing } from "@/components/landing";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TechStackRibbon } from "@/components/tech-stack-ribbon";
import Image from "next/image";
import { Portfolio } from "@/components/portfolio";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 py-4 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="#skills"
            className="flex items-center space-x-2"
            prefetch={false}
          >
            <CodeIcon className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">Priyanshu Choubey</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="https://drive.google.com/file/d/1fpZqiPvEWjZu4Zmjnzh_Z8nA9rpKcGtB/view?usp=sharing"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              prefetch={false}
            >
              Resume
            </Link>
            <Link
              href="#skills"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="mailto:thechoubey2004@gmail.com"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-8 text-center">
              <Image
                src="/hi.webp"
                alt="Priyanshu Choubey"
                width={350}
                height={3500}
                className="rounded-full border-4 border-orange-500 shadow-lg"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm Priyanshu Choubey!
              </h1>
              <p className="max-w-3xl text-xl text-gray-300 leading-relaxed">
                A pre-final year Computer Science student at BITS Pilani, Goa.
                I've gained experience in web scraping, frontend development,
                and algorithm design during my internship at Nawgati, where I
                worked on real-time EV charging solutions. I've also researched
                automated code evaluation methods as an Undergraduate
                Researcher. I'm proficient in React, Next.js, Python, and more.
                In my free time, I love to DJ and explore philosophy, constantly
                seeking new ways to blend creativity and logic.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              My Tech Stack
            </h2>
            <TechStackRibbon />
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; 2024 Priyanshu Choubey. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
              prefetch={false}
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
