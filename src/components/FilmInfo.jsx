import React from 'react';
import classes from './FilmsList.module.css'

const FilmInfo = ({film, visible, setVisible}) => {
    const rootClasses = [classes.film__info]

    if(visible)
    {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>

        </div>
    );
};

export default FilmInfo;
