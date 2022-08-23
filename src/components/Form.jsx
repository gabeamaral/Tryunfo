import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <main>
        <h1>Adicionar nova carta</h1>
        <form action="">
          <label htmlFor="batata">
            Nome
            <input type="text" name="nome" id="batata" data-testid="name-input" />
          </label>
          <label htmlFor="areaTexto">
            <textarea name="" id="areaTexto" data-testid="description-input" />
          </label>
          <label htmlFor="attr01">
            Attr01
            <input type="number" name="atributo" id="attr01" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr02">
            Attr02
            <input type="number" name="atributo" id="attr02" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr03">
            Attr03
            <input type="number" name="atributo" id="attr03" data-testid="attr3-input" />
          </label>
          <label htmlFor="imagem">
            Imagem:
            <input type="url" name="img" id="imagem" data-testid="image-input" />
          </label>
          <label htmlFor="raridade">
            <select name="cartas" id="raridade" data-testid="rare-input">
              <option value="normal" id="normal">normal</option>
              <option value="raro" id="raro">raro</option>
              <option value="muito raro" id="muito raro">Corvinode</option>
            </select>
          </label>
          <label htmlFor="check">
            <input type="checkbox" id="check" data-testid="trunfo-input" />
            Super Trybe Trunfo
          </label>
          <button type="submit" id="botao" data-testid="save-button">Salvar</button>
        </form>
      </main>
    );
  }
}

export default Form;
