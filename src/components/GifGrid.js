import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="card-grid">
          {images.map((item) => {
            return <GifGridItem key={item.id} {...item} />;
          })}
        </div>
      )}
    </>
  );
};

export default GifGrid;
