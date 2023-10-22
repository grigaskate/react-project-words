import React from 'react';
import st from './style.module.scss';

export default function Table({item: {id, english, transcription, russian}}) {
  return (
    <div className={st.container}>
        <div className={st.row}>
            <div className={st.col}>{english}</div>
            <div className={st.col}>{transcription}</div>
            <div className={st.col}>{russian}</div>
        </div>
    </div>
  )
}
