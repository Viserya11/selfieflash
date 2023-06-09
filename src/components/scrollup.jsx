import React from "react";
import { useEffect, useState } from "react";

export default function ScrollUp() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",
      () => {
        if (window.scrollY > 200) {
          setBackToTopButton(true);
        } else {
          setBackToTopButton(false);
        }
      });    
  }, []);

  const scrollUp = () => { window.scrollTo({top: 0, behavior: "smooth"})}

  return <div>
    {backToTopButton && (<button className="scrollup" style={{position: "fixed", bottom: "50px", right: "50px", height: "50px", width: "50px", fontSize: "50px" }} onClick={scrollUp}>^</button>)}
  </div>;
}
