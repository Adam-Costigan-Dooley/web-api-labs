import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )

  const [mustWatch, setMustWatch] = useState([]);

  const [myReviews, setMyReviews] = useState({})

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

    
    const addToMustWatch = (movie) => {
      let newMustWatch = [];
      if (!mustWatch.includes(movie.id)) {
        newMustWatch = [...mustWatch, movie.id];
      } else {
        newMustWatch = [...mustWatch];
      }
      setMustWatch(newMustWatch);
      console.log("Must Watch is updated lets go", newMustWatch);
    };
  
    // We will use this function in the next step
    const removeFromMustWatch = (movie) => {
      setMustWatch(mustWatch.filter(
        (mId) => mId !== movie.id
      ) );
      console.log("Must Watch is updated lets go (removed)", mustWatch.filter((mId) => mId !== movie.id));
    };
  

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review})
  };
  //console.logs(myReviews);

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatch,
        addToFavorites,
        removeFromFavorites,
        addToMustWatch,
        removeFromMustWatch,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
