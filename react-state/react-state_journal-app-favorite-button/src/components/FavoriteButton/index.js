import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFavorite] = useState(false);
  function toggleIsFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={() => {
        // toggleIsFavorite();
        setIsFavorite(!isFavorite);
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}

