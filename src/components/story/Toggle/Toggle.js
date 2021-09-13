import React, { lazy } from "react";

const Row = lazy(() => import("react-bootstrap/Row"));
const Col = lazy(() => import("react-bootstrap/Col"));
const ToggleComponent = lazy(() => import("../../lib/Toggle"));
const BoxImplementation = lazy(() => import("../../BoxImplementation"));

const Wrapper = ({ children, componentText }) =>
  <div>
    <Row>
      <Col sm={12} md={6} lg={4} xl={3} style={{ padding: "1em" }}>
        {children}
      </Col>
      <Col sm={12} md={12} lg={8} xl={6}>
        <BoxImplementation componentText={componentText} />
      </Col>
    </Row>
  </div>;

const Toggle = props =>
  <Wrapper {...props}>
    <ToggleComponent {...props.toggleProps} />
  </Wrapper>;

export default Toggle;
