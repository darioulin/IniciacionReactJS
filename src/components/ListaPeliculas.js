import React, { Component } from 'react'
import Pelicula from './Pelicula'

export class ListaPeliculas extends Component {
    state = {
        peliculas: [
          {movieId: "111", title: "Matrix", year: "2012",
          description: "Experto en Informatica Descubre Matrix", image: "http://images.coveralia.com/audio/b/BSO_The_Matrix--Frontal.jpg", theme: "accion", director: "Wachowsky"},
          {movieId: "222", title: "Matrix 2", year: "2013", description: "Experto en Informatica Descubre Matrix", image: "https://i.ytimg.com/vi/OM0tSTEQCQA/maxresdefault.jpg",
          theme: "accion", director: "Wachowsky"},
          {movieId: "333", title: "Matrix3", year: "2012", description: "Experto en Informatica Descubre Matrix", image: "https://vignette.wikia.nocookie.net/matrix/images/d/df/Thematrixincode99.jpg", theme: "accion", director: "Wachowsky"},
        ]
    } 
    //Métodos de ciclo de vida

    componentDidMount(){
        console.log("DidMount");
    }

    componentWillMount(){
        console.log("WillMount");
    }

    componentDidUpdate(){
        console.log("DidUpdate");
    }

    render() {
    //Buen lugar para asignar variables
        console.log("Render");
        const {peliculas} = this.state;
        return (
            <div className="container">
            <h1>Lista de Peliculas</h1>
            <div className="row">
            {peliculas.map(pelicula =>(
                
                    <Pelicula
                        key={pelicula.movieId}
                        pelicula={pelicula}
                    />
                    
                ))}
            </div>
                
            </div>
        )
    }
}

export default ListaPeliculas;
