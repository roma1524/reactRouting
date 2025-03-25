import React from 'react';
// @ts-ignore
import punaModel1 from '../../assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg';
// @ts-ignore
import punaModel2 from '../../assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg';
// @ts-ignore
import punaModel3 from '../../assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg';
import {Link} from 'react-router-dom';

export type PumaItem = {
    model: string;
    collection: string;
    price: string;
    picture: string;
    id: string;
}
export const pumaArr: PumaItem[] = [
    {
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: punaModel1,
        id: "1"
    },
    {
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: punaModel2,
        id: "2"
    },
    {
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: punaModel3,
        id: "3"
    }
]

export const PUMA = () => {
    return (
        <div>
            <h2>PUMA</h2>
            <div style={{display: 'flex', justifyContent: 'center', gap: '30px'}}>
                {pumaArr.map(el => {
                    return <Link key={el.id} to={`/puma/${el.id}`}><img style={{width: '200px'}} src={el.picture}
                                                                          alt={el.model}/></Link>
                })}
            </div>

            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    );
};

