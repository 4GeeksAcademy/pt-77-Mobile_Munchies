import { Link } from "react-router-dom";
import picture3 from "../assets/img/blo.jpg";
import picture4 from "../assets/img/eat3.jpg";

export const SignUp = () => {
  return (
    <div 
      className="text-center mt-5" 
      style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <img src={picture3} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link className="btn btn-danger Trucker" to={"/truckersignup"}>
            Trucker
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={picture4} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link className="btn btn-danger Customer" to={"/customersignup"}>
            Customer
          </Link>
        </div>
      </div>
    </div>
  );
};
