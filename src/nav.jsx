import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

export default function nav(){
   
    return(
        <div className='class_1'>
            <div className='class_2'>
              <h2>Codeforces Analyser</h2>
            </div>
            {/* <div className='class_3'>
            <div className='class_4'>
            <FontAwesomeIcon icon={faHome} />
             <h2>Home </h2>
             </div>
             <div className='class_5'>
            <FontAwesomeIcon icon={faBalanceScale} />
             <h2>Compare</h2>
             </div>
            </div> */}
        </div>
    )
}