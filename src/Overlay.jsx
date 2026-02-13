import { useEffect } from "react";
import { createPortal } from "react-dom";
import IntroPNG from "./images/introPNG.png";

const Overlay = ({ show }) => {
  useEffect(() => {
    if (show) {
      // 🔒 Lock scroll ONLY while overlay is visible
      document.body.style.overflow = "hidden";
    } else {
      // 🔓 Restore scroll
      document.body.style.overflow = "";
    }

    return () => {
      // Safety cleanup (VERY important)
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return createPortal(
    <img
      src={IntroPNG}
      alt="Intro Overlay"
      className="intro-fixed-png"
    />,
    document.body
  );
};

export default Overlay;
