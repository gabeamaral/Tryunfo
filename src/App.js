import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    hasTrunfo: false,
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    gundam: [],
  };

  batata = (frita) => {
    const numMax = 90;
    if (Number(frita) >= 0 && Number(frita) <= numMax) {
      return true;
    }
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare } = this.state;
      const num1 = this.batata(cardAttr1);
      const num2 = this.batata(cardAttr2);
      const num3 = this.batata(cardAttr3);
      const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const valorMaximo = 210;
      if (cardName && cardImage && cardDescription && cardRare
        && soma <= valorMaximo && num1 && num2 && num3) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  onSaveButtonClick = (unicorn) => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState((banshee) => ({
      gundam: [banshee.gundam, unicorn],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
      });
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, hasTrunfo,
      cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo Gundam Universe</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
