import React from 'react';
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
