import React from 'react'
import { Link } from 'react-router-dom'
const imgUrl = 'https://s30.postimg.org/biuab6sk1/image.jpg'
const style = {
  display: {
    'display': 'none'
  }
}
if (process.env.BROWSER) {
  var styles = require('./NewUpperNavigation.css')
}

const NewUpperNavigation = () => (
  <div className={styles.container}>
    <ul className={styles.ul}>
      <li className={styles.li}><Link to='/'><img alt='Healthcare Baja' src={imgUrl} /></Link></li>
      <li className={styles.liRight}>
        <div className={styles.wrap}>
          <form action='' autoComplete='on'>
            <label style={style.display} htmlFor='search'>Search</label>
            <input className={styles.search} name='search' type='text' placeholder='Search...' />
            <label style={style.display} htmlFor='searcht'>Rechercher</label>
            <input className={styles.search_submit} name='searcht' value='Rechercher' type='submit' />
          </form>
        </div>
      </li>
    </ul>
  </div>
)

export default NewUpperNavigation
