import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.scss";

function Form() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    // Add your form submission logic here using formData
    console.log(formData);
  };

  return (
    <>
      <div className="button-main" onClick={handleShow}>
        For Enquiries
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="contact-form-modal"
      >
        <Modal.Body className="drop-image">
          <div className="form-modal">
            <div className="title-main">Contact Form</div>
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
      </Modal>
    </>
  );
}

export default Form;
