import React from "react";
import { useNavigate } from "react-router-dom";

function ListaEventos (){

    const navigate = useNavigate;
    //Recupera os eventos do LocalStorage.
    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    const handleDetalhes = (id) => {
        navigate ('/detalhes/$ {id}');
    };

    const handleAlteracao = (id) => {
        navigate ('/alteracao/$ {id}');
    };

    const handleExclusao = (id) => {
            //Filtra o evento para excluir o evento com o ID procurado
            const eventoAtualizado = eventos.filter((event, index) => index !== id);

            //Atualiza o LocalStorage
            localStorage.setItem('eventos', JSON.stringify(eventoAtualizado));

            alert ('Evento excluido com sucesso!')
            //Atualiza a página
            window.location.reload();
    }

    

    return (

        <div>
            <h1>Lista Eventos</h1>
            <ul>
                {eventos.map((evento, index) => (
                    <li key={index}>
                        <strong>{evento.titulo}</strong>
                        <p>{evento.descricao}</p>
                        <p>{evento.data}</p>
                        <p>{evento.local}</p>
                        <button onClick={() => handleDetalhes(index)}>Detalhes</button>
                        <button onClick={() => handleAlteracao(index)}>Alteração</button>
                        <button onClick={() => handleExclusao(index)}>Exclusão</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaEventos;