import { motion } from 'framer-motion';
import { links, footerLinks } from './data';

interface Props{
    i:number
}

export const perspective = {

    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -120,
    },

    enter: (i:number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.45, 
            delay: 0.5 + (i * 0.1), 
            ease: [.215,.61,.355,1],
            opacity: { duration: 0.35}
        }

    }),

    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
    }

}

export const slideIn = {

    initial: {
        opacity: 0,
        y: 20
    },
  
    enter: (i:number) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5,
            delay: 0.75 + (i * 0.1), 
            ease: [.215,.61,.355,1]
        }
  
    }),
  
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut"}
    }
  
  }

export default function Content() {
  return (
    <div className="contentMenuMovil">
       <div className="bodyMenuMovil">
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className="linkContainer">
                        <motion.div
                          
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <a href={href}>
                                {title}
                            </a>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
       <motion.div className="footerMovil">
            {
                footerLinks.map( (link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                            <a href={href}>
                                {title}
                            </a>
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}