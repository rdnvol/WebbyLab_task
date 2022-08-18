import React from 'react';
import FilmItem from "./FilmItem";
import classes from './FilmsList.module.css'

const FilmsList = ({list}) => {
    return (
        <div>
            <h1 className={classes.list__title}> Список фільмів</h1>
            <div className={classes.films__block}>
            {list.map((film) => <FilmItem key={film.id} film={film}/>)}
            </div>
        </div>
    );
};

export default FilmsList;
