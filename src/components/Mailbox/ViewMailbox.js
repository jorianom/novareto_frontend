import React, { useEffect } from "react";
import Moment from "moment";
import "moment/locale/es";
import clienteAxios from "../../config/clienteAxios";

const ViewMailbox = () => {
    const [data, setData] = React.useState([]);
    const [mailbox, setMailbox] = React.useState({});
    const [filter, setFilter] = React.useState("");
    const [error, setError] = React.useState({
        error: false,
        msg: "",
    });
    Moment.locale("es");

    const getData = async () => {
        try {
            const rta = await clienteAxios.get("api/mailbox");
            if (filter === "") {
                setData(rta.data.mailboxes);
            } else {
                setData(rta.data.mailboxes.filter((item) => item.type === filter));
            }
        } catch (err) {
            console.log(err);
            setError({
                error: true,
                msg: "Error al obtener los datos",
            });
            setTimeout(() => {
                setError({
                    error: false,
                    msg: "",
                });
            }, 5000);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="container mt-5">
                <h2 className="my-5">Visualizador de quejas y sugerencias</h2>
                {error.error ? (
                    <div className="alert alert-success">{error.msg}</div>
                ) : null}
                <div>
                    <select
                        onChange={(e) => setFilter(e.target.value)}
                        className="form-select w-50 mb-3 view_select"
                    >
                        <option value="" defaultValue>
                            Quejas y Sugerencias
                        </option>
                        <option value="Queja">Quejas</option>
                        <option value="Sugerencia">Sugerencias</option>
                    </select>

                    <button
                        onClick={() => getData()}
                        type="submit"
                        className="btn btn-success ms-2 view_button"
                    >
                        Filtrar
                    </button>
                </div>
                <div className="list-group">
                    {Object.keys(data).length !== 0
                        ? data.map((item) => (
                              <div
                                  key={item._id}
                                  className="list-group-item "
                                  aria-current="true"
                              >
                                  <div className="d-flex w-100 justify-content-between">
                                      <h5 className="mb-1">{item.name}</h5>
                                      <small>{Moment(item.date).format("ll")}</small>
                                  </div>
                                  <p className="mb-1">{item.type}</p>
                                  <small>
                                      <a
                                          onClick={() => {
                                              setMailbox(item);
                                          }}
                                          type="button"
                                          className=""
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                          href="#"
                                      >
                                          Ver más
                                      </a>
                                      <div
                                          className="modal fade"
                                          id="exampleModal"
                                          tabIndex="-1"
                                          aria-labelledby="exampleModalLabel"
                                          aria-hidden="true"
                                      >
                                          <div className="modal-dialog modal-dialog-centered">
                                              <div className="modal-content">
                                                  <div className="modal-header">
                                                      <h6
                                                          className="modal-title"
                                                          id="exampleModalLabel"
                                                      >
                                                          {mailbox.type} de {mailbox.name}
                                                          <br />
                                                          <small>
                                                              Celular: {item.celular}
                                                          </small>
                                                          <br />
                                                          <small>
                                                              Email: {item.email}
                                                          </small>
                                                      </h6>
                                                      <button
                                                          type="button"
                                                          className="btn-close"
                                                          data-bs-dismiss="modal"
                                                          aria-label="Close"
                                                      ></button>
                                                  </div>
                                                  <div className="modal-body">
                                                      {mailbox.comments}
                                                  </div>
                                                  <div className="modal-footer">
                                                      <small>
                                                          {Moment(item.date).format("ll")}
                                                      </small>
                                                      <button
                                                          type="button"
                                                          className="btn btn-secondary"
                                                          data-bs-dismiss="modal"
                                                      >
                                                          Cerrar
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </small>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </>
    );
};

export default ViewMailbox;
