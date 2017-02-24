import React from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import injectTapEventPlugin from 'preact-tap-event-plugin'
import styles from '../docListWrapper/docList/DoctorList.css'
import Avatar from 'material-ui/Avatar'

injectTapEventPlugin()

const imageChooser = (props) => {
  switch (props) {
    case 'Allergist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Allergist.jpg'
    case 'Anesthesiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Anesthesiologist.jpg'
    case 'Audiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Audiologist.jpg'
    case 'Cardiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Cardiologist.jpg'
    case 'Dentist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Dentist.jpg'
    case 'Dermatologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Dermatologist.jpg'
    case 'ENT Specialist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/ENT-Specialist-(Ear%2C-Nose-and-Throat).jpg'
    case 'Endocrinologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Endocrinologist.jpg'
    case 'Epidemiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Epidemiologist.jpg'
    case 'Gynecologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Gynecologist.jpg'
    case 'Immunologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Immunologist.jpg'
    case 'Infectious Disease Specialist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Infectious-Disease-Specialist.jpg'
    case 'Internal Medicine Specialist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Internal-Medicine-Specialist.jpg'
    case 'Medical Geneticist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Medical-Geneticist..jpg'
    case 'Microbiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Microbiologist.jpg'
    case 'Neonatologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Neonatologist.jpg'
    case 'Neurologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Neurologist.jpg'
    case 'Neurosurgeon':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Neurosurgeon.jpg'
    case 'Obstetrician':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Obstetrician.jpg'
    case 'Oncologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Oncologist.jpg'
    case 'Orthopedic':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Orthopedic.jpg'
    case 'Pediatrician':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Pediatrician.jpg'
    case 'Physiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Physiologist.jpg'
    case 'Plastic Surgeon':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Plastic-Surgeon.jpg'
    case 'Podiatrist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Podiatrist.jpg'
    case 'Psychiatrist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Psychiatrist.jpg'
    case 'Radiologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Radiologist.jpg'
    case 'Rheumatologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Rheumatologist.jpg'
    case 'Surgeon':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Surgeon.jpg'
    case 'Urologist':
      return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/Urologist.jpg'
    default:
      return null
  }
}

const DocCatList = ({specialty}) => (
  <div>
    <MuiThemeProvider>
      <List>
        <Link to={`/doctors/${specialty}`}>
          <ListItem
            leftAvatar={<Avatar className={styles.doctor} src={imageChooser(specialty)}/>}
            rightIcon={<ActionInfo />}
            secondaryText={<div className={styles.label}>{specialty}</div>}
          />
        </Link>
        <Divider inset />
      </List>
    </MuiThemeProvider>
  </div>
)

export default DocCatList
