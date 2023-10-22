import React from 'react';
import TableItem from '../../components/TableItem/TableItem';
import arrDictionary from '../../data/dictionary.json';
import st from './style.module.scss'

export default function Home() {
  return (
    <div className={st.container}>
      <p className={st.text}>
      Хочешь выучить английский язык?<br/>
      Начни тренировать слова прямо сейчас!
      </p>
      <div className={st.table}>
        <div className={st.row}>
            <div className={st.col}>English</div>
            <div className={st.col}>Transcription</div>
            <div className={st.col}>Russian</div> 
        </div>
        {arrDictionary.map((item, id)=>(
          <TableItem item={item} key={id}/>))}
      </div>
    </div>
  )
}
