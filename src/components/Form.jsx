import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, // hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <main>
        <h1>Adicionar nova carta</h1>
        <form action="">
          <label htmlFor="batata">
            Nome
            <input
              type="text"
              name="cardName"
              id="batata"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="areaTexto">
            <textarea
              name="cardDescription"
              id="areaTexto"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr01">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id="attr01"
              min={ 0 }
              max={ 90 }
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr02">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              id="attr02"
              min={ 0 }
              max={ 90 }
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr03">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              id="attr03"
              min={ 0 }
              max={ 90 }
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="imagem">
            Imagem:
            <input
              type="url"
              name="cardImage"
              id="imagem"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade">
            <select
              name="cardRare"
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal" id="normal">normal</option>
              <option value="raro" id="raro">raro</option>
              <option value="muito raro" id="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="check">
            <input
              type="checkbox"
              name="cardTrunfo"
              id="check"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
          <button
            type="submit"
            id="botao"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </form>
      </main>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
