import React from 'react';
import st from './style.module.scss';

export default function Spinner() {
  return (
    <div className={st.containerCircularG}>
        <div className={`${st.circularG_1} ${st.circularG}`}></div>
        <div className={`${st.circularG_2} ${st.circularG}`}></div>
        <div className={`${st.circularG_3} ${st.circularG}`}></div>
        <div className={`${st.circularG_4} ${st.circularG}`}></div>
        <div className={`${st.circularG_5} ${st.circularG}`}></div>
        <div className={`${st.circularG_6} ${st.circularG}`}></div>
        <div className={`${st.circularG_7} ${st.circularG}`}></div>
        <div className={`${st.circularG_8} ${st.circularG}`}></div>
    </div>
  )
}
