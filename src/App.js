import React from 'react';

import './App.css';
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import  Nav from "./Nav";
function App() {
  return (
    <div className="App">
        <Nav/>
      <Banner/>

      <Row title="Netflix Originals" fetchURL={requests.fetchLatest}
           isLargeRow />
        <Row title="Trending Now" fetchURL={requests.fetchTrending }/>
        <Row title="Now Playing" fetchURL={requests.fetchNowPlaying }/>
        <Row title="Upcoming Movies" fetchURL={requests.fetchUpcoming }/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated }/>
        <Row title="Romance" fetchURL={requests.fetchTrending }/>

    </div>
  );
}

export default App;
