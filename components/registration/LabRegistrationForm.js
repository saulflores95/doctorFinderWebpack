import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Close from 'material-ui/svg-icons/navigation/close';
import Uploader from '../uploader/Uploader';
import axios from 'axios'
import NoSSR from 'react-no-ssr'
import RegistrationMap from './RegistrationMap'

export default class LabRegistrationForm extends Component {

  constructor(){
    super();
    this.state = {
      toogleState: false,
      value:'Podologia',
      position: [32, 100],
      url:'http://www.gatt.org/re/clt/wp-content/uploads/wovaxproperty-images/3224367/3224367-default.jpg',
    }
  }

  handleImageChange(url){
    if(url){
      this.setState({
        url:url
      });
      console.log('State From Parent Change: ', this.state.url);
    }else if(!url){
    console.log('url not found');
    }
  }

  mapClick (event) {
    console.log('user right-clicked on map coordinates: ' + event.latlng.toString())
    this.setState({
      position: event.latlng
    })
    console.log(this.state.position)

    // L.marker(event.latlng)
  }

  addLab(){
    var name = this.refs.clinicName.getValue();
    var img = this.state.url;
    var phone = this.refs.phone.getValue();
    var tag = this.refs.tag.getValue();
    var lab = {
      name: name,
      img: img,
      phone: phone,
      position: this.state.position,
      tag:tag,
    };

    console.log(lab);
    if (lab) {
      axios.post('/api/lab-registration', {
        name: lab.name,
        img: lab.img,
        phone: lab.phone,
        position: lab.position,
        tag: lab.tag,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }

  }

  render(){

    const styles = {
      paper: {
        width: '100%',
        padding: '0 0 0 0',
        marginTop: '50px'

      },
      formStyle: {
      },
      formDivisor: {
          padding: '0 0 30px 0'
      },
      formMessageDivisor: {
        padding: '0 0 10px 0'
      },
      customWidth: {
        width: '95%',
      },
      container: {
        paddingTop: 35,
        paddingBottom: 90
      },
      img: {
        paddingTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
      }
    }

    return (
      <div style={styles.container}>
      <MuiThemeProvider>
        <Container>
        <Paper style={styles.paper} zDepth={3}>
        <Container>
          <form className="new-doctor">
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <img width="250" height="200" style={styles.img} src={this.state.url} />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <Uploader handle={this.handleImageChange.bind(this)}></Uploader>
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="Laboratory Name"
                    ref="clinicName"
                    fullWidth={true}
                  />
                </Col>
              </Row>
            </div>
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <NoSSR onSSR={<div>Map Loading...</div>} >
                    <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                  </NoSSR>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <TextField
                    hintText="tag"
                    ref="tag"
                    fullWidth={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <TextField
                    hintText="Phone Number"
                    ref="phone"
                    fullWidth={false}
                  />
                </Col>
                <Col sm={2}>
                  <RaisedButton
                    label="Register"
                    onClick={this.addLab.bind(this)}
                    className="button-submit"
                    primary={true}
                  />
                </Col>
              </Row>
            </div>
          </form>
        </Container>
        </Paper>
        </Container>
      </MuiThemeProvider>
      </div>
    )
  }

}
