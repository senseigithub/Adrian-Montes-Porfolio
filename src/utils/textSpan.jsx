import { motion, transform } from "framer-motion";

const TextSpan = ({children}) => {

    const rubberBand = () => {
       return {
         transform: [
           "scale3d(1, 1, 1)",
           "scale3d(1.4, .55, 1)",
           "scale3d(.75, 1.25, 1)",
           "scale3d(1.25, .85, 1)",
           "scale3d(.9, 1.05, 1)",
           "scale3d(1, 1, 1)",
         ],
         color: "#5b5bae"
       };
    } 

    return (
        <motion.span whileHover={() => rubberBand}>
            {children}
        </motion.span>
    )
}

export default TextSpan;