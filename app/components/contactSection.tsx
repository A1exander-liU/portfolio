import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-1 mt-20 h-20 flex justify-center items-center bg-black dark:bg-slate-700 w-full space-x-6"
    >
      <a href="https://github.com/A1exander-liU">
        <i className="devicon-github-original text-white text-2xl"></i>
      </a>
      <a href="https://linkedin.com/in/alexanderliu00">
        <i className="devicon-linkedin-plain colored text-2xl"></i>
      </a>
    </section>
  );
}
