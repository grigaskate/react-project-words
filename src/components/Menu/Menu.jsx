import React from 'react';
import { NavLink} from 'react-router-dom';
import st from './style.module.scss';

export default function Menu() {
  return (
    <div>
        <nav className={st.nav}>
            <NavLink to='/about' className={st.item}>О нас</NavLink>
            <NavLink to='/game' className={st.item}>Игра</NavLink>
            <NavLink to='/' className={st.item}>Список слов</NavLink>
        </nav>
    </div>
  )
}
