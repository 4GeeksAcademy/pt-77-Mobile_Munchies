import { Link } from "react-router-dom";

export const SignUp = () => {

    return (
        <div className="text-center mt-5">
            <h1 className="display-4">Pick One Below!</h1>
            <div className="ml-auto">
                <Link className="btn btn-primary Customer" to={"/customersignup"}>Customer</Link>
                <Link className="btn btn-primary Trucker" to={"/truckersignup"}>Trucker</Link>
            </div>
        </div>

    );

};