import React, {useState, useEffect} from 'react';
import st from './style.module.scss'

export default function Card({item: {id, english, transcription, russian}}) {
  return (
      <div className={st.col}>
        <div className={st.row}>{english}</div>
        <div className={st.row}>{transcription}</div>
        <button>Показать перевод</button>
      </div>
  )
}
