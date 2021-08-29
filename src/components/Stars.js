import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar,faBomb } from '@fortawesome/free-solid-svg-icons'
//reusable component for rating things, 1-5 scale of starts etc. 
const Stars = ({count}) => {
 
    const starCounter=()=>{
        
      if(Number(count) === 1){
          return (<FontAwesomeIcon icon={faStar}/>)
      }else if(Number(count) === 2){
          return <div><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
      }else if(Number(count) === 3){
          return <div><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
      }else if(Number(count) === 4){
          return <div><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
      }else if(Number(count) === 5){
          return <div><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></div>
      }else{
          return <FontAwesomeIcon icon={faBomb}/>
      }
    }
    
    return (
        <div>
            {starCounter()}
            
        </div> 
    )
}

export default Stars;
