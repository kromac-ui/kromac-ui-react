import React, { lazy, Suspense, useEffect } from "react";
import { changeDocumentTitle } from "../../../utils/utils";
import menuProps from "./storyProps/menuProps";
import "./style.scss";

const Preview = lazy(() => import("../../Preview"));
const Menu = lazy(() => import("./Menu"));

const MenuHistory = ({ location }) => {
  useEffect(
    () => {
      document.title = changeDocumentTitle({ component: "Menu", state: "" });
      window.scrollTo(0, 0);
    },
    [location]
  );
  return (
    <div>
      <Preview
        title="Menu"
        subTitle={menuProps.subTitle}
        description={menuProps.description}
        importType={menuProps.importType}
        propsDescription={menuProps.propsDescription}
        notes={menuProps.notes}
      >
        <Suspense fallback={<div>Loading Menu component...</div>}>
          <Menu
            menusProps={menuProps.menuProps}
            componentText={menuProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default MenuHistory;
