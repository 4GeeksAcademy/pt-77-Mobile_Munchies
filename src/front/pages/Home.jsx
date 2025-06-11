import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import picture from "../assets/img/find.jpg";
import picture2 from "../assets/img/register 3.jpg";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="eventsandtrucks">
      <div className="container pt-4">
        <div className="row">
          <div className="col-sm d-flex">
            <div className="card h-100">
              <img src={picture2} className="card-img-top" alt="..." />
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{ backgroundColor: "black" }}
              >
                <div className="d-flex justify-content-center">
                  <Link to={"/truckersignup"}>
                    <button type="button" className="btn btn-danger">
                      Register your truck
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm d-flex">
            <div className="card h-100">
              <img src={picture} className="card-img-top" alt="..." />
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{ backgroundColor: "black" }}
              >
                <div className="d-flex justify-content-center">
                  <Link to="/googlemaptest">
                    <button type="button" className="btn btn-danger">
                      Find a truck
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide py-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner py-5 carousel-gradient">
          <div className="carousel-item active ms-5">
            <div
              className="d-flex justify-content-center"
              style={{ width: "75rem" }}
            >
              <img
                className="d-flex justify-content-end shadowed-image"
                src="https://s3-media0.fl.yelpcdn.com/bphoto/-4INPXjgHpcNYkZuLNRBJg/l.jpg"
                alt="..."
                height="300rem"
                width="300rem"
              />
              <div
                className="fs-5 d-flex flex-column text-center justify-content-center  shadowed-image align-items-center bg-dark text-white"
                style={{ width: "210px" }}
              >
                <div>
                  <h5>Los brothers</h5>
                </div>
                <div>
                  <p>100% homemade Guatemalan and Mexican food</p>
                </div>
                <div>Rating: 5/5 stars</div>

                <Link to="/components/Trucks" className="mt-2">
                  <button type="button" className="btn btn-danger">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item ms-5">
            <div
              className="d-flex justify-content-center"
              style={{ width: "75rem" }}
            >
              <img
                className="d-flex justify-content-end shadowed-image"
                src="https://s3-media0.fl.yelpcdn.com/bphoto/UiZLAR_m_B8lLQlC4pak3A/348s.jpg"
                alt="..."
                height="300rem"
                width="300rem"
              />
              <div
                className="fs-5 d-flex flex-column text-center justify-content-center  shadowed-image align-items-center bg-dark text-white"
                style={{ width: "210px" }}
              >
                <div>
                  <h5>Bun & Blanket</h5>
                </div>
                <div>
                  <p>
                    Los Angeles' most popular flavors into fusionend burgers{" "}
                  </p>
                </div>
                <div>Rating: 4.9/5 Stars</div>
                <Link to="/components/Trucks" className="mt-2">
                  <button type="button" className="btn btn-danger">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item ms-5">
            <div
              className="d-flex justify-content-center"
              style={{ width: "75rem" }}
            >
              <img
                className="d-flex justify-content-end shadowed-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sKspFDNViqDBCtANWOx4Jmo-YkCXQCMkVw&s"
                alt="..."
                height="300rem"
                width="300rem"
              />
              <div
                className="fs-5 d-flex flex-column text-center justify-content-center  shadowed-image align-items-center bg-dark text-white"
                style={{ width: "210px" }}
              >
                <div>
                  <h5>Sunset Smash</h5>
                </div>
                <div>
                  <p>
                    Smash burgers and fries brought to LA by two life-long
                    friends
                  </p>
                </div>
                <div>Rating: 4.8/5 stars</div>

                <Link to="/components/Trucks" className="mt-2">
                  <button type="button" className="btn btn-danger">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
