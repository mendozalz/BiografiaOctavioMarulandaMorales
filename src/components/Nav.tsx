import { motion, useScroll, useTransform } from "framer-motion";

const Nav = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100], 
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"] 
  );
  const height = useTransform(scrollY, [0, 100], [100, 60]); 

  return (
    <motion.div
      className="navigation w-full h-28 fixed top-0 right-0 left-0 z-15  text-gray-900 flex items-center justify-between px-6 py-2 font-semibold text-sm z-10"
      style={{
        background,
        height,
        backgroundImage: `linear-gradient(to right, ${background})`,
        backdropFilter: "blur(20px)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="lg:max-w-[85vw] w-full flex justify-between items-center">
          <div><img className="w-[100px] h-[100px] mr-auto" src="/img/logo octavio-02.png" alt="logo tipo de la silueta de Octavio Marulanda" /></div>
          <ul className="list-none flex items-center gap-6">
            <li className="uppercase" >Home</li>
            <li className="uppercase" >Menu</li>
            <li className="uppercase" >Biografia</li>
            <li className="uppercase">Contact Us</li>
          </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
