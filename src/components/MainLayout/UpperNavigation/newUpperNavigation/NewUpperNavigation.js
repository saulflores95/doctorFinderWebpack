import React from 'react'
import styles from './NewUpperNavigation.css'
import injectTapEventPlugin from 'preact-tap-event-plugin'
injectTapEventPlugin()

const imgUrl = 'https://s30.postimg.org/biuab6sk1/image.jpg'
const NewUpperNavigation = () => (
  <div>
    <ul className={styles.ul}>
      <li className={styles.li}><img src={imgUrl} /></li>
      <li className={styles.liRight}>
        <div className={styles.wrap}>
          <form action='' autocomplete='on'>
            <input className={styles.search} name='search' type='text' placeholder='Search...' />
            <input className={styles.search_submit} value='Rechercher' type='submit' />
          </form>
        </div>
      </li>
    </ul>
  </div>
)

export default NewUpperNavigation
