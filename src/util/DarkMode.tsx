import { useEffect, useRef, useState } from "react";

function DarkMode() {
  const [isDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    bodyRef.current = document.getElementsByTagName("body")[0];
    if (isDarkMode) {
      bodyRef.current?.classList.add("dark");
    } else {
      bodyRef.current?.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode ? "true" : "false");
  }, [isDarkMode]);
}

export default DarkMode;