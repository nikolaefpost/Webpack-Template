import React from 'react';
import Header from "../components/header/header";
import style from "../style/_home.module.scss"


const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <div className={style.img}/>
            </main>
        </>

    );
};

export default Home;