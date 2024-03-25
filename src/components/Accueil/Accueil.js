//const urlFilmsGhibli = 'https://ghibliapi.vercel.app/films/';

import { useEffect, useState } from 'react';
import FilmVedette from '../FilmVedette/FilmVedette';
import { Link } from 'react-router-dom';
import './Accueil.css';

function Accueil() {

    const urlFilmsGhibli = 'https://ghibliapi.vercel.app/films/';

    const [listeFilmGhibli, setListeFilmGhibli] = useState([]);
    const [filmVedette, setFilmVedette] = useState({});

    useEffect(() => {

        fetch(urlFilmsGhibli)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data);
                setListeFilmGhibli(data);
                setFilmVedette(()=> data[Math.floor(Math.random() * data.length)]);
                
            })

    }, []);

    function nombreAleatoire(max){
        return Math.floor(Math.random() * max)
    }

    function nouveauFilmVedette( ){
        // console.log('nouveau film ');
        setFilmVedette(()=> listeFilmGhibli[nombreAleatoire(listeFilmGhibli.length)]);

    }

      // boucle dans la liste de film
    const filmsGhibli = listeFilmGhibli.map((film, index)=> {
        return <li key={index}>
                 <Link to={`/film/${film.id}`}  > {film.title} </Link>
                 <img src={film.movie_banner} alt={film.title}/>
            </li>
    })

  return (
    <main>
        <div className="wrapper">
            <div className="accueil">
            <FilmVedette handleNouveauFilmVedette={nouveauFilmVedette} filmVedette={filmVedette}/>
            <section>
                <h2>Liste des films&nbsp;Ghibli</h2> {/*&nbsp; non breakable space */}
                <ul>
                    {filmsGhibli}
                </ul>
            </section>

                {/* <section>
                    <Link to={`/film/${filmVedette.id}`}>
                        <img src={filmVedette.image} alt={filmVedette.title}/>
                        <div>

                            <h2>{filmVedette.original_title}</h2>
                            <p>{filmVedette.release_date}</p>

                        </div>
                    </Link>
                    <div>
                        <h2>Film Vedette</h2>
                        <button onClick={nouveauFilmVedette}>Nouveau</button>
                    </div>
                </section> */}
            </div>
        </div>
    </main>
  );
}

export default Accueil;


