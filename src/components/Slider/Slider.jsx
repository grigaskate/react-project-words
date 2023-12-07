import React, {useState, useContext} from 'react';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';
// import dictionary from '../../data/dictionary.json';
import { MyContext } from '../../MyContext/MyContext';
import st from './style.module.scss'; 
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs";


export default function Slider() {
    const[currentIndex, setCurrentIndex]=useState(0);
    const[showTranslation, setShowTranslation]=useState(false);
    const[count, setCount]=useState(0);
    const words = useContext(MyContext);
    console.log(words);

    const object=words[currentIndex];
    console.log(object)

    if (!object) {
        return   <Spinner/>
      }
  

    const handleNextCard = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
      setShowTranslation(false);
    };
    
    const handlePrevCard = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? words.length - 1 : prevIndex - 1
      );
      setShowTranslation(false);
    };

    const handleClickCount=()=> {
      setCount(count + 1);
    }

    return (
      <div>
        <div className={st.container}>
          <button className={st.button} onClick={handlePrevCard}><BsFillArrowLeftCircleFill className={st.icon} /></button>
          <Card
            english={object.english}
            transcription={object.transcription}
            russian={object.russian}
            index={object.id}
            showTranslation={showTranslation}
            handleShowTranslation={() => {
              setShowTranslation((prev) => !prev);
              handleClickCount();
            }}
          />
          <button className={st.button} onClick={handleNextCard}><BsFillArrowRightCircleFill className={st.icon}/></button>
        </div>
      Изучено: {count} слов
      </div>
  )
}
