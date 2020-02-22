import React from 'react';
import css from './index.module.scss';

export default () => {
  return (
    <section className={css.wrapper}>
      <header>
        <h2>Есть какие то вопросы ?</h2>
        <p> Воспользуйтесь нашим сервисом </p>
      </header>
      <ul>
        <li>
          <h3>Помощь</h3>
          <p>В ПОДБОРКЕ АВТОЗАПЧАСТЕЙ</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button>ОСТАВИТЬ ЗАПРОС</button>
        </li>
        <li>
          <h3>СОТРУДНИЧЕСТВО</h3>
          <p>ДЛЯ ПОСТАВЩИКОВ</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button>СТАТЬ ПАРТНЕРОМ</button>
        </li>
        <li>
          <h3>БЕСПЛАТНАЯ</h3>
          <p>ДОСТАВКА ТОВАРА</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </li>
        <li>
          <h3>ХОТИТЕ УЗНАТЬ</h3>
          <p>КАК РАБОТАЕТ СЕРВИС АВТО82 ?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem
            ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button>СКАЧАТЬ ПРЕЗЕНТАЦИЮ</button>
        </li>
      </ul>
    </section>
  );
};
