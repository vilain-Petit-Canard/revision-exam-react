import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FilmGhibli.css';


function FilmGhibli(props) {
  // Get the userId param from the URL.
  const params = useParams();
  // console.log(id);
  const urlFilmGhibli = `https://ghibliapi.vercel.app/films/${params.id}`;

  const [FilmGhibli, setFilmGhibli] = useState([]);

  useEffect(()=>{
    // console.log('rendu');
    fetch(urlFilmGhibli).then((reponse) => reponse.json()).then((data) => {
      // console.log(data);
      setFilmGhibli(data);

    })

  }, []);



  return (
    <main>
      <div className='wrapper'>
      <article className='film-ghibli'>
        <div>
            <img  src={FilmGhibli.image} alt={FilmGhibli.titre}/> 
        </div>
        <div >
        <h1 >{FilmGhibli.title} - <small>{FilmGhibli.original_title}</small></h1>
        <p > <strong>Réalisateur:</strong> {FilmGhibli.director}</p>
        <p > <strong>Année:</strong> {FilmGhibli.release_date}</p>
        <p > <strong>Description:</strong> {FilmGhibli.description}</p>
        
        </div>
      </article>
      </div>
    </main>
  )
  // ...

}

export default FilmGhibli;