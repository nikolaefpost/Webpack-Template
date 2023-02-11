import React from 'react';

import style from "./index.module.scss";

const Header = () => {
    return (
        <header>
            <div   className={style.pic}/>
            Hello React
        </header>
    );
};

export default Header;