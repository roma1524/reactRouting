import {adidasArr, AdidasItem} from "./ADIDAS";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

export const Model = () => {

    const params = useParams()

    const createModel = (arg: string) => {
        const currObj = adidasArr.find(el => el.id === arg)
        if (currObj) {
            return (
                <div style={{display: "flex", alignItems: 'center', flexDirection: 'column'}}>
                    <h2>{currObj.model}</h2>
                    <p>{currObj.collection}</p>
                    <span>{currObj.price}</span>
                    <img src={currObj.picture} alt={currObj.model}></img>
                </div>
            )
        } else {
           return <Error404/>
        }
    }


    return (
        <>
            {params.id && createModel(params.id) }
        </>
    )
}