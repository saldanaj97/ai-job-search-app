import { useEffect, useState } from "react";

interface TypingEffectProps {
  word: string;
  simulateErrors?: boolean;
}

export const TypingEffect = ({
  word,
  simulateErrors = true,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const getRandomTimeout = () =>
      Math.floor(Math.random() * (300 - 50 + 1) + 50); // Random timeout between 50ms and 300ms

    const type = () => {
      let updatedText = displayedText;

      if (isDeleting) {
        // Deleting
        updatedText = displayedText.slice(0, -1);
        setDisplayedText(updatedText);
        setTypingIndex(typingIndex - 1);

        if (typingIndex === 0) {
          setIsDeleting(false);
          setErrorIndex(null); // Reset error index
        }
      } else {
        if (simulateErrors && errorIndex !== null) {
          // Correcting errors
          updatedText = displayedText.slice(0, -1);
          setDisplayedText(updatedText);

          if (updatedText.length === errorIndex) {
            setErrorIndex(null);
          }
        } else {
          // Typing forward
          updatedText = word.slice(0, typingIndex + 1);
          setDisplayedText(updatedText);
          setTypingIndex(typingIndex + 1);

          // Randomly introduce an error if simulateErrors is true
          if (
            simulateErrors &&
            Math.random() < 0.1 &&
            typingIndex < word.length
          ) {
            const errorChar = String.fromCharCode(
              Math.floor(Math.random() * 26) + 97,
            ); // Random lowercase letter
            updatedText = displayedText + errorChar;
            setDisplayedText(updatedText);
            setErrorIndex(updatedText.length - 1); // Mark the error index
          }

          // If finished typing, start deleting after a pause
          if (typingIndex >= word.length) {
            setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
          }
        }
      }
    };

    const typingTimeout = setTimeout(type, getRandomTimeout());

    return () => clearTimeout(typingTimeout);
  }, [
    displayedText,
    typingIndex,
    isDeleting,
    word,
    errorIndex,
    simulateErrors,
  ]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="inline-block min-w-[1ch]">
      {displayedText}
      <span
        className={`inline-block w-[1ch] ${cursorVisible ? "visible" : "invisible"}`}
      >
        |
      </span>
    </div>
  );
};
