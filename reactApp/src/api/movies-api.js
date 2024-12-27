export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=73e7d239bd6ed72ff2ff64e73ceb81ea&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };