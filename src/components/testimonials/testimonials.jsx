import ScrollAnimation from "react-animate-on-scroll";
import { per1, per2, per3 } from "../../assets/image";
import style from "./testimonials.module.css";

export default function Testimonials(){
    return(
        <div className={style.testimonials}>
            <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={1}>
            <div className="wrapper">
                <h1 className={style.heading}>What our students say?</h1>
                <div className={style.red_line}></div>

                <div className={style.container}>

                    <div className={style.card}>
                        <img src={per1} alt="per1"/>
                        <div className={style.info}>
                            <h3>Peter Adams</h3>
                            <p>This is a great course. I got to learn a lot.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={per2} alt="per2"/>
                        <div className={style.info}>
                            <h3>Robert Fox</h3>
                            <p>I got to learn a lot about Music Production with this course. Thanks</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={per3} alt="per3"/>
                        <div className={style.info}>
                            <h3>Emily Smith</h3>
                            <p>Awesome! Great job!!</p>
                        </div>
                    </div>

                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}