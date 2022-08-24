import FilmsList from "./components/FilmsList";
import NewFilmForm from "./components/NewFilmForm";
import classes from './App.css'
import {useState} from "react";
import MyModal from "./components/MyModal";
import MyButton from "./components/UI/button/MyButton";
// import FilmInfo from "./components/FilmInfo";

function App() {
    const [films, setFilms] = useState([
        {
            id: 1,
            title: 'Blazing Saddles',
            release: 1974,
            format: 'VHS',
            stars: ['Mel Brooks', 'Clevon Little', 'Harvey Korman', 'Gene Wilder', 'Slim Pickens', 'Madeline Kahn']
        },
        {
            id: 2,
            title: 'Casablanca',
            release: 1942,
            format: 'DVD',
            stars: ['Humphrey Bogart', 'Ingrid Bergman', 'Claude Rains', 'Peter Lorre']
        },
        {
            id: 3,
            title: 'title1',
            release: 1974,
            format: 'VHS',
            stars: ['Mel Brooks', 'Clevon Little', 'Harvey Korman', 'Gene Wilder', 'Slim Pickens', 'Madeline Kahn']
        },
        {
            id: 4,
            title: 'title2',
            release: 1974,
            format: 'VHS',
            stars: ['Mel Brooks', 'Clevon Little', 'Harvey Korman', 'Gene Wilder', 'Slim Pickens', 'Madeline Kahn']
        }
    ])

    const [modal, setModal] = useState(false);

    const createFilm = (newFilm) => {
        setFilms([...films, newFilm])
        setModal(false)
    }

    return (
        <div className={"App"}>
            <h1> Hello movies </h1>

            <MyModal visible={modal} setVisible={setModal}>
                <NewFilmForm create={createFilm}/>
            </MyModal>


            <MyButton onClick={(e) => setModal(true)} >Add film</MyButton>

            <FilmsList list={films} modal={modal} setModal={setModal}/>
        </div>

    );
}

export default App;
