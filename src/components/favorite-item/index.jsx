import { useContext } from "react";
import "./styles.css";
import { ThemeContext } from "../../App";

const FavoriteItem = (props) => {
  const { id, image,removeFromFavorites, title  } = props;
const {theme} = useContext(ThemeContext)


  return (
    <div key={id} className="favorite-item">
      <div>
        <img src={image} alt="image of recipe" />
      </div>

      <p style={theme ? {color : "#12343b"} : {}}>{title}</p>

      <button style={theme ? {backgroundcolor : "#12343b"} : {}} type="button" onClick={removeFromFavorites}>Remove to favorites</button>
    </div>
  );
};

export default FavoriteItem;
