import Navbar from '../navbar/navbar';
import style from './header.module.css';

export default function Header(){
    return(
        <header>
            <Navbar />
            <div className="wrapper">
                <div className={style.hero_text}>
                    <div className={style.box_con}>
                        <p className='name'>Sound Design Masterclass</p>
                        <div className={style.red_line}></div>
                        <h1 className={style.head1}>Learn the Art of Sound Design</h1>
                        <a href="#" className="demo_btn">Demo Lesson</a>
                    </div>
                </div>
            </div>
        </header>
    )
}