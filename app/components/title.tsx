import React from "react";
import { motion } from "framer-motion";

export default function Title({ name }: { name: string }) {
  return (
    <>
      <h2 className="my-10 text-4xl text-center">
        {`Hi, I'm `}
        <span className="text-blue-500">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </h2>
    </>
  );
}
