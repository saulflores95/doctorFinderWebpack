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
            <div>
              <Container>
                <p className={styles.doctorDescription}>{this.props.doctor.description}</p>
                <RaisedButton label='Read more' onClick={this.handleOpen.bind(this)} />
              </Container>
            </div>
          </Paper>
        </MuiThemeProvider>
        <div>
          <MuiThemeProvider>
            <Dialog
              title='Doctor description'
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose.bind(this)}
             >
              <div>
                <p className={styles.doctorDescriptionDialog}>{this.props.doctor.description}</p>
              </div>
            </Dialog>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
