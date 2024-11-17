import React from "react";

const Card = ({ atividade }) => {
  
  return (
    <>
      <div className="col-md-6 col-sm-12">
        <div className="card text-center my-3">
          <div className="card-header">
            {atividade.categories.map((category, i) => (
              <span
                key={category.name+atividade.title+i}
                className={`badge text-bg-${category.style}`}
                style={{marginRight: '5px'}}
              >
                {category.name}
              </span>
            ))}
          </div>
          <div className="card-body px-5">
            <h5 className="card-title">{atividade.title}</h5>
            <p className="card-text">{atividade.description}</p>
            <p className="card-text">{atividade.date}</p>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target={"#" + atividade.slug + "-modal"}>
              Ver completo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
