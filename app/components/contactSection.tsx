import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-1 mt-20 h-28 flex flex-col justify-center bg-black dark:bg-slate-700 w-full space-y-6"
    >
      <div className="flex justify-center items-center space-x-6">
        <a href="https://github.com/A1exander-liU">
          <i className="devicon-github-original text-white text-2xl"></i>
        </a>
        <a href="https://linkedin.com/in/alexanderliu00">
          <i className="devicon-linkedin-plain colored text-2xl"></i>
        </a>
      </div>
      <p className="text-center text-sm text-white">© 2024 Alexander Liu</p>
    </section>
  );
}
