import { useEffect } from "react";

function SmoothScroll({ children }) {
  useEffect(() => {
    const initializeSmoothScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
        // Configuración de Locomotive Scroll
        smooth: true,
        // Función para forzar que la página se cargue desde la parte superior
        getDirection: function () {
          return "up";
        },
      });

      // Desplazar la página hacia arriba después de 500ms
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };

    initializeSmoothScroll();
  }, []);

  return <main>{children}</main>;
}

export default SmoothScroll;
