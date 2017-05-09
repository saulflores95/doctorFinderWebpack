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
import AlertContainer from 'react-alert'

export default class HospitalEditForm extends Component {

  constructor(){
    super();
    this.state = {
      toogleState: false,
      value:'Podologia',
      inputs:[1],
      subscription: {
        hospitals: Meteor.subscribe("allHospitals")
      },
    }
  }

  hospital(){
    return Hospitals.findOne(this.props.id);
  }

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }


  editHospital(event){
    event.preventDefault();
    var name = this.refs.hospitalName.getValue();
    var img = this.refs.hospitalImgUrl.getValue();
    var phone = this.refs.phone.getValue();
    var latitude = this.refs.latitude.getValue();
    var longitude = this.refs.longitude.getValue()

    var hospital = {
      name: name,
      img: img,
      phone: phone,
      position: this.state.position

    };
    console.log(hospital);
    let _self = this;

      if(hospital){
        axios.post('/api/hospital-registration', {
          name: hospital.name,
          img: hospital.img,
          phone: hospital.phone,
          position: hospital.position
        })
        .then(function (response) {
          console.log(response)
          _self.msg.show('hospital Added', {
            time: 2000,
            type: 'success',
            icon: <img width='50px' height='50px' src='https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Ok_check_yes_tick_accept_success_green_correct.png' />
          })
        })
        .catch(function (error) {
          console.log(error)
        })

      }
  }

  addInputField(event){
    event.preventDefault();
    var newInput = this.state.inputs.length;
    this.state.inputs.push(newInput);
    this.setState({});
  }

  removeInputField(event){
    event.preventDefault();
    this.state.inputs.pop();
    this.setState({});
  }faceface

  render(){
    let hospital = this.hospital();
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
        paddingTop: 50
      }
    }

    return (
      <div style={styles.container}>
      <MuiThemeProvider>
        <Container>
        <Paper style={styles.paper} zDepth={3}>
        <Container>
          <form className="new-doctor" onSubmit={this.editHospital.bind(this)}>
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={6}>
                  <TextField
                    hintText="Hospital Name"
                    ref="hospitalName"
                    fullWidth={true}
                    defaultValue={hospital.name}
                  />
                </Col>
                <Col sm={6}>
                  <TextField
                    hintText="url de imagen"
                    ref="hospitalImgUrl"
                    fullWidth={true}
                    defaultValue={hospital.img}
                  />
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <TextField
                    hintText="Latitude"
                    ref="latitude"
                    fullWidth={true}
                    defaultValue={hospital.latitude}
                  />
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <TextField
                    hintText="Longitude"
                    ref="longitude"
                    fullWidth={true}
                    defaultValue={hospital.longitude}
                  />
                </Col>
              </Row>
            </div>
            <div style={styles.formDivisor}>
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <TextField
                    hintText="Phone Number"
                    ref="phone"
                    fullWidth={false}
                    defaultValue={hospital.phone}
                  />
                </Col>
                <Col sm={2}>
                  <RaisedButton
                    label="Register"
                    type="submit"
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
