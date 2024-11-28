import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { quantita, immagine, nome, prezzo, id, handleDelete, onIncrement } = this.props;

    return (
      <div className="col-md-3 mb-4">
        <div className="card h-100" style={{ maxWidth: '250px', margin: '0 auto' }}>
          <button onClick={() => onIncrement({
            id,
            nome,
            prezzo,
            immagine,
            quantita
          })} className="btn btn-primary">
            aggiungi<span className='badge bg-white text-primary'>{quantita}</span>
          </button>
          <img 
            src={immagine} 
            alt={nome} 
            className="card-img-top"
            style={{ 
              height: '180px',
              objectFit: 'cover'
            }} 
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{nome}</h5>
            <p className="card-text">€{prezzo}</p>
            <button onClick={() => handleDelete(id)} className="btn btn-outline-danger">elimina</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;