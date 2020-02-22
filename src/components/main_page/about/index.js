import React from 'react';
import css from './index.module.scss';
import IMAGE from './engine.jpg';

export default () => {
  return (
    <section className={css.wrapper}>
      <header className={css.header}>
        <h2>
          о сервисе <span>avto82</span>
        </h2>
      </header>
      <img className={css.image} alt="Car engine" src={IMAGE} />
      <div className={css.text}>
        <p>
          мы - надежный сервис, работающий только с проверенными поставщиками
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </section>
  );
};
