import React, { useEffect, useState } from 'react'
import GIF from './GIF'

function Home(props) {
  const [Search, setSearch] = useState(props.search);
  const [Data, setData] = useState([]);
  const Handleonchange=(e)=>{
    localStorage.setItem("value",e.target.value);
  }
  const Handleonclick=(e)=>{
    e.preventDefault();
    setSearch(localStorage.getItem("value"));
  }
  const mydata=async()=>{
    let url=`https://api.giphy.com/v1/gifs/search?api_key=8DpsyLIeb1Et4DJBA7c4JFxg5LaHZeBB&q=${Search}&limit=40&offset=0&rating=g&lang=en`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setData(parsedData.data);
  }
  useEffect(() => {
    mydata();
  },)
  return (
    <>
    <div className="container my-2" style={{width:"20rem"}}>
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={Handleonchange}/>
        <button className="btn btn-outline-success" type="submit" onClick={Handleonclick}>Search</button>
    </form>
    </div>
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

Home.defaultProps = {
  search:"cartoon"
};

export default Home