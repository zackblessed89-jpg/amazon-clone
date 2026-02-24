import classes from "./Category.module.css";
// import Category from "./Category";
import { Link } from "react-router-dom";
function CategoryCard({infos}) {
  console.log(infos); 
  return (
    <div className={classes.category}>
      <Link to={`/category/${infos.name}`}>
        <span>
          <h2>{infos?.title}</h2>
        </span>
        <img src={infos?.imgLink} alt=""/>
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
