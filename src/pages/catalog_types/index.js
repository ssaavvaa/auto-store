import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import css from './index.module.scss';
import catalog from '../../data/catalogs/index.json';

const Catalog = ({ match }) => {
  const { type } = match.params;

  const cars = catalog.find(({ value }) => value.toLowerCase() === type);

  return (
    <div className={css.wrapper}>
      <h1>CATALOG | {type}</h1>
      {cars && (
        <ul>
          {cars.marks.map(({ name, image, value }) => (
            <li key={uuid()}>
              <Link to={`/catalog/${type}/${value.toLowerCase()}`}>
                <img alt={name} src={image} />
                <p>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!cars && <p>NO!!!</p>}
    </div>
  );
};

Catalog.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  })
};

export default Catalog;
