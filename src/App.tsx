import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";


// @ts-ignore
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {ADIDAS} from "./components/pages/PageOne";
import {PUMA} from "./components/pages/PageTwo";
import {ABIBAS} from "./components/pages/PageThree";


const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
} as const;

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>ABIBAS</NavLink></S.NavWrapper>
                    <a href="page3">page3 HTML</a>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>

                        <Route path={PATH.PAGE1} element={<ADIDAS/>}/>
                        <Route path={PATH.PAGE2} element={<PUMA/>}/>
                        <Route path={PATH.PAGE3} element={<ABIBAS/>}/>

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

