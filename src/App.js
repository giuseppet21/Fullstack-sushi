import React, { Component } from 'react';
import Navbar from './component/navbar'; 
import Card from './component/card';
import california from './images/california.png';
import dragon from './images/dragon.jpg'
import dynamite from './images/dynamite.jpg';
import philadelphiarow from './images/philadelphia-row.avif';
import rainbow from './images/raindow.jpg';
import shrimp from './images/shrimp.jpg';
import eye from './images/eye.jpg';

class App extends Component {
  state = {
    cards: [
      {id: 0, nome: "California", prezzo: 1.99, immagine: california, quantita: 0},
      {id: 1, nome: "Dragon", prezzo: 7.99, immagine: dragon, quantita: 0},
      {id: 2, nome: "Dynamite", prezzo: 2.99, immagine: dynamite, quantita: 0},
      {id: 3, nome: "Philadelphia", prezzo: 3.99, immagine: philadelphiarow, quantita: 0},
      {id: 4, nome: "Rainbow", prezzo: 4.99, immagine: rainbow, quantita: 0},
      {id: 5, nome: "Shrimp", prezzo: 5.99, immagine: shrimp, quantita: 0},
      {id: 6, nome: "Dragon Eye", prezzo: 6.99, immagine: eye, quantita: 0},
    ]
  }
handledelete = cardid => {
  const cards = this.state.cards.filter(card => card.id !== cardid);
  this.setState({cards});
}
handleIncrement = card => {
  const cards = [...this.state.cards];
  const index = cards.findIndex(c => c.id === card.id); // Usa findIndex invece di indexOf
  cards[index] = { ...card };
  cards[index].quantita++;
  this.setState({ cards });
};
  render() {
    return (
      <>
        <Navbar/>
        <div className='container'>
          <h1>cosa desideri ordinare?</h1>
        </div>
        <hr />
        <div className='row'>
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              nome={card.nome}
              prezzo={card.prezzo}
              immagine={card.immagine}
              quantita={card.quantita}
              handleDelete={this.handledelete}
              onIncrement={this.handleIncrement}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
