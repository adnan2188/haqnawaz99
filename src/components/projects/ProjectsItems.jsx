/* eslint-disable react/prop-types */
import { useState } from "react";

const PortfolioItems = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="project_card" key={item.id}>
      <img src={item.image} alt="" className="project_img" />
      <h3 className="project_title">
        {item.title.length > 60 ? (
          <>{item.title.slice(0, 60)}&nbsp;...</>
        ) : (
          item.title
        )}
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button onClick={toggleModal}>Read more</button>
        <button>
          <a style={{ color: "black" }} target="blank" href={item.link}>
            Demo
          </a>
        </button>
      </div>
      {showModal && (
        <div className="modal_div-body">
          <div className="modal-box">
            <span
              style={{
                position: "absolute",
                top: "1px",
                right: "10px",
                cursor: "pointer",
                fontSize: "30px",
              }}
              onClick={toggleModal}
            >
              <span style={{ color: "black" }}>&times;</span>
            </span>

            <div className="modal_div-main">
              <div className="modal_div-img">
                {item.category === "web" ? (
                  <img src={item.image} alt="" />
                ) : (
                  <img src={item.image2} alt="" />
                )}
              </div>
              <div className="modal_div-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItems;
