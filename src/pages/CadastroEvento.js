import React, { useState } from "react";
import './CadastroEvento.css';

function CadastroEvento(){
    const [evento, setEvento] = useState({
        titulo: '', 
        descricao: '', 
        data: '', 
        local: ''
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setEvento({...evento, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        /*Validação dos campos para envio */

        if (!evento.titulo || !evento.data || !evento.descricao || !evento.local){
            alert ('Preencha todos os campos');
            return
        }

        /*Adiciona novo evento */
        const eventoCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];

        //Atualiza o localStorage
        eventoCadastrados.push(evento);

        //Limpa os campos após o cadastro
        localStorage.setItem('eventos', JSON.stringify(eventoCadastrados));

        setEvento ({
            titulo: '', 
            descricao: '', 
            data: '', 
            local: ''
        })
        
        alert ('Evento cadastrado com sucesso.');
    };

    /*Recupera os dados já cadastrados */
    


    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>

                <label>Título</label>
                <input type="text" name="titulo" value= {evento.titulo} onChange={handleInputChange} />

                <label>Descrição</label>
                <textarea name="descricao"  value= {evento.descricao} onChange={handleInputChange} />

                <label>Data:</label>
                <input type="date" name="data" value= {evento.data} onChange={handleInputChange} />

                <label>Local:</label>
                <input type="text" name="local" value= {evento.local} onChange={handleInputChange} />

                <button type="submit">Cadastrar</button>

            </form>
        </div>
    )
}

export default CadastroEvento;