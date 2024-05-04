import { useEffect } from "react";

function SmoothScroll({ children }) {
  useEffect(() => {
    const initializeSmoothScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
  
        direction: 'horizontal',
        getDirection: function () {
          return "up";
        },
      });

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    initializeSmoothScroll();
  }, []);

  return <main>{children}</main>;
}

export default SmoothScroll;
