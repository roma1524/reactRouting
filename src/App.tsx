import React from 'react';
import {Navigate, NavLink, Route, Routes, useParams} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";


// @ts-ignore
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {ADIDAS} from "./components/pages/ADIDAS";
import {PUMA} from "./components/pages/PUMA";
import {ABIBAS} from "./components/pages/ABIBAS";
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";


export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/adidas/model',
    PAGE5: '/price',

} as const;

function App() {

    // const {id} = useParams();

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>ABIBAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE5}>For OPT</NavLink></S.NavWrapper>
                    <a href="page3">page3 HTML</a>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/adidas'}/>}/>

                        <Route path={PATH.PAGE5} element={<Prices/>}/>
                        <Route path={PATH.PAGE1} element={<ADIDAS/>}/>
                        <Route path={PATH.PAGE2} element={<PUMA/>}/>
                        <Route path={PATH.PAGE3} element={<ABIBAS/>}/>
                        <Route path='/adidas/:id' element={<Model/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

