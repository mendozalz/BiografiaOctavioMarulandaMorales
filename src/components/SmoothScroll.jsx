import { useEffect } from "react";


function SmoothScroll({ children }) {
  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])
  return (
    <main>
      { children }
    </main>
  );
}

export default SmoothScroll;
