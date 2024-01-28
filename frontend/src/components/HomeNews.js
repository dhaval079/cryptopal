import React from 'react'
import "./css/homeNews.css"


function HomeNews(props) {
    
    const {title, imgUrl, url, desc} = props;
  return (
    <div className='news'>
        <div className="card news-main">
        
  <div className="row no-gutters">
    <div className="col-md-2 news-img">
      <img src={imgUrl} className="card-img" alt="..."/>
    </div>
    <div className="col-md-10 news-desc">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default HomeNews