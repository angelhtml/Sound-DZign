import ScrollAnimation from "react-animate-on-scroll";
import { Group07, pic_flat, pic_student } from "../../assets/image";
import style from "./info.module.css";

export default function Info() {
  return (
    <div className={style.info}>
      <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={1}>
      <div className="wrapper">
        <div className={style.container}>

        
            <div className={style.box1}>
                <div className={style.box1_section}>
                    
                    <div className={style.g07}>
                        <img src={Group07} alt="group07"/>
                    </div>
                     
                    <div className={style.card}>
                        <img src={pic_student} alt="student"/>
                        <h1>23,000+</h1>
                        <h2>Students</h2>
                    </div>

                </div>
            </div>

            <div className={style.box2}>

                <div className={style.card}>
                    <img src={pic_flat} alt="flast"/>
                    <h1>26 Hrs</h1>
                    <h2>Video Content</h2>
                </div>
                
            </div>

        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
}