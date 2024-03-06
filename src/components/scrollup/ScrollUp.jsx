// import "./ScrollUp.css";
// const ScrollUp = () => {
//   window.addEventListener("scroll", function () {
//     const scrollup = document.querySelector(".scrollup");
//     // when the scroll is higher than 560 viewport height, add the show-scroll calss to a tag with the scroll-top class
//     if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
//     else scrollup.classList.remove("show-scroll");
//   });
//   return (
//     <a href="#home" className="scrollup">
//       <i
//         className="uil uil-arrow-up scrollup_icon"
//         style={{ color: "white" }}
//       ></i>
//     </a>
//   );
// };

// export default ScrollUp;

import { useState, useEffect } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 560) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 560) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      {showScroll && (
        <div className="scrollup" onClick={scrollTop}>
          <i
            className="uil uil-arrow-up scrollup_icon"
            style={{ color: "white" }}
          ></i>
        </div>
      )}
    </div>
  );
};

export default ScrollUp;
