import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../css/style.css";

const Proyecto = (props) => {
  return (
    <Col lg="4" md="12" className="mb-4">
      <Card className="shadow">
        <Card.Header
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img src={props.imagen} className="img-fluid" alt="" />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </Card.Header>
        <Card.Body className="bg-light">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            {props.title}
          </h5>
          {/* <p className="card-text" style={{ textAlign: "justify" }}>
            {props.subTitle}
          </p> */}
        </Card.Body>
        <Card.Footer className="bg-light">
          <Row>
            <Button
              variant="dark"
              size="lg"
              className="rounded-pill mt-2 mx-auto shadow"
              onClick={props.onShow}
            >
              Visualizar
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Proyecto;