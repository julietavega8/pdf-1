import Button from "../../components/index";
import background from "../../assets/background.webp"
import background2 from "../../assets/background2.jpeg"
import { useState } from "react";

function Home(){
    const navigate = useNavigate();

    const onClickButton=(url) => {
        navigate(url);
    }
    return(
        <section className="hero is-medium is-fulleheight" style={{backgroundImage:url('${background}'), backgroundSize:"cover"}} >;
            <div className="hero-body">
                <div className="conteiner has-text-centered">
                    <Button onClick={()=>onClickButton("/game")} text="haz click para iniciar el juego"/>
                    <br/>
                    <button onClick={()=>setChangebackground(background2)}></button>
                </div>
                
            </div>
            
        </section>
    

    )

}

export default Home;
