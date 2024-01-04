import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-img-container">
        <img src={IMG_URL + resData.cloudinaryImageId} alt="restaurant-image" />
      </div>
      <div className="restaurant-info-div">
        <h3 className="restaurant-name">{resData.name}</h3>
        <span className="restaurant-rating">{resData.avgRating}</span>
        <p className="cuisines text-black">{resData.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
