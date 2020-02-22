import React from 'react';
import { Link } from 'react-router-dom';
import css from './index.module.scss';
import Catalog from '../../data/catalogs/index.json';

export default () => {
  return (
    <div className={css.wrapper}>
      <h1>CATALOG</h1>

      <ul>
        {Catalog.map(({ name, _id, image, value }) => (
          <li key={_id}>
            <Link to={`/catalog/${value.toLowerCase()}`}>
              <img alt={name} src={image} />
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
