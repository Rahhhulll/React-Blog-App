import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import { CategoryContext } from "../context/Context";

const Jobs = () => {
    const [category] = useContext(CategoryContext);
  
    return (
      <div>
        <h1 className="tollyh">Jobs</h1><hr className="thhr"/>
        {category.filter((render)=>render.id>8 && render.id<13).map((wood) => (
          <div key={category.imgt} className="tolly">
            <Link to={`/jobs/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <h5>{wood.date}</h5>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://wikichennai.com/post.images/a3418c384d.jpg" className="adv" alt="" /></div><br/>
        <button className="loadmore">LoadMore</button>
        <Bottom/>
      </div>
    );
  };
  
  export default Jobs;
  