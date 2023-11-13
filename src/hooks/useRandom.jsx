import { useState, useEffect } from "react";
// gets and uses a random letter for the background

const useRandom = () => {
  const [letter, setLetter] = useState("");

  let letters = ["M", "i", "s", "h", "a", "e", "l"];
  useEffect(() => {
    const randomizeLetters =
      letters[Math.floor(Math.random() * letters.length)];
    setLetter(randomizeLetters);
  }, []);

  return letter
};

export default useRandom