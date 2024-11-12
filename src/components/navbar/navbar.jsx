import style from './navbar.module.css';
import {menubar} from '../../assets/image';
import Menu from '../menu/menu';
import { useState } from 'react';

export default function Navbar(){
    const [open,setOpen] = useState(false);
    return(
        <>
        <nav className={style.navbar}>
            <div className={style.nav_box1}>
                <div className={style.logo_name}>
                    <span className={style.name_p1}>Sound</span>
                    <span className={style.name_p2}>DZign</span>
                </div>
            </div>
            <div className={style.nav_box2}>
                <ul>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Course Details</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Testimonials</a></li>
                </ul>
            </div>
            <div className={style.nav_box3}>
                <button onClick={() => setOpen(!open)} className={style.menu_bar}><img src={menubar} alt="menu"/></button>
            </div>
        </nav>
        <Menu CloseHandler={(i) => setOpen(i)} handler={open}/>
        </>
    )
}