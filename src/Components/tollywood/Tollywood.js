import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import { CategoryContext } from "../context/Context";

const Tollywood = () => {
  const [category] = useContext(CategoryContext);


  return (
    <div>
      <h1 className="tollyh">TollyWood</h1><hr className="thhr"/>
      {category.filter((render)=>render.id<5).map((wood) => (
        <div key={category.id} className="tolly">
          <Link to={`/tollywood/${wood.id}`}className="tolly">
            <div className="tollyi"><img src={wood.img} alt="" /></div>
            <h3 className="tollyt">{wood.det}</h3>
          </Link>
          <h5>{wood.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg" className="adv" alt="" /></div><br/>
      <button className="loadmore">LoadMore</button>
      <Bottom/>
    </div>
  );
};

export default Tollywood;
