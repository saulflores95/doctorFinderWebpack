import React from 'react'
import Link from 'next/link'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Avatar from 'material-ui/Avatar'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'

let idCounter = 0

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
    case 'Orthopedic Surgeon':
      return '../../../../static/Orthopedic.jpg'
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
    case 'Veterinarian':
      return '../../../../static/Veterinarian.jpg'
    case 'Otorrinolaringologista':
      return '../../../../static/Otorhinolaryngologist.jpg'
    case 'Gastroenterologist':
      return '../../../../static/Gastroenterologist.jpg'
    case 'Hematologist':
      return '../../../../static/Hematologist.jpg'
    case 'Nephrologist':
      return '../../../../static/Nephrologist.jpg'
    case 'Ophthalmologists':
      return  '../../../../static/Ophtalmologist.jpg'
    case 'General Medicine':
      return  '../../../../static/General-Medicine.jpg'
    default:
      return null
  }
}
const DocCatList = ({specialty}) => (
  <div>
    <Link prefetch href={`/doctors-speciality?id=${specialty}`} as={`/doctors-speciality/${specialty}`}>
      <div>
        <MuiThemeProvider>
          <List style={{padding: 0}}>
            <Transition
              component={false}
              enter={{
                opacity: 1,
                translateX: spring(0, {stiffness: 400, damping: 25})
              }}
              leave={{
                opacity: 0,
                translateX: 350
              }}
              >
              <ListItem
                leftAvatar={<Avatar className='doctor' alt={specialty} src={imageChooser(specialty)} />}
                rightIcon={<ActionInfo style={{color: '#ef726f', fill: '#ef726f'}} />}
                primaryText={<div className='label'>{specialty}</div>}
                style={{marginTop: 10, marginBottom: 10}}
                key={idCounter++}
              />
            </Transition>
            <Divider inset style={{backgroundColor: '#57c6df'}} />
          </List>
        </MuiThemeProvider>
      </div>
    </Link>
    <style jsx>
      {`

        .label {
          font-size: 18px;
          color: #2d517b !important;
          font-family: 'Montserrat', sans-serif;
        }

        .doctor {
          width: 45px !important;
          height: 45px !important ;
        }

        .pageSlider-enter {
          transform: translate3d(100%, 0, 0);
        }

        .pageSlider-enter.pageSlider-enter-active {
          transform: translate3d(0, 0, 0);
          transition: all 600ms;
        }
      `}
    </style>
  </div>
)

export default DocCatList
