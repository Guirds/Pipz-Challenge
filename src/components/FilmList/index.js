import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const FilmList = ({ films }) => (
  <Container>
    {films.map(film => (
      <Repository key={film.episode_id}>
        <header>{film.title}</header>
        <ul>
          <li>
            {' '}
            <strong>Release:</strong>
            {film.release_date}
          </li>
          <li>
            {' '}
            <strong>Episode:</strong>
            {film.episode_id}
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      release_date: PropTypes.number,
      episode_id: PropTypes.number,
    }),
  ).isRequired,
};

export default FilmList;
