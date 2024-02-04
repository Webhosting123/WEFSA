import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./join.scss";

function Join({ show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="head-modals">
          <Modal.Title>Free Training</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="overall_mail">
            <div className="mail_to">
              <div className="go-to-mail">
                <h5>Get the meet Link via mail</h5>
                <p>Enter the email</p>
                <label for="email">
                  <input
                    type="email"
                    id="email"
                    className="email"
                    placeholder="Enter your email"
                  />
                </label>
              </div>
              <div className="or-words">
                <hr />
                <p className="word">or</p>
              </div>
              <div className="links">
                <a href="https://google.com">Meet Link</a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="foot-modal">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Join;
