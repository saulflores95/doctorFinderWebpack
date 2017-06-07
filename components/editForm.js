import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Container, Row, Col} from 'react-grid-system'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

const styles = {
  errorStyle: {
    color: '#2d517b'
  },
  underlineStyle: {
    borderColor: '#2d517b'
  },
  floatingLabelStyle: {
    color: '##2d517b'
  },
  floatingLabelFocusStyle: {
    color: '#2d517b'
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '250px',
    display: 'block',
    marginTop: '20px'
  },
  input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '250px',
    display: 'block',
    color: '#2d517b',
    marginTop: '20px'

  },
  paper: {
    width: '80%',
    height: '300px !important',
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100
  },
  wrapper2: {
    paddingTop: 0
  },
  text: {
    textAlign: 'center',
    color: '#2d517b'
  },
  textWrapper: {
    borderBottom: '2px solid #2d517b',
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  }
}

const editForm = () => (
  <div className='gradiant'>
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} offset={{ lg: 3, md: 3 }}>
          <MuiThemeProvider>
            <Paper style={styles.paper} zDepth={3}>
              <MuiThemeProvider>
                <div style={styles.wrapper2}>
                  <div style={styles.textWrapper}>
                    <h2 style={styles.text}>Edit form</h2>
                  </div>
                  <br />
                  <TextField hintText='Introduze el ID' hintStyle={styles.errorStyle} underlineStyle={styles.underlineStyle} underlineFocusStyle={styles.underlineStyle} style={styles.input} />
                  <br />
                  <RaisedButton label='Buscar' backgroundColor='#ef726f' labelColor='white' style={styles.button} />
                  <br />
                </div>
              </MuiThemeProvider>
            </Paper>
          </MuiThemeProvider>
        </Col>
      </Row>
    </Container>
    <style jsx>
      {`
      .gradiant {
        background: red;
        background: -webkit-linear-gradient(right, #2d517b , white);
        background: -o-linear-gradient(bottom left, #2d517b, white);
        background: -moz-linear-gradient(bottom left, #2d517b, white);
        background: linear-gradient(to bottom left, #2d517b , white);
        height: 100%;
      }

      .wrapper {
        height: 100%;
      }

      .button {
        height: 100%;
        margin-bottom: 400px;
        position: absolute;
        width: 100%;
      }

    `}
    </style>
  </div>
)

export default editForm
