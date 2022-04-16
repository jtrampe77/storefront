import React from 'react';

import styles from './styles.module.scss'
import logo from '../../static/img/logo.png'
import Image from 'next/image'


function Appbar ({children, ...props})  {
  return (
      <nav className={styles.appbar}>
      <ul>
          <li className="sneakerheadz-logo">
          <Image
            src={logo}
            alt="Logo"
            width="80px"
            height="50px"
          />
          </li>

          <div className="menu-items">
              <li><a href="https://sneakerheadz-react.netlify.app/">Login</a></li>
          </div>


      </ul>
      </nav>
  )
}

export default Appbar