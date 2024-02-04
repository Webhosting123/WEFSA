import React, { useState } from "react";
import "./readmore.scss";
import Modal from "react-bootstrap/Modal";
import Form from "../modal/modal";

function Readmore({ handleClose, show, step }) {
  const [open, setOpen] = useState(false);
  const closemodal = () => {
    setOpen(false);
  };
  const openmodal = () => {
    setOpen(true);
  };
  return (
    <div className="modals-about">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modals-about"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {step === 0 && "Cow Fodder Production"}
            {step === 1 && "Organic Farming"}
            {step === 2 && "Farm Training"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="about-modals">
            {step === 0 && (
              <>
                <div className="common fodder">
                  <div className="topics">
                    <h5>Selection of Organic Ingredients</h5>
                    <p>
                      We begin by carefully selecting organic ingredients such
                      as nutrient-rich grains, legumes, and green forages.
                      Driven by the principles of organic farming, the selection
                      process ensures that the fodder is free from synthetic
                      chemicals and genetically modified organisms.
                    </p>
                  </div>
                  <div className="topics">
                    <h5> Hygienic Processing</h5>
                    <p>
                      Our manufacturing facility adheres to strict hygiene
                      standards. The sprouted grains undergo a controlled drying
                      process to preserve nutritional content while eliminating
                      any potential contaminants. This ensures that the final
                      product is safe and beneficial for cattle.
                    </p>
                  </div>
                  <div className="topics">
                    <h5>Organic Composting</h5>
                    <p>
                      Organic composting plays a crucial role in enriching the
                      fodder with natural fertilizers. The composting process
                      enhances soil microbes, promoting a healthy microbial
                      environment when the fodder is eventually used for
                      cultivation.
                    </p>
                  </div>
                  <button className="btn-modals" onClick={openmodal}>
                    Contact
                  </button>
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <div className="common fodder">
                  <div className="topics">
                    <h5> Understanding Organic Farming</h5>
                    <p>
                      Organic farming involves avoiding synthetic pesticides,
                      fertilizers, and genetically modified organisms. Dr.
                      Manivasan will delve into the core principles, emphasizing
                      the use of natural processes, crop rotations, and
                      composting.
                    </p>
                  </div>
                  <div className="topics">
                    <h5>Natural Pest and Disease Control</h5>
                    <p>
                      The session will explore natural methods of pest and
                      disease control, including beneficial insects, companion
                      planting, and the use of herbal extracts. Farmers will
                      understand how to manage pests without resorting to
                      harmful chemicals.
                    </p>
                  </div>
                  <div className="topics">
                    <h5>Organic Fertilizers</h5>
                    <p>
                      Dr. Manivasan will guide farmers on the selection and
                      application of organic fertilizers such as compost,
                      manure, and biofertilizers. Understanding nutrient cycles
                      and their role in plant nutrition will be a key focus.
                    </p>
                  </div>
                  <button className="btn-modals" onClick={openmodal}>
                    Contact
                  </button>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="common fodder">
                  <div className="topics">
                    <h5>Interactive Doubt Resolution</h5>
                    <p>
                      Farmers can actively participate by posing questions
                      related to their specific challenges in adopting organic
                      farming. Dr. Manivasan will address queries on pest
                      management, soil health, crop selection, and more.
                    </p>
                  </div>
                  <div className="topics">
                    <h5>Collaborative Learning</h5>
                    <p>
                      The Zoom session will encourage farmers to share their
                      experiences and tips with one another. This collaborative
                      learning environment fosters a sense of community and
                      mutual support among organic farming enthusiasts.
                    </p>
                  </div>
                  <div className="topics">
                    <h5>Future Planning</h5>
                    <p>
                      Dr. Manivasan will guide farmers in creating a roadmap for
                      transitioning to organic farming. Discussions may include
                      long-term planning, setting realistic goals, and adapting
                      to seasonal variations.
                    </p>
                  </div>
                  <button className="btn-modals" onClick={openmodal}>
                    Contact
                  </button>
                </div>
              </>
            )}
          </div>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
      <Form show={open} handleClose={closemodal} />
    </div>
  );
}

export default Readmore;
