import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Form } from './styles';
import FilmList from '../../components/FilmList';

export default class Main extends Component {
  state = {
    filmInput: '',
    films: [],
  };

  handleAddFilm = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/${this.state.filmInput}/?format=json`);

      this.setState({
        filmInput: '',
        films: [...this.state.films, response.data],
      });
    } catch (err) {}
  };

  render() {
    return (
      <>
        <Container>
          <h1>Pipz's Challenge</h1>
          <Form onSubmit={this.handleAddFilm}>
            <input
              type="text"
              placeholder="Digite o número do epsódio ex:1"
              value={this.state.filmInput}
              onChange={e => this.setState({ filmInput: e.target.value })}
            />
            <button type="submit">Ok</button>
          </Form>

          <FilmList films={this.state.films} />
        </Container>
      </>
    );
  }
}
