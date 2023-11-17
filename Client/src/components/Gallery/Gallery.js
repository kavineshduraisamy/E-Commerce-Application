import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "reactstrap";
import GalleryCard from "../Card/GalleryCard";
import "./galleryCompo.css";

const Gallery = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/gallery")
      .then((res) => {
        setImgs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const gallerySrc = () => {
    return imgs.map((data, i) => {
      return (
        <Col lg="3" key={i}>
          <GalleryCard
            src={data.galleryImage}
            title={data.galleryTitle}
            subtitle={data.gallerySubTitle}
            link={data.galleryLink}
          />
        </Col>
      );
    });
  };
 

  return (
    <React.Fragment><br/><br/><br/>
    <center>  <img className="bargain" src="https://sslimages.shoppersstop.com/sys-master/root/hf9/h5f/27745951186974/Bargains-of-the-day_web--hmp-24589l.gif" alt=""/> </center>
     <Container fluid={true}>
        <h3>SHOP MORE CATEGORIES </h3>
        <Row className="galleryRow">{gallerySrc()}</Row>
      </Container>
    </React.Fragment>
  );
};

export default Gallery;
