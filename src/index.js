import React from 'react'
import styles from './styles.module.css'

export const DefaultImage = ({width, height}) => {

  return (
    
    <div className={styles.defaultImage} style={{width:width, height:height}}>
      <span>{width} x {height}</span>
    </div>
  )
}
