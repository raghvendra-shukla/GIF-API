import React from 'react'

function GIF(props) {
  const {gif,title}=props;
  return (
    <>
    <div className="container my-2">
      <div className="card" style={{width:"20rem"}}>
        <img src={gif} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
    </>
  )
}

export default GIF