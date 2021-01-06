import React from 'react';
import {FiStar, FiShare2} from 'react-icons/fi'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './styles.css'

function ReposList(){
  return (
    <div className=' container main'>
      <Navbar />

      <h2 className='username'>User(1234 followers)</h2>

      <ul className="list-group ">
        <li className="list-group-item">
          <div className="info">
            <a href="#">Titulo</a>

            <p className='description'>Description</p>
          </div>

          <div className='rating'>
            <div className='stars-info'>
              123
              <FiStar color='DCFF00'/>
            </div>
            
            <div className='forks-info'>
              123
              <FiShare2 id='icon2' color='008FFF'/>
            </div>

          </div>
        </li>
      </ul>

      <Footer/> 
    </div>
  )
}

export default ReposList;