import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import classes from "./Results.module.css";

function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoryName } = useParams();

  useEffect(() => {
    if (!categoryName) return;

    // setLoading();

    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data); // Axios data fix
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <div className={classes.container}>
        <h2 className={classes.heading}>Results for: {categoryName}</h2>

        {loading && <p>Loading products...</p>}
        {error && <p className={classes.error}>{error}</p>}

        <div className={classes.list}>
          {results.map((item) => (
            <div key={item.id} className={classes.card}>
              <img
                src={item.image}
                alt={item.title}
                className={classes.image}
                loading="lazy"
              />
              <p className={classes.title}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </LayOut>
  );
}

export default Results;
