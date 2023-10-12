import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AlteracaoEvento.css'

function AlteracaoEvento (){
    const navigate = useNavigate();
    const {id} = useParams();
    const [evento, setEvento] = useState ({
        titulo: '', 
        descricao: '', 
        data: '', 
        local: ''
    });

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

    const handleInputChange = (event) => {

        const {name, value} = event.target;
        setEvento ({...evento, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //Validação dos campos para não mandar dados invalidos.
        if (!evento.titulo || !evento.data || !evento.descricao || !evento.local){
            alert ('Preencha todos os campos');
            return;
        }

        //Recupera os eventos já cadastrados no localStorage
        const eventosCadastrados = JSON.parse (localStorage.getItem('eventos')) || [];

        //Encontrar o indice do evento no Array
        const eventoIndex = eventosCadastrados.findIndex((evento,index) => index === Number(id));

        //Verifica se o evento foi encontrado
        if (eventoIndex !== -1) {

            //Atualiza o evento no Array
            eventosCadastrados[eventoIndex] = evento;

            //Atualiza o evento no Array de eventos atualizado
            localStorage.setItem('eventos',JSON.stringify(eventosCadastrados));

            alert ('Evento alterado com sucesso');
            navigate('/lista')
        }
        else{
            alert ('Evento não encontrado');
            navigate('/lista')
        }
    };

    return(
        <div>
        <h1>Alteração de evento</h1>
        <form onSubmit={handleSubmit}>
            <label>Título</label>
            <input type="text" name="titulo" value= {evento.titulo} onChange={handleInputChange} />

            <label>Descrição</label>
            <textarea name="descricao"  value= {evento.descricao} onChange={handleInputChange} />

            <label>Data:</label>
            <input type="date" name="data" value= {evento.data} onChange={handleInputChange} />

            <label>Local:</label>
            <input type="text" name="local" value= {evento.local} onChange={handleInputChange} />

            <button type="submit">Salvar Alterações</button>
        </form>
    </div>
    );
}

export default AlteracaoEvento;