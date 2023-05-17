import Carousel from 'react-bootstrap/Carousel';

function CarouselOne() {
  return (
    <Carousel>
      <Carousel.Item className='carouselitem'>
        <img
          className="center-block d-flex flex-column justify-content-center"
          src="https://media.wired.com/photos/63b7273fa218e1847e6e31c2/master/w_1600%2Cc_limit/WI020123_FF_Interview_Pascal_02.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselitem'>
        <img
          className="center-block d-flex flex-column justify-content-center"
          src="https://static.displate.com/280x392/displate/2023-02-24/fcd5dd8ccf8d7a90a8040f55dc916125_7aae96bbc41922030f842aee835b0f5a.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carouselitem'>
        <img
          className="center-block d-flex flex-column justify-content-center"
          src="https://th-thumbnailer.cdn-si-edu.com/2zPOHKRmOBMmE66yYYrnGkH_zPE=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b3/57/b35709d6-a2a4-4abc-933f-aa43cce98513/froot-loops-cereal-bowl.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselOne;