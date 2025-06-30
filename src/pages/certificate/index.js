import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { certificates, meta } from "../../content_option";

export const Certificate = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Certificates | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Certificates </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {certificates.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.imageUrl} alt={data.title} />
                <div className="content">
                  <h3>{data.title}</h3>
                  <p><strong>Provider:</strong> {data.provider}</p>
                  <p><strong>Date:</strong> {data.date}</p>
                  <p><strong>Skills:</strong> {data.skills.join(", ")}</p>
                  <a href={data.credentialLink} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};