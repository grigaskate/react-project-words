import React from 'react';
import {Link } from 'react-router-dom';
import Menu from '../Menu/Menu'
import st from './style.module.scss';
import logo from '../../images/logo.svg'

export default function Header() {
  return (
    <div className={st.container}>
      <Link to='/'>
        <img src={logo} alt='Logo'/>
      </Link>
      <Menu/>
      <div>
        <p>+37529-5555555</p>
      </div>
    </div>
  )
}
