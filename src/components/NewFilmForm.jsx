import React, {useState} from 'react';
import classes from './FilmsList.module.css'
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const NewFilmForm = ({create}) => {
    const [title, setTitle] = useState('')
    const [release, setRelease] = useState('')
    const [format, setFormat] = useState('VHS')
    const [stars, setStars] = useState('')

    const addNewFilm = (e) => {
        e.preventDefault()
        const newFilm = {
            id: Date.now(),
            title,
            release,
            format,
            stars,
        }
        console.log(newFilm)
        create(newFilm)
        setTitle('')
        setRelease('')
        setStars('VHS')
        setStars('')
    }

    return (
        <form className={classes.film__form} onSubmit={addNewFilm}>
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
                type="number"
                placeholder="Рік випуску"
                required
            />

            <input
                value={'VHS'}
                type="radio"
                name="format"
                onChange={(e) => setFormat(e.target.value)}
                checked
            /> VHS
            <input
                value={'DVD'}
                type="radio"
                name="format"
                onChange={(e) => setFormat(e.target.value)}
            />DVD
            <input
                value={'Blu-ray'}
                type="radio"
                name="format"
                onChange={(e) => setFormat(e.target.value)}

            />Blu-ray

            <MyInput
                value={stars}
                onChange={(e) => setStars(e.target.value)}
                type="text"
                placeholder="Список акторів"
                required
            />
            <MyButton type="submit">Add</MyButton>

        </form>
    );
};

export default NewFilmForm;
