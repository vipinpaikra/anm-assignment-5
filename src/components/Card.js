import React from "react";
import sugarcane from "./image/Sugarcane 2.png";
import "font-awesome/css/font-awesome.min.css";
{
    /* <div>
    <img
        src={sugarcane}
        alt="img"
        style={{ border: "1px solid black" }}
    />
    <div>
        <h3>Anukpur MP</h3>
        <p>this is our parragraph</p>
    </div>
    <div>
        <p>Rate/Quintal</p>
        <section
            className="text-center mb-5"
            style={{ padding: "20px" }}
        >
            <a href="" className="text-white me-4">
                <i
                    className="fab fa-instagram"
                    style={{
                        fontSize: "27px",
                        padding: "5px",
                        border: "2px solid white",
                    }}
                ></i>
            </a>
        </section>
    </div>
</div> */
}
const Card = () => {
    return (
        <div
            className="card mb-3 "
            style={{
                maxWidth: "98%",
                maxHeight: "200px",
                backgroundColor: "lightblue",
                margin: "auto",
            }}
        >
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img
                        src={sugarcane}
                        className="card-img"
                        alt="..."
                        style={{
                            width: "200px",
                            height: "200px",
                            margin: "auto",
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            <b>Sugarcane</b>
                        </h5>
                        <p className="card-text">
                            <b>
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                Pandri,Raipur (Chhatisgarh)
                            </b>
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <p className="card-text">
                            <small className="text-muted">Rate/Quintal</small>
                        </p>

                        <p className="card-text">
                            <i className="fas fa-arrow-circle-down text-danger"></i>
                            Min: 1800
                            <br />
                            <i className="fas fa-arrow-circle-down text-danger"></i>
                            Today:1800
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <i class="fas fa-arrow-circle-up text-success"></i> Max:
                        1950
                        <br />
                        <button
                            className="btn btn-info "
                            style={{ borderRadius: "20px" }}
                        >
                            <i
                                className="fas fa-angle-up "
                                style={{ padding: "2px" }}
                            ></i>
                            price trend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
