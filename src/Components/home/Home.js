import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/Context";
import Footer from "../footer/Footer";

const Home = () => {

  const [category]=useContext(CategoryContext);
  

  return (
    <div className="h1">
      <div className="grid1">
     
      </div>
      <div>
        <div>The Latest</div>
        <hr className="hlhr"/>
        <div className="flex2">
            <div className="hc1">
            {category.filter(data=>data.id==="1").map((latest)=>(
              <Link to={`/tollywood/${latest.id}`}className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div>
          <div className="hc1">
          {category.filter(data=>data.id==="5").map((latest)=>(
            <Link to={`/technology/${latest.id}`} className="hcc1">
            <div className="himg"><img src={latest.img} alt="" /></div>
            <div className="c1h3"><h3>{latest.det}</h3></div>
            <div className="c1h5"><h5>{latest.date}</h5></div>
          </Link>
          ))}
            </div>
            <div className="hc1">
            {category.filter(data=>data.id==="9").map((latest)=>(
              <Link to = {`/nature/${latest.id}`} className="hcc1">
              <div className="himg"><img src={latest.img} alt="" /></div>
              <div className="c1h3"><h3>{latest.det}</h3></div>
              <div className="c1h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div><br/>
        </div>
          <div style={{marginLeft:"-8.5%",marginTop:"2%"}}><Footer/></div>
        <div className="flex3">
        <div className="advs" ><img src="https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg" className="advr" alt="" /></div><br/>
            <div>Latest Articles</div>
            <hr className="hlhr"/>
            <div className="hc2">
            {category.filter(data=>data.id==="2").map((latest)=>(
              <Link to={`/tollywood/${latest.id}`} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div><hr className="f50per"/>
          <div className="hc2">
          {category.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/technology/${latest.id}`} className="hcc2">
            <div className="tollyi"><img src={latest.img} alt="" /></div>
            <div className="tollyt"><h3>{latest.det}</h3></div>
            <div className="c2h5"><h5>{latest.date}</h5></div>
          </Link>
          ))}
            </div><hr className="f50per"/>
            <div className="hc2">
            {category.filter(data=>data.id==="12").map((latest)=>(
            <Link to={`/jobs/${latest.id}`} className="hcc2">
              <div className="tollyi"><img src={latest.img} alt="" /></div>
              <div className="tollyt"><h3>{latest.det}</h3></div>
              <div className="c2h5"><h5>{latest.date}</h5></div>
            </Link>
          ))}
          </div><br/>
        </div>
      </div>
    </div>
  );
};

export default Home;
