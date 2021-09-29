import React, { lazy } from "react";
// import "./Gallery.scss";
import "../../../css/Gallery.css"

const GalleryResponsive = lazy(() => import("./GalleryResponsive"));
const GalleryPolygon = lazy(() => import("./GalleryPolygon"));

const Gallery = props => {
  const { galleryType } = props;
  switch (galleryType) {
    case "polygon":
      return <GalleryPolygon {...props} />;
    default:
      return <GalleryResponsive {...props} />;
  }
};

export default Gallery;
