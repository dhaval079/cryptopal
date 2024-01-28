import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import './css/home.css'
import HomeNews from './HomeNews';

 function Home() {
    // useEffect(() => {
    //     axios.get("https://newsapi.org/v2/everything?q=crypto&from=2024-01-26&to=2024-01-26&sortBy=popularity&pageSize=5&apiKey=cc2b54014ad943e690635af264e34e7d")
    //     .then((response)=>{
    //         return response.data.articles;
    //     }).then((data)=>{
    //         newsCurrent.current = data;
    //     });
    // }, []);

    const [news, setNews]= useState([]);
    const getNews = ()=>{
        axios.get("https://newsapi.org/v2/everything?q=crypto&from=2024-01-26&to=2024-01-26&sortBy=popularity&pageSize=5&apiKey=cc2b54014ad943e690635af264e34e7d")
        .then((res)=>{
            setNews(res.data.articles)
        })
    }

    useEffect(()=>{
        getNews();
    },[]);

    console.log(news);
    
  return (
    <div id='home-section'>
    <div className='heading-section'>
        <h1 id='heading'>CryptoPal</h1>
        <p id='heading-quote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
    </div>
    <div className='news-section'>
    <h3 className='news-heading'>News Highlights</h3>
        {
            news.map((ele)=>{
            return (<HomeNews 
                title={ele.title}
                imgUrl = {ele.urlToImage}
                url = {ele.url}
                desc = {ele.description}
            />);
        })
        }
    </div>
    </div>
  )
}

export default Home

