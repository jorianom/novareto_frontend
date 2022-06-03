import React from "react";
import { useForm } from "react-hook-form";
import clienteAxios from "../../config/clienteAxios";

const PostMailbox = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const [error, setError] = React.useState(true);
    
    const onSubmit = async (data) => {
        console.log(data);
        try {
            await clienteAxios.post("api/mailbox/add", data);
            setError(false);
            clean();
        } catch (err) {
            console.log(err);
        }
    };
    const clean = () => {
        document.getElementById("form1").reset();
        setTimeout(() => {
            setError(true);
        }, 3000);
    };

    const msg =
        "Gracias por su franqueza al manifestarnos sus quejas o sugerencias, seguiremos esforzándonos por mejorar cada día nuestros procesos internos";
    return (
        <>
            <div className="container-fluid mt-5 post ">
                <h2 className="my-5">Publicar quejas y sugerencias</h2>
                {!error ? <div className="alert alert-success">{msg}</div> : null}
                <form id="form1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Nombre Completo :
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombres y apellidos"
                            {...register("name", { required: true })}
                        />
                        {errors.name && (
                            <span className="valid">Este campo es obligatorio</span>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">
                            Telefono o Celular :
                        </label>
                        <input
                            type="text"
                            {...register("celular")}
                            className="form-control"
                            id="celular"
                            name="celular"
                            placeholder="# Telefono o Celular"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Correo Electronico :
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address",
                                },
                            })}
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                        />
                        {errors.email && (
                            <span className="valid">Este campo es obligatorio</span>
                        )}
                    </div>
                    <div>
                        <label className="form-label">Tipo de publicación :</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                {...register("type", { required: true })}
                                name="type"
                                value="Queja"
                            />
                            <label className="form-check-label" htmlFor="type">
                                Queja
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                {...register("type", { required: true })}
                                name="type"
                                value="Sugerencia"
                            />
                            <label className="form-check-label" htmlFor="type">
                                Sugerencia
                            </label>
                        </div>
                        {errors.type && (
                            <span className="valid">Este campo es obligatorio</span>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor=" " className="form-label">
                            Por favor, escriba sus sugerencias y comentarios :
                        </label>
                        <textarea
                            className="form-control"
                            id="comments"
                            {...register("comments", { required: true })}
                            name="comments"
                            rows="5"
                        ></textarea>
                        {errors.comments && (
                            <span className="valid">Este campo es obligatorio</span>
                        )}
                    </div>
                    <div className="col-auto">
                        <input
                            type="submit"
                            className="btn btn-primary mb-3"
                            value="Enviar"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default PostMailbox;
