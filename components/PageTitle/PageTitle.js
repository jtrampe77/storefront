import React from 'react';

import styles from './styles.module.css'

function PageTitle ({children, title, tagline, ...props})  {
  return (
      <header className={styles.pageTitle}>
        <h1>{title || "Title"}</h1>
        <p>{tagline || "Tagline"}</p>
      </header>
  )
}

export default PageTitle