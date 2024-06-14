import { useSelector } from "react-redux"
import Livre from "./Livre"
import AddLivre from "./AddLivre"

export default function LivresList(){
    const livres = useSelector((state)=>state.livres)
    return (
        <div>
            <h2>Livres</h2>
            <AddLivre />
            <br />
            <br />
            <br />
            {
                livres.map((livre,index)=>(
                    <Livre key={index} title={livre.title} price={livre.price} id={livre.id} />
                ))
            }
        </div>  
    )
}