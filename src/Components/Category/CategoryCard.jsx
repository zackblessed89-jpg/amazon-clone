import classes from "./Category.module.css";
import Category from "./Category";
function CategoryCard({info}) {
  return (
    <div className={classes.category}>
      <a href={`/category/${info?.name}`}>
        <span>
          <h2>{info?.title}</h2>
        </span>
        <img src={info?.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
