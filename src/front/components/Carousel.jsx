export default function Carousel({ merch, order }) {
  return (
    <div
      id={"carouselExampleCaptions" + order}
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ background: "linear-gradient(115deg, #000000, #2c2e29, #000000)", height: "80vh" }}
    >
      <div className="carousel-indicators">
        {merch.map((item, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {merch.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              className="d-flex flex-column align-items-center justify-content-center "
              style={{ height: "100%" }}
            >
              <img
                src={item.img}
                className="d-block w-25 h-25 mx-auto shadowed-image"
                alt={`Slide ${index + 1}`}
                style={{ marginTop: "60px" }}
              />
              <div className="mt-3">
                <a href={item.link} className="btn btn-danger mt-3 ml-50">
                  {" "}
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#carouselExampleCaptions" + order}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#carouselExampleCaptions" + order}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
