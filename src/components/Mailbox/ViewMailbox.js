import React from "react";

const ViewMailbox = () => {
    const data = [
        {
            name: "Juan Perez",
            celular: "123456789",
            type: "Quejas",
            date: "2020-05-05",
        },
        {
            name: "Juan Perez",
            celular: "123456789",
            type: "Quejas",
            date: "2020-05-05",
        },
    ];
    return (
        <>
            <div className="container mt-5">
                <h2 className="my-5">Visualizador de quejas y sugerencias</h2>
                <div>
                    <select class="form-select w-50 mb-3 view_select">
                        <option selected value="1">
                            Quejas
                        </option>
                        <option value="2">Sugerencias</option>
                    </select>

                    <button type="button" class="btn btn-info ms-2 view_button">
                        Filtrar
                    </button>
                </div>
                <div class="list-group">
                    {data.map((item) => (
                        <div class="list-group-item " aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{item.name}</h5>
                                <small>{item.date}</small>
                            </div>
                            <p class="mb-1">{item.type}</p>
                            <small>
                                <a
                                    type="button"
                                    class=""
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver más
                                </a>
                                <div
                                    class="modal fade"
                                    id="exampleModal"
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5
                                                    class="modal-title"
                                                    id="exampleModalLabel"
                                                >
                                                    Modal title
                                                </h5>
                                                <button
                                                    type="button"
                                                    class="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div class="modal-body">...</div>
                                            <div class="modal-footer">
                                                <button
                                                    type="button"
                                                    class="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ViewMailbox;
