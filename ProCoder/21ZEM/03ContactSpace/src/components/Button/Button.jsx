import React from 'react'

import styles from './Button.module.css'

const Button = ({icon , text, isOuline}) => {
  return (
    <button className={isOuline ? styles.outline_btn : styles.primary_btn}>{icon} {text} </button>
  )
}

export default Button
