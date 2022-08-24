import React from 'react';
import MyButton from "./UI/button/MyButton";
// import classes from './FilmsList.module.css'

const FilmInfo = ({film, remove}) => {
    if (film)
    {
        return (
            <div>
                <h4>{film.title}</h4>
                <h5>{film.release}</h5>
                <h5>{film.format}</h5>
                {film.stars.map((star, index) => {
                    return(
                        <h6 key={index}>{star}</h6>
                    )
                })}
                <MyButton onClick={() => remove(film)}>Видалити фільм</MyButton>
            </div>
        );
    }
};

export default FilmInfo;
