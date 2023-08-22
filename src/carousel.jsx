import Carousel from 'react-bootstrap/Carousel';

function Slide1() {
  return (
    <Carousel data-bs-theme="dark" className='slide'>
      <Carousel.Item>
        <img
          className="d-block w-100 slides"
          src="https://static.india.com/wp-content/uploads/2014/10/myntra.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slides"
          src="https://couponswala.com/blog/wp-content/uploads/2021/12/myntra-upcomming-sale-min-1.png.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slides"
          src="https://www.zingoy.com/blog/wp-content/uploads/2021/06/Myntra-End-of-Reason-Sale-Offers-2021-blog.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide1;