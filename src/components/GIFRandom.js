import React from 'react'

function GIFRandom(props) {
    const {gif,title}=props;
  return (
    <>
    <div className="container my-2">
      <div className="card">
        <img src={gif} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
    </>
  )
}

export default GIFRandom