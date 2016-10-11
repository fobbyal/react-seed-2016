import React from 'react'
import styles from './test.css'
import Test2 from './test2'

const Test = () => (
      <div>
        <Test2/>
        <div className={styles.test}>
          Finally hello world!
        </div>
      </div>
  )

export default Test
