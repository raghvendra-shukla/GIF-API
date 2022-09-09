import React, { useEffect, useState } from 'react'
import GIFRandom from './GIFRandom';

function Random() {
    const [Data, setData] = useState([]);
    const [original, setOriginal] = useState([]);
    const random=async()=>{
        let url=`https://api.giphy.com/v1/gifs/random?api_key=8DpsyLIeb1Et4DJBA7c4JFxg5LaHZeBB&tag=&rating=g`;
        let data=await fetch(url);
        let parsedData=await data.json();
        setData(parsedData.data);
        setOriginal(parsedData.data.images.original);
    }
    useEffect(() => {
        random();
    },[])
  return (
    <>
        <GIFRandom gif={original.url} title={Data.title}/>
    </>
  )
}

export default Random