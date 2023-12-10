import { Carousel } from "react-bootstrap";
import styles from "./MyCarousel.module.css";

const MyCarousel = () => {
  return (
    <Carousel className={styles.Carousel}>
      <Carousel.Item className={styles.Image}>
        <img src="/Images/wp3576126.jpg" alt="First slide" />
        <Carousel.Caption className="text-dark">
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.Image}>
        <img src="/Images/042.webp" alt="Second slide" />

        <Carousel.Caption className="text-white">
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.Image}>
        <img src="/Images/043.webp" alt="Second slide" />

        <Carousel.Caption className="text-dark">
          <h1>Third slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
