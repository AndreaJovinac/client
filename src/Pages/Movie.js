import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import CardMovie from "../Composants/CardMovie";
import Actors from "../Composants/Actors";
import "../Styles/Movie.css";

const Movie = (prosp) => {
  const [film, setFilm] = useState([]);
  const id = "1";
  //const id = film[0].id;
  /* Tu déclares un tableau dans lequel il y a 2 proposité qui seront dynamisé */
  useEffect(() => {
    axios //  La bibliothéque AXIOS : te permet faire gérer l'appel à a demande
      .get(`http://localhost:3000/movies/${id}`) // On mets l'URL du serveur
      .then((response) => setFilm(response.data)); // Tu me récupères la reponse dans lequel il y a toutes les données
  }, []);
  console.log(film); // On teste voir si il y a tous les films concernés
  //console.log(id);

  return (
    <div className="movie">
      <Header />
      <div className="content-movie">
        <section className="nav-buttn">
          <button className="mediumbtn"> Retour</button>
          <div className="btns">
            <button id="edit" className="mediumbtn">
              + modifier
            </button>
            <button className="mediumbtn">x suppr</button>
          </div>
        </section>
        <div className="data-movie">
          <div className="movie">
            <h2> {film.title}</h2>
            <time> {film.release_date} </time>
            <p id="categories"> {film.categories}</p>
            <p> {film.description} </p>
            <section className="section-actor">
              <h3> Acteurs </h3>
              <div className="actor">
                <figure
                  id="img-actor"
                  style={{ backgroundImage: "url(" + film.poster + ")" }}
                >
                  <img src="" alt="" />
                </figure>
                <div className="content">
                  <h3 className="titrecard">NOM Prénom </h3>
                  <p>Personnages</p>
                </div>
              </div>
            </section>
          </div>
          <aside>
            <figure>
              <img src={film.poster} alt={film.title} />
            </figure>
          </aside>
        </div>
        <section className="films-similaire">
          <h3> Films similaires</h3>
          <CardMovie film={film} key={film.id} id={film.id} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
