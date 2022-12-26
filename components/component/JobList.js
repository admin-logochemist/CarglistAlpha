import React from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { selectResturant } from '../features/ResSlice';
import {faStar} from "@fortawesome/free-solid-svg-icons";
export const JobList = ({obj}) => {
    console.log(obj); 
    const router = useRouter();
    const  dispatch = useDispatch();
    const openJob=()=>{
        let payload = obj
         dispatch(selectResturant(payload));
        router.push('/PostAd', obj)
      }
      function handleClickedd() {
        router.push({ pathname: "/", state: obj });
        
      }
      console.log(obj);
  return (

  <div className="s">
       
       <span onClick={openJob}><FontAwesomeIcon icon={faStar}/>&nbsp;&nbsp;&nbsp;<p>&nbsp;&nbsp;&nbsp;</p> {obj?.data().posttitle}</span>
</div>



)
}


