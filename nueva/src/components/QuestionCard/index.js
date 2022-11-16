function questionsCard({preguntaActual}) {
    console.log(preguntaActual)
    return (
        <div className="box">
            <span className="tag is-rounded is-info">{preguntaActual.id}</span>
            <span><strong>{preguntaActual.question}</strong></span>
            <br/>
            {
                preguntaActual.answer.map((opcion) => (
                    <div key={opcion.id}>
                        <input type="radio" id={'${opcion.id}'} name={opcion.id} value={opcion.answer}></input>
                        <label htmlFro={'${opcion.id}'}> {opcion.answer}</label>
                    </div>
                ))
            }
        <>
        <span>{preguntaActual.question}</span>
        <br/>
        {
            preguntaActual.answers.map((opcion) => (
                <>
                <input type="radio" value={opcion.answer}></input>
                <label>{opcion.answer}</label>
                <span>{opcion.answer}</span>
                <br/>
                </>
                
            ))
        }
        <br/>
        </>
        </div>
        
        
    )
}

export default questionsCard; 
