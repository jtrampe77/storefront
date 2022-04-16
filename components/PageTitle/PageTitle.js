import React from 'react';

import styles from './styles.module.css'

function PageTitle ({children, title, tagline, button, ...props})  {
  return (
      <header className={styles.pageTitle}>
        <h1>{title || "Title"}</h1>
        <p>{tagline || "Tagline"}</p>
        <a href='#main'>{button || "Shop"}</a>
      </header>
  )
}

export default PageTitle