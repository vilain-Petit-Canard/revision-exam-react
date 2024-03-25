import { Link } from 'react-router-dom';


import './FilmVedette.css';

function FilmVedette(props) {
    console.log(props);
  return (
    
        <section className='film-vedette'>
                    <Link to={`/film/${props.filmVedette.id}`}>
                        <img src={props.filmVedette.image} alt={props.filmVedette.title}/>
                        <div>

                            <h2>{props.filmVedette.original_title}</h2>
                            <p>{props.filmVedette.release_date}</p>

                        </div>
                    </Link>
                    <div>
                        <h2>Film Vedette</h2>
                        <button onClick={props.handleNouveauFilmVedette}></button>
                    </div>
                </section>

  );
}

export default FilmVedette;


