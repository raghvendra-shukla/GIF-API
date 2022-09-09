import React, { useEffect, useState } from 'react'
import GIF from './GIF'

function Trending() {
    const [Data, setData] = useState([]);
    const trending=async()=>{
        let url=`https://api.giphy.com/v1/gifs/trending?api_key=8DpsyLIeb1Et4DJBA7c4JFxg5LaHZeBB&limit=40&rating=g`;
        let data=await fetch(url);
        let parsedData=await data.json();
        setData(parsedData.data);
    }
    useEffect(() => {
        trending();
    },)
  return (
    <>
    <div className="row text-center my-2">
      {Data.map((element)=>{
        return(
          <div className="col-md-3" key={element.id}>
            <GIF gif={element.images.original.url} title={element.title}/>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Trending