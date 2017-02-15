import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'preact-tap-event-plugin'
import FlatButton from 'material-ui/FlatButton'
import {Container} from 'react-grid-system'
import styles from './DoctorDescription.css'
injectTapEventPlugin()

export default class DoctorDescription extends Component {

  constructor () {
    super()
    this.state = {
      open: false
    }
  }

  handleOpen () {
    this.setState({open: true})
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    const actions = [
      <FlatButton
        label={<span className='label-text'>Close</span>}
        primary
        onTouchTap={this.handleClose.bind(this)}
      />
    ]
    return (
      <div>
        <MuiThemeProvider>
          <Paper zDepth={1} className={styles.paper}>
            <Container>
              <div style={styles.text}>
                <p className='doctor-description'>{this.props.doctor.description}</p>
                <RaisedButton label={<span className='label-text'>Read more</span>} onTouchTap={this.handleOpen.bind(this)} />
              </div>
            </Container>
          </Paper>
        </MuiThemeProvider>
        <div>
          <MuiThemeProvider>
            <Dialog
              title={<span className='doctor-descriptionTitle'>Doctor Description </span>}
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose.bind(this)}
             >
              <p className='doctor-descriptionFull'>{this.props.doctor.description}</p>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
