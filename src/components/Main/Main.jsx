import React from 'react'

export default function Main(props) {
  console.log(props)
  return (
    <div className="container">
      <button>+</button>
      <div className="wr-cards">
        <h1>Карточка номер 1</h1>
        <p>{props.arrWords[0].word}</p>
        <button>Показать перевод</button>
      </div>
      <button>-</button>
    </div>
  )
}
