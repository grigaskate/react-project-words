import React, {useState, useRef, useEffect} from 'react';
import st from './style.module.scss';

export default function Card(props) {
  const {id, english, transcription, russian, showTranslation, handleShowTranslation}=props;
  const btnRef=useRef();

  useEffect (()=>{
    btnRef.current.focus()
}, []);

  return (
      <div className={st.container}>
        <div className={st.english}>{english}</div>
        <div>{transcription}</div>
        {showTranslation ? <p className={st.russian}>{russian}</p> : <button className={st.btnShowTranslate} ref={btnRef} onClick={handleShowTranslation}> Показать перевод</button>}
      </div>
  )
}
