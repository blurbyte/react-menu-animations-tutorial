import React from 'react';

const styles = require('./ContentPage.css');

const ContentPage = () => (
  <div className={styles.wrapper}>
    <article className={styles.tile} role="main">
      <div className={styles['tile-border-wrapper']}>
      <section>
        <h1 className={styles['main-header']}>Welcome to Menu animations tutorial</h1>
        <p className={styles['main-paragraph']}>With the power of React and CSS modules creating interesting menu interactions and animations is rather straightforward.</p>
        <p className={styles['main-paragraph']}>It is so easy to go overboard with them. Keep things simple. Don't forget about performance and usability.</p>
      </section>
      <section className={styles['content-section']}>
        <h2 className={styles['secondary-header']}>Check it out!</h2>
        <ul className={styles['social-links-list']}>
          <li>Check my other projects on <a className={styles['text-link']} target="_blank" href="https://github.com/blurbyte">Github</a></li>
          <li>Contact me on <a className={styles['text-link']} target="_blank" href="https://twitter.com/blurbyte">Twitter</a></li>
          <li>Visit <a className={styles['text-link']} target="_blank" href="http://blurbyte.com/">blurbyte.com</a></li>
        </ul>
      </section>
      </div>
    </article>
  </div>
);

export default ContentPage;
