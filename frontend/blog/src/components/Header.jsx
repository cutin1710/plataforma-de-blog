import React from 'react'
import './Header.css'

import { GoHome, GoHomeFill } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";

import Logo from '../images/ghostLogo.svg'

export default () => {

    return (
        <header>
            <nav className='pagesNav'>
                <a href="/" className='logo-icon'><img src={Logo} /></a>
                <a href="/" className='page-link'><GoHome size={30} />Página inicial</a>
                <a href="/" className='page-link'><CiSquarePlus size={30} />Criar</a>
                <a href="/" className='page-link'><IoIosSearch size={30} />Buscar</a>
                <a href="/" className='page-link'><FiEdit2  size={30} />Editar</a>
                <a href="/" className='page-link'><MdAccountCircle size={30} />Perfil</a>
            </nav>
            <button ><IoMenu size={35} />Mais</button>
        </header>
    );
}