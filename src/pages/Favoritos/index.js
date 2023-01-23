import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    // A função abaixo vai retorna somente os filmes em q o ID for diferente do ID clicado
    function excluirFilme(id) { 
      let filtroFilmes = filmes.filter( (item) => {
        return (item.id !== id)
      })

      setFilmes(filtroFilmes);
      // retira o filme também do localStorage
      localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
      toast.success("Filme removido com sucesso")
    }

    
    return (
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

            <ul>
                {filmes.map( (item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver drtalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;