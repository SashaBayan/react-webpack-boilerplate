import React from 'react';
import styles from './styles.scss';
import CSSModules from 'react-css-modules';

const Hello = () => (
  <div styleName="container">
    Hello World!
  </div>
);

export default CSSModules(Hello, styles);
