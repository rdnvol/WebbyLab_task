import React, {useState} from 'react';
import classes from './FilmsList.module.css'
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const NewFilmForm = ({create}) => {
    const [title, setTitle] = useState('')
    const [release, setRelease] = useState('')
    const [format, setFormat] = useState('VHS')
    const [star, setStar] = useState('')
    const [starsList, setStarsList] = useState([])
    // let stars = []

    const addNewFilm = (e) => {
        e.preventDefault()
        const newFilm = {
            id: Date.now(),
            title,
            release,
            format,
            stars: starsList,
        }
        // console.log(newFilm)
        create(newFilm)
        setTitle('')
        setRelease('')
        setFormat('VHS')
        // setStars('')
    }

    const addStarToList = (e) =>
    {
        e.preventDefault()
        setStarsList((currentStars) => [...currentStars, star])
        console.log(starsList)
        setStar('')
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
                value={star}
                onChange={(e) => setStar(e.target.value)}
                type="text"
                placeholder="Список акторів"
            />
            <MyButton onClick={addStarToList}>додати</MyButton>
            <MyButton type="submit">Add</MyButton>

        </form>
    );
};

export default NewFilmForm;
