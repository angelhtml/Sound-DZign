import { useState } from "react";
import { Group7, Rectangle13, Rectangle14, Rectangle15, Rectangle16, Rectangle17, Rectangle18 } from "../../assets/image";
import style from "./topic.module.css";
import { motion } from "framer-motion";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const initial = {
    opacity: 0,
}

const animate = {
    opacity: 1,
}

const transition = {
    duration: .7,
    type: "twine",
}



export default function Topic() {
    const [image, setImage] = useState(0)

    const active = {
        color: "red"
    }
    const idle = {
        color: "white"
    }

  return (
    <div className={style.topic}>
      <div className="wrapper">
    
        <h1 className={style.heading}>What will you learn?</h1>
        <div className={style.red_line}></div>

        <div className={style.container}>

            <div className={style.box1}>

            <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={1}>
                <button onClick={() => setImage(0)} className={style.group_btn}>
                    <div className={style.dot}></div>
                    <p style={image === 0 ? active : idle} className={style.text}>What are frequencies?</p>
                </button>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={1.5}>
                <button onClick={() => setImage(1)} className={style.group_btn}>
                    <div className={style.dot}></div>
                    <p style={image === 1 ? active : idle} className={style.text}>Using DAW</p>
                </button>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={2}>
                <button onClick={() => setImage(2)} className={style.group_btn}>
                    <div className={style.dot}></div>
                    <p style={image === 2 ? active : idle} className={style.text}>Vocals Processing</p>
                </button>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={2.5}>
                <button onClick={() => setImage(3)} className={style.group_btn}>
                    <div className={style.dot}></div>
                    <p style={image === 3 ? active : idle} className={style.text}>Mixing</p>
                </button>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={3}>
                <button onClick={() => setImage(4)} className={style.group_btn}>
                    <div className={style.dot}></div>
                    <p style={image === 4 ? active : idle} className={style.text}>Mixing Console</p>
                </button>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={3.5}>
                <button onClick={() => setImage(5)} className={style.group_btn}>
                    <div className={style.dot}></div>
                    <p style={image === 5 ? active : idle} className={style.text}>Mastering</p>
                </button>
                </ScrollAnimation>

            </div>

            <div className={style.box2}>
                <div className={style.image_box}>
                    <ScrollAnimation animateIn="animate__jackInTheBox" offset={200} duration={1}>
                        <div className={style.image}>
                            {image === 0 && <motion.img initial={initial} animate={animate} transition={transition} src={Rectangle13} alt="group7"/>}
                            {image === 1 && <motion.img initial={initial} animate={animate} transition={transition} src={Rectangle14} alt="group8"/>}
                            {image === 2 && <motion.img initial={initial} animate={animate} transition={transition} src={Rectangle15} alt="group9"/>}
                            {image === 3 && <motion.img initial={initial} animate={animate} transition={transition} src={Rectangle16} alt="group10"/>}
                            {image === 4 && <motion.img initial={initial} animate={animate} transition={transition} src={Rectangle17} alt="group11"/>}
                            {image === 5 && <motion.img initial={initial} animate={animate} transition={transition} src={Rectangle18} alt="group12"/>}
                        </div>
                    </ScrollAnimation>
                    <div className={style.g7}>
                        <img src={Group7} alt="group7"/>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}