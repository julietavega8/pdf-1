import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard/index";

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter"

function Game(){
    const [ loading, setLoading ] = useState(true);
    const [ questions, setQuestions ] = useState([ ]);

    console.log(questions)

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return(
        <div className="container">
            <section className="section">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="is-activate">
                            <Link to="/game">Juego</Link>
                        </li>
                    </ul>

                </nav>
                <form>
                    {
                        questions.map((question) => {
                            return <QuestionCard preguntaActual={pregunta}/>
                        })
                    }
                </form>
                <div> {loading ? "Cargando..." : "Preguntas listas!"}</div>
                {
                    loading && (
                        <div>cargando...</div>
                    )
                }
                {
                    !loading && (
                        <span>Preguntas cargadas!</span>
                    )
                }
                <h1>El juego</h1>
            </section>
        </div>

    )

}

export default Game;