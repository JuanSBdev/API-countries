import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getActivities, getDetail } from '../../src/redux/actions';
import styles from './Detail.module.css';

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailed = useSelector(state => state.detail);

  useEffect(() => {
    dispatch(getDetail(id)).then(() => setLoading(false))
    console.log('hallo');
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  let activity = detailed.Activities.map((act) => act.nombre);

  return (
    <div className={styles.wrapper_top}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_map}>
          <div className={styles.separador}>
            <h1>{detailed.nombre}</h1>
            <p>#{detailed.id}</p>
          </div>
          <div className={styles.imgContainer}>
            <img src={detailed.bandera} alt="flag" />
          </div>
        </div>
        <div className={styles.extras}>
          <p>{`Continent: ${detailed.continente}`}</p>
          <p>{`Subregion: ${detailed.subregion}`}</p>
          <p>{`Capital: ${detailed.capital}`}</p>
          <p>{`Area: ${detailed.area} km2`}</p>
          <p>{`Population: ${detailed.poblacion}`}</p>
          <p>activities:</p>
          <p className={styles.activities}>  {activity.length > 0 ? activity.join(', ') : 'None'}</p>
        </div>
      </div>

      <div>
        <Link to={'/countries'} className={styles.regresar}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/318/318493.png?w=360"
            alt=""
          />
          <h4>BACK</h4>
        </Link>
      </div>
    </div>
  );
}
