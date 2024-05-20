import React from 'react'
import './Header.css'

import { GoHome, GoHomeFill } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

export default () => {

    return (
        <header>
            <a href="/home">Página inicial</a>
            <nav className='pagesNav'>
                <a href="/home"><GoHome size={30}/>Página inicial</a>
                <a href="/home"><CiSquarePlus size={30}/>Criar</a>
            </nav>
            <button ><IoMenu size={30} />Mais</button>
        </header>
    );
}