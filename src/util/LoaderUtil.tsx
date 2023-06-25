import { useEffect } from "react";

function Loader() {
    useEffect(() => {
      const loader = document.querySelector(".loader");

      if (loader) {
        window.addEventListener("load", vanish);
      }

      function vanish() {
        if (loader) {
          loader.classList.add("disppear");
        }
      }
    }, []);
}

export default Loader;