import React from 'react';
import classes from './FilmsList.module.css';

const FilmItem = ({film}) => {
    const openFilmInfo = (film) => {
        // <FilmInfo film={film} visible={true} setVisible={true}/>
    }

    return (
        <div onClick={() => openFilmInfo(film)} className={classes.film__item}>
            <img src="https://via.placeholder.com/150C" alt=""/>
            <h3>{film.title}</h3>

        </div>
    );
};

export default FilmItem;
