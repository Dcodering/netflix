import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import CardData from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';
function TitleCards({title, category}) {
  const [datas, setDatas] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2RiMzgyZmFmNGNhOGIxMDM4MDBmZjAzMzRhZDRiNyIsIm5iZiI6MTczNzk5NDI3MS40MzI5OTk4LCJzdWIiOiI2Nzk3YjAxZjNhZTM1NWM0Nzg4ZjNmNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.amhLW7f6_4J-bMipEpFQqpLO0OsgQPhxjR_oDXft2BU'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${category? category: 'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setDatas(res.results))
    .catch(err => console.error(err));

  const cardsRef = useRef();

  function handleWheel(e){
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  useEffect(() =>{
        cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])
  return (
    <div className='titleCards'>
      <h2 className="">{title?title:'Popular on Netflix'}</h2>
      <div className="cardList" ref={cardsRef}>
        {datas.map((data, index) => (
          <Link to={`/player/${data.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
            <p>{data.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards