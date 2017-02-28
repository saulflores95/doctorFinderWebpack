import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import styles from './loadingComponent.css'

const LoadingComponent = () => (
  <div className={styles.centered}>
    <MuiThemeProvider>
      <CircularProgress size={80} thickness={7} />
    </MuiThemeProvider>
  </div>
)

export default LoadingComponent
