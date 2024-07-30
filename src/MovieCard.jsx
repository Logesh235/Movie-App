import React from 'react'
import './App.css';

const MovieCard = ({movie:{imdbID, Year, Poster, Title, Type}}) => {
  return (
    <div className='movie-card' key={imdbID}>
         <div className='year'>
            <p>{Year}</p>
            <span>{Type}</span>

        </div>
        <div >
            <img className='poster' src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
        </div>
        <div className='title'>
            <h3>{Title}</h3>
        </div> 

         {/* <Row xs={1} md={4} className="g-4">
        <Col key={imdbID}>
          <Card>
            <Card.Img variant="top" src={Poster} />
            <Card.Body>
              <Card.Title>{Title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row> */}
    </div>
  )
}

export default MovieCard