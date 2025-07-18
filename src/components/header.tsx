"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";

export function Header() {
  return (
    <header className="mb-20 flex flex-wrap items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center m-9">
        <span className="font-bold text-5xl w-10 mx-2 text-white hover:text-purple-400 transition-colors duration-300">AP</span>
      </div>

      <nav className="flex gap-8 text-lg m-9">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }} 
          className="hover:text-purple-400 hover:underline hover:underline-offset-4 hover:drop-shadow-md transition"
        >
          About
        </a>
        <a 
          href="#experience" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
          }} 
          className="hover:text-purple-400 hover:underline hover:underline-offset-4 hover:drop-shadow-md transition"
        >
          Experience
        </a>
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }} 
          className="hover:text-purple-400 hover:underline hover:underline-offset-4 hover:drop-shadow-md transition"
        >
          Projects
        </a>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }} 
          className="hover:text-purple-400 hover:underline hover:underline-offset-4 hover:drop-shadow-md transition"
        >
          Contact
        </a>
      </nav>

      <div className="flex justify-center items-center gap-6 m-9 text-2xl">
        <Link href="https://www.linkedin.com/in/akashponnam" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/akashp-dev" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
          <FaGithub />
        </Link>
        <Link href="https://twitter.com/akspnm" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors duration-300">
          <FaTwitter />
        </Link>
        <div className="group relative">
          <Link 
            href="https://drive.google.com/file/d/1q3j5MPwENzIyh6J6SsWEyUGZazft04rp/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-purple-400 transition-colors duration-300 p-1.5 rounded-full hover:bg-gray-800 flex items-center justify-center"
            aria-label="Download Resume"
          >
            <GrDocumentPdf className="transform group-hover:scale-110 transition-transform duration-300" />
          </Link>
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm bg-gray-800 text-white px-2 py-1 rounded">
            View Resume
          </span>
        </div>
      </div>
    </header>
  );
}
