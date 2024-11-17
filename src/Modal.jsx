import React from "react";

const Modal = ({ atividade }) => {
  return (
    <div>
      <div
        className="modal fade"
        id={atividade.slug + "-modal"}
        tabindex="-1"
        aria-labelledby={atividade.slug + "-modal-label"}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id={atividade.slug + "-modal-label"}
              >
                {atividade.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{atividade.description}</p>
              <p>{atividade.date}</p>
              {atividade.categories.map((category, i) => (
                <span
                  key={category.name + atividade.title + i}
                  className={`badge text-bg-${category.style}`}
                  style={{ marginRight: "5px" }}
                >
                  {category.name}
                </span>
              ))}
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              {/* <a type="button" className="btn btn-success">Abrir Classroom</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
