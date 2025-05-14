import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Merch = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div>
         <div id="carouselExampleCaptions" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 1"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C71FsOnMA%2BrL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png" className="d-block w-25 h-25" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <button type="button" class="btn btn-danger">Buy now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C81G6fqZ-4dL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png" className="d-block w-25 h-25" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <button type="button" class="btn btn-danger">Buy now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C81jEvHPvn0L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png" className="d-block w-25 h-25" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <button type="button" class="btn btn-danger">Buy now</button>
      </div>
    </div>
  </div>
  <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C71PLMdlzZtL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png" className="d-block w-25 h-25" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <button type="button" class="btn btn-danger">Buy now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C810KBg0%2BnsL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png" className="d-block w-25 h-25" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <button type="button" class="btn btn-danger">Buy now</button>
      </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
}; 