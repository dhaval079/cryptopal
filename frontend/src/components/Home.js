import React, { useEffect } from 'react'
import axios from 'axios';
import './css/home.css'
import HomeNews from './HomeNews';

 function Home() {
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=crypto&from=2024-01-26&to=2024-01-26&sortBy=popularity&pageSize=5&apiKey=cc2b54014ad943e690635af264e34e7d")
        .then((response)=>{
            console.log(response);
        });
    }, [])
    
    
  return (
    <div id='home-section'>
    <div className='heading-section'>
        <h1 id='heading'>CryptoPal</h1>
        <p id='heading-quote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
    </div>
    <div className='news-section'>
        {/* {news.map((ele)=>{
            return <HomeNews 
                title={news.title}
                imgUrl = {news.urlToImage}, url, desc
            />
        })} */}
    </div>
    </div>
  )
}

export default Home

