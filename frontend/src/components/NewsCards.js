import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NewsCards(props) {
    const navigate = useNavigate();
    const {title,desc,url,urlToImage} = props;
  return (
    <>
        <div className="card">
    <img className="card-img-top" src={urlToImage} alt="Cardcap"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {/* <p className="card-text">{desc}</p> */}
      <Link href="#" className="btn btn-primary card-button">Explore</Link>
    </div>
  </div>
    </>
  )
}

export default NewsCards