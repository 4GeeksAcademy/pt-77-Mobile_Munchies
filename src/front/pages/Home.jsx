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
            <div className="card ">
              <img src="https://api.deepai.org/job-view-file/0688ba73-da14-48d3-aa49-e801b81b2cb3/outputs/output.jpg" className="card-img-top" alt="..." />
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
            <div className="card">
              <img src="https://api.deepai.org/job-view-file/d80705f3-8fdf-4141-8d9c-cad4dbfb142d/outputs/output.jpg" ClassName="card-img-top" alt="..." />
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
                 100% homemade Guatemalan and Mexican food
                 <div>Rating:5/5 stars</div>
                 <div></div>
                <Link to="/components/Trucks">
                  <button type="button" className="btn btn-danger">
                    Learn more
                  </button>
                </Link>
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
                   Los Angeles' most popular flavors into fusionend burgers
                   <div>Rating: 4.9/5 Stars</div>
                   <Link to="/components/Trucks">
                  <button type="button" className="btn btn-danger">
                    Learn more
                  </button>
                </Link>
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
                  Smash burgers and fries brought to LA by two life-long friends 
                  <div>Rating: 4.8/5 stars</div>
                  <Link to="/components/Trucks">
                  <button type="button" className="btn btn-danger">
                   Learn more
                  </button>
                </Link>
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
