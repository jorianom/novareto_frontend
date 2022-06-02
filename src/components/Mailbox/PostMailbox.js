import React from "react";

const PostMailbox = () => {
    const msg =
        "Gracias por su franqueza al   manifestarnos sus quejas o sugerencias, seguiremos esforzándonos por mejorar cada día nuestros procesos internos";
    return (
        <>
            <div className="container-fluid mt-5 post ">
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Nombre Completo :
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Nombres y apellidos"
                    />
                </div>
                <div class="mb-3">
                    <label for="celular" class="form-label">
                        Telefono o Celular :
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="celular"
                        placeholder="# Telefono o Celular"
                    />
                </div>
                <div>
                    <label class="form-label">Tipo de publicación :</label>
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Quejas
                        </label>
                    </div>
                    <div class="form-check mb-3">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Sugerencia
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="comments" class="form-label">
                        Por favor, escriba sus sugerencias y comentarios :
                    </label>
                    <textarea class="form-control" id="comments" rows="5"></textarea>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">
                        Enviar
                    </button>
                </div>
            </div>
        </>
    );
};

export default PostMailbox;
