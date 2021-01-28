import './HomePage.css';
import CharityCard from '../../components/CharityCard/CharityCard'
import { Carousel } from 'react-bootstrap';

export default function HomePage() {

  return (
    <>
      <Carousel >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i.imgur.com/5jlUwZV.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Make a difference</h3>
            <p>We can all make a big difference with a little.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/5jlUwZV.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Together We Can</h3>
            <p>Small bits from everyone adds up</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/5jlUwZV.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>We for We</h3>
            <p>As a community, together we can help those in need.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br/>
      <div className="row text-center">
        <div><CharityCard /></div>
      </div>
    </>
  );
}