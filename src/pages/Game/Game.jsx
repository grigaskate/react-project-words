import React from 'react';
import Slider from '../../components/Slider/Slider';
import st from './style.module.scss';

export default function Game() {
  return (
    <div className={st.container}>
      <Slider/>
    </div>
  )
}
