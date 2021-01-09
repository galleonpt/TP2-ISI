import React from 'react';
import {FiStar, FiShare2} from 'react-icons/fi'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './styles.css'


export interface Owner {
  login: string;
  id: number;
}

export interface RepoProps {
  id: number;
  name: string;
  owner: Owner;
  description: string;
  stargazers_count: number;
  forks: number;
}


const ReposList:React.FC<RepoProps>=(...params)=>{
  return (
      <div className=' container main'>
        <div className="footer-wrapper">
        <Navbar />

        <h2 className='username'>{params.owner.login} <span className='followers-number'>(1234 seguidores)</span> </h2>

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
    </div>
  )
}

export default ReposList;