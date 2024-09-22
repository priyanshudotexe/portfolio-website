'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CodeIcon } from 'lucide-react'
import TechStackRibbon from './tech-stack-ribbon'

export function Portfolio() {
  return (
    (<div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 py-4 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            <CodeIcon className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">Priyanshu Choubey</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              prefetch={false}>
              Resume
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              prefetch={false}>
              Skills
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-orange-500 transition-colors"
              prefetch={false}>
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
                width={250}
                height={250}
                className="rounded-full border-4 border-orange-500 shadow-lg" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm Priyanshu Choubey!
              </h1>
              <p className="max-w-3xl text-xl text-gray-300 leading-relaxed">
                A pre-final year Computer Science student at BITS Pilani, Goa.
                I've gained experience in web scraping, frontend development,
                and algorithm design during my internship at Nawgati, where I
                worked on real-time EV charging solutions. I've also
                researched automated code evaluation methods as an
                Undergraduate Researcher. I'm proficient in React, Next.js,
                Python, and more. In my free time, I love to DJ and explore
                philosophy, constantly seeking new ways to blend creativity
                and logic.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">My Tech Stack</h2>
            <TechStackRibbon />
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 py-6">
        <div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            &copy; 2024 Priyanshu Choubey. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
              prefetch={false}>
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
              prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}