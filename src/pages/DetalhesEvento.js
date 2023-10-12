import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react";
import './DetalhesEvento.css';


function DetalhesEvento() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [evento, setEvento] = useState (null);

    useEffect (() => {
        //Recupera o evento pelo ID atraves do localStorage 
        const eventosCadastrados = JSON.parse (localStorage.getItem('eventos')) || [];
        const eventosEncontrados = eventosCadastrados.find((evento, index) => index === Number (id));
        if (eventosEncontrados) {
            setEvento (eventosEncontrados);
        }
        else{
            alert ('Evento não encontrado.')
            navigate('/lista')
        }
    }, [id, navigate]);

    return(
        <div>
            <h1>Detalhes do evento</h1>
            {evento ? (
                 <div> 
                    <h2>{evento.titulo}</h2>
                    <p>{evento.descricao}</p>
                    <p>Data: {evento.data}</p>
                    <p>Local: {evento.local}</p>
                 </div>
            ):null}
        </div>
    )
}
export default DetalhesEvento;