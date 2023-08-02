import React from 'react';
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={'/'} className={styles.btn_start_again}>Start again </Link>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
