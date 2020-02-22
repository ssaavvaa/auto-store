import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import LOGO from './logo.png';
import css from './index.module.scss';
import PROFILE from './profile.png';
import LOCATION from './location.png';
import CART from './cart.png';

export default () => {
  return (
    <header className={css.header}>
      <nav className={css.header__nav}>
        <Link className={css.logo} to={process.env.PUBLIC_URL + '/'}>
          <img alt="website logo" src={LOGO} />
        </Link>
        <Link to={process.env.PUBLIC_URL + '/catalog'} className={css.catalog}>
          Каталог товаров
        </Link>
        <Link to={process.env.PUBLIC_URL + '/'} className={css.howToBuy}>
          Как купить
        </Link>
        <Link to={process.env.PUBLIC_URL + '/'} className={css.contacts}>
          Контакты
        </Link>
        <input className={css.search} type="text" />
        <Link
          to={process.env.PUBLIC_URL + '/'}
          className={classNames(css.profile, css.card)}
        >
          <div>
            <img alt="user profile" src={PROFILE} />
            <p>Личный кабинет</p>
          </div>
        </Link>
        <Link
          to={process.env.PUBLIC_URL + '/'}
          className={classNames(css.location, css.card)}
        >
          <div>
            <img alt="location" src={LOCATION} />
            <p>Пункт выдачи</p>
          </div>
        </Link>
        <Link
          to={process.env.PUBLIC_URL + '/'}
          className={classNames(css.cart, css.card)}
        >
          <div>
            <img alt="cart" src={CART} />
            <p>Корзина</p>
          </div>
        </Link>
      </nav>
    </header>
  );
};
