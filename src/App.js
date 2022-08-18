import React from "react";
import FilmsList from "./components/FilmsList";

function App() {
    const films = [
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
        ]

  return (
      <div>
        <h1> Hello movies </h1>
        <FilmsList list={films}/>
      </div>

  );
}

export default App;
