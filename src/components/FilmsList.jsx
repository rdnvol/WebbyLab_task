import React, {useState} from 'react';
import FilmItem from "./FilmItem";
import classes from './FilmsList.module.css'
import MyModal from "./MyModal";
import FilmInfo from "./FilmInfo";

const FilmsList = ({list}) => {
    const [modal, setModal] = useState(false);
    const [openedFilm, setOpenedFilm] = useState(undefined);

    const openFilmInfo = (film) => {
        setModal(true)
        setOpenedFilm (film)
    }

    return (
        <div>
            <MyModal visible={modal} setVisible={setModal}>
                <FilmInfo film={openedFilm}/>
            </MyModal>

            <h1 className={classes.list__title}> Список фільмів</h1>
            <div className={classes.films__block}>
            {list.map((film) => <FilmItem key={film.id} film={film} openFilmInfo={openFilmInfo}/>)}
            </div>
        </div>
    );
};

export default FilmsList;
