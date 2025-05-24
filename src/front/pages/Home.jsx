import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="eventsandtrucks">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <Link to="/components/Events">
                  <button type="button" className="btn btn-danger">
                    Register your truck
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div ClassName="card">
              <img src="..." ClassName="card-img-top" alt="..." />
              <div ClassName="card-body">
                <Link to="/components/Trucks">
                  <button type="button" className="btn btn-danger">
                    Find a truck
                  </button>
                </Link>
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
        <div
          className="carousel-inner py-5"
          style={{ backgroundColor: "grey" }}
        >
          <div className="carousel-item active align-items-center justify-content-center ms-5">
            <div
              className="d-flex justify-content-center"
              style={{ width: "75rem" }}
            >
              <img
                className="d-flex justify-content-end w-25 h-25 shadowed-image"
                src="https://s3-media0.fl.yelpcdn.com/bphoto/-4INPXjgHpcNYkZuLNRBJg/l.jpg"
                alt="..."
              />
              <div
                className="d-flex flex-column text-center justify-content-center  shadowed-image align-items-center bg-dark text-white"
                style={{ width: "15%" }}
              >
                <h5>Los brothers</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item  align-items-center justify-content-center">
            <div
              className="d-flex justify-content-center"
              style={{ width: "75rem" }}
            >
              <img
                className="d-flex justify-content-end w-25 h-25 shadowed-image"
                src="https://s3-media0.fl.yelpcdn.com/bphoto/UiZLAR_m_B8lLQlC4pak3A/348s.jpg"
                alt="..."
              />
              <div
                className="d-flex flex-column text-center justify-content-center  shadowed-image align-items-center bg-dark text-white"
                style={{ width: "15%" }}
              >
                <h5>Bun & Blanket</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item align-items-center justify-content-center">
            <div
              className="d-flex justify-content-center"
              style={{ width: "75rem" }}
            >
              <img
                className="d-flex justify-content-end w-25 h-25 shadowed-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sKspFDNViqDBCtANWOx4Jmo-YkCXQCMkVw&s"
                alt="..."
              />
              <div
                className="d-flex flex-column text-center justify-content-center  shadowed-image align-items-center bg-dark text-white"
                style={{ width: "15%" }}
              >
                <h5>Sunset Smash</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
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
