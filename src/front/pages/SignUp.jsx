import { Link } from "react-router-dom";
import picture3 from "../assets/img/blo.jpg";
import picture4 from "../assets/img/eat3.jpg";

export const SignUp = () => {
  return (
    <div 
      className="text-center mt-5" 
      style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
    >
      <div className="card" style={{ width: "18rem", boxShadow: "0 32px 64px rgba(126, 3, 3, 0.831)", borderColor:"red"}}>
        <img src={picture3} className="card-img-top" alt="..." />
        <div className="card-body"
        style={{ backgroundColor: "black", boxShadow: "0 32px 64px rgba(126, 3, 3, 0.831)", }}>
          <Link className="btn btn-danger Trucker" to={"/truckersignup"}>
            Trucker
          </Link>
        </div>
      </div>
      <div className="card" style={{ width: "18rem",boxShadow: "0 32px 64px rgba(126, 3, 3, 0.831)", borderColor:"red" }}>
        <img src={picture4} className="card-img-top" alt="..." />
        <div className="card-body"
        style={{ backgroundColor: "black", boxShadow: "0 32px 64px rgba(126, 3, 3, 0.831)"}}>
          <Link className="btn btn-danger Customer" to={"/customersignup"}>
            Customer
          </Link>
        </div>
      </div>
    </div>
  );
};
