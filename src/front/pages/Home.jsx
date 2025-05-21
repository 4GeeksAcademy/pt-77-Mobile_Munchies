import React, { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
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
                    Events
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
                  <button type="button" class="btn btn-danger">
                    Trucks
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  
};

