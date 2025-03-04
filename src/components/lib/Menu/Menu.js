import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import exact from "prop-types-exact";

const setActiveTab = (pathname, tab) => {
  if (pathname.includes(tab)) {
    return "kromac-menu-list active";
  }
  return "kromac-menu-list";
};

const Menu = props => {
  const {
    location: { pathname = "/" },
    appName,
    imgLogo,
    tabs = [],
    searchComponents = false,
    bgColor = "#283747",
    hamburgerActiveColor = "#C0392B",
    hamburgerColor = "#283747",
    homeUrl = "/"
  } = props;

  const [hambuergerIsActive, setHambuergerIsActive] = useState("");
  const [componentsFiltered, setComponentsFiltered] = useState("");
  const [components, setComponents] = useState(tabs.sort());

  useEffect(
    () => {
      setHambuergerIsActive("");
    },
    [pathname]
  );

  const styleMenu = {
    "--bgColor": bgColor,
    "--hamburgerActiveColor": hamburgerActiveColor,
    "--hamburgerColor": hamburgerColor
  };

  const handleChangeFilter = e => {
    e.preventDefault();
    const { target: { value } } = e;
    if (e) {
      setComponentsFiltered(value);
      const filtereds = tabs
        .sort()
        .filter(components => components.includes(value));
      setComponents(filtereds);
    } else {
      setComponents(tabs.sort());
    }
  };

  const handleActive = e => {
    e.preventDefault();
    setHambuergerIsActive(() => {
      if (hambuergerIsActive === "") {
        return "active";
      }
      return "";
    });
  };

  return (
    <div
      className={`kromac-menu-hamburger kromac-scroll ${hambuergerIsActive}`}
      style={styleMenu}
    >
      <div
        className={`kromac-hamburger-menu ${hambuergerIsActive}`}
        onClick={handleActive}
      >
        <img
          src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634352894/kromac-ui/hmenu_i0slih.png"
          alt="menu"
          className="open"
        />
        <img
          src="https://res.cloudinary.com/dxg9gszax/image/upload/v1634353013/kromac-ui/close_qcispf.png"
          alt="close"
          className="close"
        />
      </div>
      <div className="kromac-title text-bg-light">
        <Link to={homeUrl}>
          {imgLogo && <img src={imgLogo} alt="logo" />}
          {appName &&
            <h1>
              {appName}
            </h1>}
        </Link>
        {searchComponents &&
          <div className="kromac-input-search">
            <label className="text-bg-light">Find Component</label>
            <input
              type="text"
              name="filter"
              autoComplete="off"
              placeholder="Find component"
              value={componentsFiltered}
              onChange={handleChangeFilter}
            />
          </div>}
      </div>
      <ul>
        {components.map((link, index) =>
          <li key={index} className={setActiveTab(pathname, link)}>
            <b />
            <b />
            <Link to={link}>
              <span className="kromac-menu-title text-bg-light">
                {link}
              </span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

Menu.propTypes = exact({
  appName: PropTypes.string,
  imgLogo: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  searchComponents: PropTypes.bool,
  bgColor: PropTypes.string,
  hamburgerActiveColor: PropTypes.string,
  hamburgerColor: PropTypes.string,
  homeUrl: PropTypes.string,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  staticContext: PropTypes.any
});

export default withRouter(Menu);
