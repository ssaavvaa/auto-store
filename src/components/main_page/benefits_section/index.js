import React from 'react';
import css from './index.module.scss';
import NAIL from './nail.png';
import TOOLS from './tools.png';
import PROF from './proffesionalizm.png';
import THUMB from './thumb.png';

export default () => (
  <section className={css.wrapper}>
    <header>
      <h2>Наши преимущества</h2>
    </header>

    <ul>
      <li>
        <img alt="nail" src={NAIL} />
        <h3>Качество</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </li>
      <li>
        <img alt="nail" src={TOOLS} />
        <h3>Скорость</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </li>
      <li>
        <img alt="nail" src={PROF} />
        <h3>Профессионализм</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </li>
      <li>
        <img alt="nail" src={THUMB} />
        <h3>Быстрый поиск</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.
        </p>
      </li>
    </ul>
  </section>
);
