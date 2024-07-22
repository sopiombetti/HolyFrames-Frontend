import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselItem } from 'react-bootstrap';

function Carousell() {

  const movies = [{
    img: "/images/daysofheaven.jpg",
    title: "Days of Heaven (1978)",
    dir: "dir Terrence Malick"
  },
  {
    img: "/images/goodtime.jpg",
    title: "Good Time (2017)",
    dir: "dir Sadfie Brothers"
  },
  {
    img: "/images/naturalbornkillers.jpg",
    title: "Natural Born Killers (1994)",
    dir: "dir Oliver Stone"
  },
  {
    img: "/images/melancholia.jpg",
    title: "Melancholia (2011)",
    dir: "dir Lars Von Trier"
  }]

  return (
    <Carousel infiniteLoop showThumbs>
        {movies.map((movie) => (
          <CarouselItem>
              <div className='carousel-img'>
                <img src={movie.img} />
              </div>
              <h3>{movie.title}</h3>
              <p>{movie.dir}</p>
          </CarouselItem>
        ))}
    </Carousel>

  );
}

export default Carousell;