import React from 'react';
import './App.css';
import Game from './components/game';



const pairs = [
  {
    term: "Dog",
    definition:"chó",
  },
  {
    term: "Cat",
    definition:"mèo",
  },
  {
    term: "Banana",
    definition:"quả chuối",
  },  {
    term: "Book",
    definition:"quyển sách",
  },
  {
    term: "Ball",
    definition:"quả bóng",
  },
  {
    term: "Lemon",
    definition:"quả cam",
  },
  {
    term: "Monkey",
    definition:"Con khỉ",
  }
]

function App() {
  return (
    <Game pairs={pairs}></Game>
  );
}

export default App;
