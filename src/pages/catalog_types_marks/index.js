import React from 'react';
import { uuid } from 'uuidv4';
import { Link } from 'react-router-dom';
import css from './index.module.scss';

const CatalogMarks = ({
  match: {
    params: { type, mark }
  }
}) => {
  const marks = require(`../../data/catalogs/${type.toUpperCase()}/${mark.toUpperCase()}`);

  return (
    <div className={css.wrapper}>
      <h1>CATALOG | {type}</h1>
      {marks && (
        <ul>
          {marks.models.map(({ name, name_with_mark, image }) => (
            <li key={uuid()}>
              <Link to="/">
                <img alt={name} src={image} />
                <p>{name_with_mark || name}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!marks && <p>NO!!!</p>}
    </div>
  );
};

export default CatalogMarks;
