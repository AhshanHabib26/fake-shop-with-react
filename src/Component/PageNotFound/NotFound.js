import React from 'react';
import NotFoundImg from '../../image/PageNotFound.gif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Styles from '../Styles/NotFound.module.css'
import { useNavigate } from 'react-router-dom';


const NotFound = () => {

    const navigate = useNavigate()

    const handaleIcon = () =>{
        navigate('/')
    }

    return (
        <div className='container mx-auto w-50'>
           <img src={NotFoundImg} alt="" /> 
           <div>
            <FontAwesomeIcon onClick={handaleIcon} className={Styles.arrowIcon} icon={faArrowCircleLeft}/>
           </div>
        </div>
    );
};

export default NotFound;