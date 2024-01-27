import React from 'react'
import "./css/homeNews.css"


function HomeNews() {
    const props = {
        title: "Aviation Sector Sees No Fast Tech Solution To GPS Interference Problem",
    desc: "Global regulators, aviation security specialists and manufacturers failed to reach an agreement on a quick technical fix to the problem of GPS spoofing near war zones, instead calling for better training of pilots to deal with the issue, Reuters reports, citi…",
    url: "https://tech.slashdot.org/story/24/01/26/199220/aviation-sector-sees-no-fast-tech-solution-to-gps-interference-problem",
    imgUrl: "https://a.fsdn.com/sd/topics/usa_64.png",
    } 
    const {title, imgUrl, url, desc} = props;
  return (
    <div>
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