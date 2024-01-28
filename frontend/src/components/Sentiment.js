import React from 'react'
import { Link } from 'react-router-dom'
import "./css/sentiment.css"
import NewsCards from './NewsCards'

function Sentiment() {
  const news =[
  {
    source: { id: null, name: 'Biztoc.com' },
    author: 'cryptonews.com',
    title: 'Kevin O’Leary says Institutions Won’t Use Spot Bitcoin ETFs and Hints at Next Trend in Crypto',
    description: '(Photo by Steven Ferdman/Getty Images) While the approval of spot Bitcoin (BTC) exchange-traded funds (ETFs) in the United States will further lead to the institutionalization of Bitcoin, Kevin O’Leary — a Canadian venture capitalist and CNBC personality — to…',
    url: 'https://biztoc.com/x/630ed9e8eaebff87',
    urlToImage: 'https://c.biztoc.com/p/630ed9e8eaebff87/s.webp',
    publishedAt: '2024-01-12T15:21:50Z',
    content: '(Photo by Steven Ferdman/Getty Images)While the approval of spot Bitcoin (BTC) exchange-traded funds (ETFs) in the United States will further lead to the institutionalization of Bitcoin, Kevin OLeary… [+275 chars]'
  },
  {
    source: { id: null, name: 'GameStar' },
    author: 'Alexander Köpf',
    title: 'Rätsel - Der Erfinder von Bitcoin ist vor 13 Jahren verschwunden - jetzt hat sein Konto eine Millionen-Euro-Überweisung erhalten',
    description: 'Ist der legendäre Erfinder des Bitcoin Satoshi Nakamoto wieder aufgetaucht oder hat jemand eine anonyme Spende getätigt?',
    url: 'https://www.gamestar.de/artikel/erfinder-bitcoin-verschwunden-millionen-dollar-ueberweisung,3406646.html',
    urlToImage: 'https://images.cgames.de/images/gamestar/4/gs-bitcoin-schatz-auf-müllhalde_6189850.jpg',
    publishedAt: '2024-01-12T07:34:00Z',
    content: 'Plötzlich um über eine Million Euro reicher - wer träumt nicht davon? (Bildquelle: Pixabay)\r\n' +
      'Im Jahr 2009 betrat die Kryptowährung Bitcoin die Bühne der Welt. Sie ist damit nicht nur die erste ihrer … [+3163 chars]'
  },
  {
    source: { id: null, name: 'Biztoc.com' },
    author: 'cryptonews.com',
    title: 'Castle Funds’ COO Just Because Bitcoin ETFs Are Allowed Doesn’t Mean They’ll Succeed',
    description: 'In an insightful interview with Cryptonews, Dan Hoover, the Chief Operating Officer and Chief Compliance Officer at investment firm Castle Funds, discussed several Bitcoin ETF-related topics. These include how valuable Bitcoin ETF trading volume information r…',
    url: 'https://biztoc.com/x/09a7380434db98c4',
    urlToImage: 'https://c.biztoc.com/p/09a7380434db98c4/s.webp',
    publishedAt: '2024-01-22T16:08:24Z',
    content: 'In an insightful interview with Cryptonews, Dan Hoover, the Chief Operating Officer and Chief Compliance Officer at investment firm Castle Funds, discussed several Bitcoin ETF-related topics.These in… [+275 chars]'
  },
  {
    source: { id: null, name: 'Biztoc.com' },
    author: 'cryptonews.com',
    title: 'Bitcoin Faces Unprecedented Price Swings Amidst Record Volatility Signals and SEC ETF Decision: Bifinex Analyst',
    description: 'Source: Adobe / Luisa Derivatives traders are on high alert as signals from the options markets indicate the potential for unprecedented volatility in the Bitcoin market. According to insights provided to CryptoNews by Bitfinex analysts, the expectations for …',
    url: 'https://biztoc.com/x/d45c9cc9eda09f04',
    urlToImage: 'https://c.biztoc.com/p/d45c9cc9eda09f04/s.webp',
    publishedAt: '2024-01-05T05:28:13Z',
    content: 'Source: Adobe / LuisaDerivatives traders are on high alert as signals from the options markets indicate the potential for unprecedented volatility in the Bitcoin market.According to insights provided… [+283 chars]'
  },
  {
    source: { id: null, name: 'Biztoc.com' },
    author: 'cryptonews.com',
    title: 'Expert Opinions: Massive Inflows to Follow Spot Bitcoin ETF Approval, Bull Market Questionable',
    description: 'Talking with Cryptonews, three experts have shared their views on spot Bitcoin ETFs trading volumes. They discussed the initial price drop post-approval, how the US Fed and presidential election could affect the market, BlackRock’s marketing approach, the ben…',
    url: 'https://biztoc.com/x/a7d59ad051d24278',
    urlToImage: 'https://c.biztoc.com/p/a7d59ad051d24278/s.webp',
    publishedAt: '2024-01-19T11:08:34Z',
    content: 'Talking with Cryptonews, three experts have shared their views on spot Bitcoin ETFs trading volumes.They discussed the initial price drop post-approval, how the US Fed and presidential election could… [+306 chars]'
  },
  {
    source: { id: null, name: 'Biztoc.com' },
    author: 'cryptonews.com',
    title: 'Bitcoin ETFs Gain Momentum in Asia Post U.S. Approval',
    description: 'As the first Bitcoin spot price exchange-traded funds receive historic approval in the United States, Asian industry leaders, particularly in Hong Kong, are actively exploring similar crypto products. BitGo’s APAC Director Abel Seow told Cryptonews that they …',
    url: 'https://biztoc.com/x/ff6dc71e2be1fb77',
    urlToImage: 'https://c.biztoc.com/p/ff6dc71e2be1fb77/s.webp',
    publishedAt: '2024-01-23T10:40:14Z',
    content: 'As the first Bitcoin spot price exchange-traded funds receive historic approval in the United States, Asian industry leaders, particularly in Hong Kong, are actively exploring similar crypto products… [+277 chars]'
  },
  {
    source: { id: null, name: 'Biztoc.com' },
    author: 'cryptonews.com',
    title: 'Grayscale Bitcoin ETF Liquidity Partner Flowdesk Raises $50 Million in Series B',
    description: 'French crypto financial services firm Flowdesk has successfully raised $50 million in a Series B funding round led by Cathay Innovation. The funding round includes participation from Cathay Ledger Fund, Eurazeo, ISAI, Speedinvest, BPI, and Ripple, as per a st…',
    url: 'https://biztoc.com/x/7421d2048e86cf1d',
    urlToImage: 'https://c.biztoc.com/p/7421d2048e86cf1d/s.webp',
    publishedAt: '2024-01-18T15:20:21Z',
    content: 'French crypto financial services firm Flowdesk has successfully raised $50 million in a Series B funding round led by Cathay Innovation. The funding round includes participation from Cathay Ledger Fu… [+297 chars]'
  }
]




  return (
    <div className='sentiment-main'>
    <h3 className='news-list-heading'>Check Sentiments for below News</h3>
  <div className='news-list'>

    {news.map((ele)=>{
      return (<NewsCards
        title={ele.title}
        url= {ele.url}
        urlToImage= {ele.urlToImage}
        desc= {ele.description}
      />)
    })}
  </div>
    
    </div>
  )
}

export default Sentiment