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

  useEffect(() => {
    dispatch(getDetail(id))
    dispatch(getActivities()).then(() => setLoading(false));
    console.log(activityFound)
  }, []);
  let detailed = useSelector(state => state.detail);
  let activities = useSelector(state => state.activities);

  let activityFound = null;

  if (!loading) {
    // Find the activity that corresponds to the country in the detail
    for (let activity of activities) {
      for (let country of activity.Countries) {
        if (country.nombre === detailed[0].name) {
          activityFound = activity;
          break;
        }
      }
      if (activityFound) {
        break;
      }
    }
  }
    if(activityFound ){
      console.log(activityFound)
      setLoading(false)
    }

  return (
    <div className={styles.wrapper_top}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        detailed.map((country, index) => (
          <div key={index} className={styles.wrapper}>
            <div className={styles.wrapper_map}>
              <div className={styles.separador}>
                <h1>{country.nombre}</h1>
                <p>#{country.id}</p>
              </div>
              <div className={styles.imgContainer}>
                <img src={country.bandera} alt="flag" />
              </div>
            </div>
            <div className={styles.extras}>
              <p>{`Continente: ${country.continente}`}</p>
              <p>{`Subregion: ${country.subregion}`}</p>
              <p>{`Capital: ${country.capital}`}</p>
              <p>{`Area: ${country.area} km2`}</p>
              <p>{`Population: ${country.poblacion}`}</p>
              <p>{activityFound ? activityFound.nombre : 'none'}</p>
            </div>
          </div>
        ))
      )}
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
