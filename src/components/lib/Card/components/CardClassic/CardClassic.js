import React, { useState } from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { determinateColor, initialSizeProps } from "../../../../../utils/utils";
import Skeleton from "../../../Skeleton";

const CardClassic = props => {
  const {
    image,
    title = "",
    size = "md",
    color = "#fff",
    expanded = false,
    imageFitPosition = "center",
    children,
    className = "classic"
  } = props;

  const [styleSize, setStyleSize] = useState(initialSizeProps);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState(true);
  const styleColor = determinateColor(color);
  const showTitle = title || expanded;

  const handleShowMore = e => {
    e.preventDefault();
    setStyleSize(() => {
      if (isExpanded) {
        return initialSizeProps;
      } else {
        return {
          whiteSpace: "initial",
          maxHeight: "500px",
          transition: "max-height 2s ease-out"
        };
      }
    });
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`kromac-container ${className}`}>
      <div className="kromac-card">
        <div className="kromac-card-image">
          {isImgLoading && <Skeleton width="100%" height="100%" />}
          <img
            src={image}
            alt="Card"
            style={{ objectPosition: imageFitPosition }}
            onLoad={() => setIsImgLoading(false)}
          />
          {showTitle &&
            <div className="card-title">
              <h4 className="animate__animated animate__zoomIn">
                {title}
              </h4>
              {expanded &&
                <label onClick={handleShowMore}>
                  {isExpanded ? "show less" : "show more"}
                </label>}
            </div>}
        </div>
        <div className={`kromac-card-caption ${styleColor}`}>
          <div
            className={`card-text ${size} animate__animated animate__zoomIn`}
            style={{ ...styleSize }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CardClassic.propTypes = exact({
  cardType: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["#fff", "transparent"]),
  expanded: PropTypes.bool,
  imageFitPosition: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
});

export default CardClassic;
