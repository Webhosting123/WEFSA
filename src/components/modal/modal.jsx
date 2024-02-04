import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.scss";

function Form({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    online: false,
    offline: false,
    group: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="contact-form-modal"
      >
        <Modal.Header closeButton className="headers">
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="drop-image">
          <div className="form-modal">
            <div className="title-main"></div>
            <form onSubmit={handleSubmit} className="form-form">
              <div className="name">
                <div className="title">Name</div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="emil">
                <div className="title">Email</div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="number">
                <div className="title">Phone Number</div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="training">
                <div className="title">Select Training Type</div>
                <div className="types">
                  <div className="type-ome">
                    <input
                      type="checkbox"
                      id="online"
                      name="online"
                      checked={formData.online}
                      onChange={handleChange}
                    />
                    <label htmlFor="online">Online Training</label>
                  </div>

                  <div className="type-two">
                    <input
                      type="checkbox"
                      id="offline"
                      name="offline"
                      checked={formData.offline}
                      onChange={handleChange}
                    />
                    <label htmlFor="offline">Offline Training</label>
                  </div>

                  <div className="type-three">
                    <input
                      type="checkbox"
                      id="group"
                      name="group"
                      checked={formData.group}
                      onChange={handleChange}
                    />
                    <label htmlFor="group">Group Training</label>
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="title">Message</div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  placeholder="If any thing that you want to tells"
                ></textarea>
              </div>
              <div className="form-btn-sbt">
                {" "}
                <button type="submit" className="sbt-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer className="footers">
          <Button
            variant="secondary"
            className="btn-closed"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="primary" className="btn-save" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Form;
