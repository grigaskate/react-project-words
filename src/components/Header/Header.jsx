import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import st from './style.module.scss';
import logo from '../../images/logo.svg'

export default function Header() {
  return (
    <div className={st.container}>
      <Link to='/'>
        <img src={logo} alt='Logo' />
      </Link>
      < nav className={st.nav}>
        <NavLink to='/about' className={st.item}>О нас</NavLink>
        <NavLink to='/game' className={st.item}>Игра</NavLink>
        <NavLink to='/' className={st.item}>Список слов</NavLink>
      </nav>
      <div>
        <p>+37529-5555555</p>
      </div>
    </div>
  )
}
