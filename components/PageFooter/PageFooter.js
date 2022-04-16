import React from 'react';

import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../static/img/logo.png'

function PageFooter ({children, ...props})  {
  return (
        <footer className={styles.pagefooter}>
           <div>
              <Image
                  src={logo}
                  alt="Logo"
                  width="80px"
                  height="50px"
              />
            <p>Copyrights 2022 - All Rights Reserved</p>
          </div>

        </footer>
  )
}

export default PageFooter