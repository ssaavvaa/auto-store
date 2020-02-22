import React from 'react';
import { Link } from 'react-router-dom';
import css from './index.module.scss';
import Catalog from '../../../data/catalogs/index.json';

export default () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <header>
          <h1>
            Запчасти для иномарок <br /> по низким ценам
          </h1>
        </header>
        <p className={css.description}>
          Автозапчати оптом и розничные магазины запчастей. Доставка запчастей
          по всей России. Специальный предложения для магазинов запчастей и СТО.
        </p>
        <ul>
          {Catalog.map(({ name, _id, value, image }) => (
            <li key={_id}>
              <Link
                to={process.env.PUBLIC_URL + `/catalog/${value.toLowerCase()}`}
              >
                <img alt={name} src={image} />
                <p>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
