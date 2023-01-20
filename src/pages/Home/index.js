import { useEffect, useState } from 'react'
import api from '../../services/api'
 // URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=cd5402cb28c96319d1c616da9c152817&language=pt-BR


function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key:"cd5402cb28c96319d1c616da9c152817",
                    language: "pt-BR",
                    page: 1,
                }
            })

            // console.log(response.data.results.slice(0,10))
            setFilmes(response.data.results.slice(0,10))
        }

        loadFilmes();
    }, [])
    
}

export default Home;