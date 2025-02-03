import React, { useEffect, useState } from 'react'
import backArrow from '../../assets/backArrow.png'
import './player.css'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const {id} = useParams();
    const [apiData, setApiData] = useState([
    //   {
    //   typeof: '',
    //   name: '',
    //   key: '',
    //   published_at: '',
    // }
  ]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2RiMzgyZmFmNGNhOGIxMDM4MDBmZjAzMzRhZDRiNyIsIm5iZiI6MTczNzk5NDI3MS40MzI5OTk4LCJzdWIiOiI2Nzk3YjAxZjNhZTM1NWM0Nzg4ZjNmNzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.amhLW7f6_4J-bMipEpFQqpLO0OsgQPhxjR_oDXft2BU'
    }
  };
  
  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
    console.log(apiData);
    
  },[])

  const navigate = useNavigate();

  return (
    <div className='player'>
      <img src={backArrow} alt="" onClick={() => {navigate(-2)}}/>
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="playerInfo">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player