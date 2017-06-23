import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Container} from 'react-grid-system'

export default class LabDescription extends Component {
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
    var styles = {
      textCenter: {
        textAlign: 'center',
        paddingBottom: 15
      }
    }
    const actions = [
      <FlatButton
        label={<span className='label-text'>Close</span>}
        primary
        onClick={this.handleClose.bind(this)}
      />
    ]
    return (
      <div>
        <MuiThemeProvider>
          <Paper zDepth={1} className='paper'>
            <div>
              <Container style={styles.textCenter}>
                <p className='labDescription'>Texto de prueba</p>
                <RaisedButton label={<span style={{color: 'white'}}>Read More</span>} backgroundColor='#2d517b' onClick={this.handleOpen.bind(this)} />
              </Container>
            </div>
          </Paper>
        </MuiThemeProvider>
        <div>
          <MuiThemeProvider>
            <Dialog
              title='lab description'
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose.bind(this)}
             >
              <div>
                <p className='labDescriptionDialog'>Texto de prueba</p>
              </div>
            </Dialog>
          </MuiThemeProvider>
        </div>
        <style jsx>
          {`
            .paper {
              padding: 5px 0 10px 0;
              margin-bottom: 20px;
            }

            p {
              line-height: 20px;
              width: 100%;
              height: 60px;
              overflow:hidden
            }

            .divider{
              padding-top:75;
            }

            .labDescription {
              text-align: justify;
              padding-top: 23px;
              margin-top: 15px;
              font-size: 16px;
              overflow: hidden;
              height: 80px;
              text-align: justify;
              color: #2d517b;
              font-family: 'Montserrat', sans-serif;
            }

            .labDescriptionDialog {
              height: 40vh;
              overflow-y: scroll;
              overflow-x: hidden;
              text-align: justify;
              color: #2d517b;
              padding-right: 15px;
              font-family: 'Montserrat', sans-serif;
            }

          `}
        </style>
      </div>
    )
  }
}
