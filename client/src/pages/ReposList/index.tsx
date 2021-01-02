import React from 'react';
import {FiStar, FiShare2} from 'react-icons/fi'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './styles.css'

function ReposList(){
  return (
    <div>
      <Navbar />

      <h2>User(1234 followers)</h2>

      <ul className="list-group">
        <li className="list-group-item">
          <a href="#">Titulo</a>

          <p className='description'>Description</p>

          <div className='stars-info'>
            123
            <FiStar color='DCFF00'/>
          </div>
          
          <div className='forks-info'>
            123
            <FiShare2 id='icon2' color='008FFF'/>
          </div>
        </li>
      </ul>

      <Footer/> 
    </div>
  )
}

export default ReposList;