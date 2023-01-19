import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faBalanceScale,
  faUsers,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';

const Icons = {
  AddressIcon: () => <FontAwesomeIcon icon={faMapMarkerAlt} />,
  PhoneIcon: () => <FontAwesomeIcon icon={faPhoneAlt} />,
  EmailIcon: () => <FontAwesomeIcon icon={faEnvelope} />,
  ScaleIcon: () => <FontAwesomeIcon icon={faBalanceScale} />,
  TeamIcon: () => <FontAwesomeIcon icon={faUsers} />,
  AppointmentIcon: () => <FontAwesomeIcon icon={faCalendarCheck} />,
};

export default Icons;
