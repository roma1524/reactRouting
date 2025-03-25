import {adidasArr, AdidasItem} from "./ADIDAS";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";
import {pumaArr, PumaItem} from './PUMA';

type CommonType = {
    [key: string]: (PumaItem[] | AdidasItem[])
}

const commonObj: CommonType = {
    puma: pumaArr,
    adidas: adidasArr,
}

export const Model = () => {

    const {model, id} = useParams()

    const createModel = (arg: string) => {
        const currObj = model ? commonObj[model].find(el => el.id === arg) : null;
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
            {id && createModel(id) }
        </>
    )
}