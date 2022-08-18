import React from 'react';

const FilmItem = ({film}) => {
    return (
        <div>
            <img src="https://via.placeholder.com/150C" alt=""/>
            <h3>{film.title}</h3>

        </div>
    );
};

export default FilmItem;
