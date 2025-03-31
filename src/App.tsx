import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';


// @ts-ignore
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {PATH} from "./routes/routes";


function App() {

    // const {id} = useParams();

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>ADIDAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>PUMA</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>ABIBAS</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.Prices}>For OPT</NavLink></S.NavWrapper>

                </div>
                <div className={styles.content}>
                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path={'/'} element={<Navigate to={'/adidas'}/>}/>*/}

                    {/*    <Route path={PATH.PAGE5} element={<Prices/>}/>*/}
                    {/*    <Route path={PATH.PAGE1} element={<ADIDAS/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<PUMA/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<ABIBAS/>}/>*/}
                    {/*    <Route path='/adidas/:id' element={<Model/>}/>*/}

                    {/*    <Route path={'/*'} element={<Error404/>}/>*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

