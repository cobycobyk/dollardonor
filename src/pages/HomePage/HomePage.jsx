import './HomePage.css';
import CharityList from '../../components/CharityList/CharityList'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomePage({ charities }) {
  const chars = charities.map(charity =>
    <CharityList
      key={charity._id}
      charity={charity}
    />
  );
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
      <br />
      <div className="row justify-content-center">
        {chars}
      </div>
    </>
  );
}