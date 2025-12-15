import classes from "./Category.module.css";
import CategoryCard from "./CategoryCard.jsx";
import { categoryInfos } from "./categoryFullinfos";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos?.map((data, index) => {
        // console.log(data);

        return <CategoryCard key={index} info={data} />;
      })}
    </section>
  );
}

export default Category;
