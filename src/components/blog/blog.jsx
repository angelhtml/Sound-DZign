import ScrollAnimation from "react-animate-on-scroll";
import { Rectangle13, thumbnail1, thumbnail2 } from "../../assets/image";
import style from "./blog.module.css";

export default function Blog(){
    return(
        <div className={style.blog}>
            <div className="wrapper">
            <ScrollAnimation animateIn="animate__fadeIn" offset={200} duration={1}>
                <h1 className={style.heading}>Latest Posts</h1>
                <div className={style.line}></div>
                <div className={style.container}>

                    <div className={style.card}>
                        <div className={style.img_box}>
                            <img src={Rectangle13} alt="rectangle13"/>
                            <button className={style.play_btn}>DAW</button>
                        </div>
                        <p className={style.text}>How To Use Drum Machine in Logic Pro X</p>
                    </div>

                    <div className={style.card}>
                        <div className={style.img_box}>
                            <img src={thumbnail1} alt="rectangle13"/>
                            <button className={style.play_btn}>Mixing</button>
                        </div>
                        <p className={style.text}>How To Mix Guitars Effectively</p>
                    </div>

                    <div className={style.card}>
                        <div className={style.img_box}>
                            <img src={thumbnail2} alt="rectangle13"/>
                            <button className={style.play_btn}>Vox</button>
                        </div>
                        <p className={style.text}>The Real Power of Harmonies in Music Production</p>
                    </div>

                </div>
                <div className={style.post_container}>
                    <button className={style.post_btn}>All Posts</button>
                </div>
                
                </ScrollAnimation>
            </div>
        </div>
    )
}