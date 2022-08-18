import React from 'react';
import FilmItem from "./FilmItem";

const FilmsList = () => {
    return (
        <div>
            <h1>Список фільмів</h1>
            <FilmItem film={{title: 'title1', release: 1974, format: 'VHS', stars: ['Mel Brooks', 'Clevon Little', 'Harvey Korman', 'Gene Wilder', 'Slim Pickens', 'Madeline Kahn']}}/>
        </div>
    );
};

export default FilmsList;
