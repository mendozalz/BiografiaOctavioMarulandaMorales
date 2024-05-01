import { motion } from "framer-motion";
import "../../global.css"

interface Props {
  isActive: boolean;
  toggleMenu: () => void;
}

const ButtonMenuMovil: React.FC<Props> = ({ isActive, toggleMenu }) => {
  return (
    <div className="buttonMenu">
      <motion.div
        className="sliderMenu"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="elMenu"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>

        <div
          className="elMenu"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

export default ButtonMenuMovil;

interface PerspectiveTextProps{
    label:string
}

function PerspectiveText({label}: PerspectiveTextProps) {

    return (    

        <div className="perspectiveText">
            <p>{label}</p>
            <p>{label}</p>
        </div>

    )

}