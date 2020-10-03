

// const API_KEY = "b14f1f33f822b202c31f284001141b69";
const requests = {
    fetchTrending:
        `https://api.themoviedb.org/3/tv/popular?api_key=b14f1f33f822b202c31f284001141b69`,
    fetchLatest:'https://api.themoviedb.org/3/movie/top_rated?api_key=b14f1f33f822b202c31f284001141b69',
    fetchUpcoming:'https://api.themoviedb.org/3/movie/upcoming?api_key=b14f1f33f822b202c31f284001141b69',
    fetchTopRated:'https://api.themoviedb.org/3/movie/top_rated?api_key=b14f1f33f822b202c31f284001141b69',
    fetchNowPlaying:'https://api.themoviedb.org/3/movie/now_playing?api_key=b14f1f33f822b202c31f284001141b69',
}

export  default requests;