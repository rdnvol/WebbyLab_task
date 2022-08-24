import React from 'react';
// import classes from './FilmsList.module.css'

const FilmInfo = ({film}) => {
    return (
        <div>
            {film.title}
        </div>
    );
};

export default FilmInfo;
