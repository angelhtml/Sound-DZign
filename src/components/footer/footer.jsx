import { social } from "../../assets/image";
import style from "./footer.module.css";

export default function Footer(){
    return(
        <footer>
            <div className="wrapper">
                <div className={style.container}>

                    <div className={style.box1}>
                        <div className={style.logo_name}>
                            <span className={style.name_p1}>Sound</span>
                            <span className={style.name_p2}>DZign</span>
                        </div>
                        <a className={style.social} href="https://github.com/angelhtml" target="_blank">
                            <img src={social} alt="social"/>
                        </a>
                    </div>

                    <div className={style.box2}>
                        <p className={style.title}>Quick Links</p>
                        <a href="https://angel-resume.netlify.app/" target="_blank" className={style.link}>Blog</a>
                        <a href="#" className={style.link}>Privacy Policy</a>
                    </div>

                    <div className={style.box3}>
                        <p className={style.title}>Contact Us</p>
                        <a href="mailto:khfarhad6@gmail.com" className={style.link}>khfarhad6@gmail.com</a>
                        <a href="tel:+989377530879" className={style.link}>+98 937 7530 879</a>
                    </div>

                </div>
                <p className={style.license}>This website is designed by Angelhtml Ⓒ {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}