import { useState, useEffect } from 'react';
import TerminalLine from './TerminalLine';

function TypewriterLine({ text, delay = 0, speed = 15, showPrompt = false }) {
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);
  const isComplete = charCount >= text.length;

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started || isComplete) return;
    const timer = setTimeout(() => setCharCount(c => c + 1), speed);
    return () => clearTimeout(timer);
  }, [started, charCount, isComplete, speed]);

  if (!started) return null;

  return (
    <>
      {showPrompt && <span className="prompt">$</span>}
      <TerminalLine text={text.slice(0, charCount)} />
      {!isComplete && <span className="typing-cursor">|</span>}
    </>
  );
}

export default TypewriterLine;
