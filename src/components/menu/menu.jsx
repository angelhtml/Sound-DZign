import style from "./menu.module.css";
import { close } from "../../assets/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu({handler,CloseHandler}){

    return(
        <AnimatePresence>
        <motion.div transition={{ type:"tween", duration: .7}} initial={{y: "-50vh"}} animate={handler ? {y:0} : {y: "-50vh"}}
         className={style.container}>
            <div className={style.close_box}>
                <button onClick={() => CloseHandler(!handler)} className={style.close_btn}>
                    <img src={close} alt="close"/>
                </button>
            </div>
            
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Course Details</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Testimonials</a></li>
            </ul>
        </motion.div>
        </AnimatePresence>
    )
}