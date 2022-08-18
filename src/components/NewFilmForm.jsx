import React, {useState} from 'react';
import classes from './FilmsList.module.css'
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const NewFilmForm = ({create}) => {
    const [title, setTitle] = useState('')
    const [release, setRelease] = useState('')
    // const [format, setFormat] = useState('')
    const [stars, setStars] = useState('')

    const addNewFilm = (e) => {
        e.preventDefault()
        const newFilm = {
            id: Date.now(),
            title,
            release,
            // format,
            stars,
        }
        create(newFilm)
        setTitle('')
        setRelease('')
        setStars('')
    }

    return (
        <form className={classes.film__form}>
            <input type="text" required={true}/>
            <MyInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Назва фільму"
                required
            />
            <MyInput
                value={release}
                onChange={(e) => setRelease(e.target.value)}
                type="text"
                placeholder="Рік випуску"

            />

            {/*<input type="radio"/> VHS*/}
            {/*<input type="radio"/> DVD*/}
            {/*<input type="radio"/> Blu-ray*/}

            <MyInput
                value={stars}
                onChange={(e) => setStars(e.target.value)}
                type="text"
                placeholder="Список акторів"

            />
            <MyButton type="submit" onClick={addNewFilm}>Add</MyButton>

        </form>
    );
};

export default NewFilmForm;
