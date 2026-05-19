"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let delay = 100;

    if (!deleting && charIndex === current.length) {
      delay = 2000;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      delay = 500;
      const t = setTimeout(() => {}, delay);
      return () => clearTimeout(t);
    }

    if (deleting) {
      delay = 50;
      const t = setTimeout(() => {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, delay);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setText(current.substring(0, charIndex + 1));
      setCharIndex((c) => c + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [words, wordIndex, charIndex, deleting]);

  return (
    <h1 className="typewriter">
      Desenvolvedor <br /> <span id="typing-text">{text}</span>
    </h1>
  );
}
