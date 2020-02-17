import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faBalanceScale,
  faUsers,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";

export default {
  AddressIcon: () => <FontAwesomeIcon icon={faMapMarkerAlt} />,
  PhoneIcon: () => <FontAwesomeIcon icon={faPhoneAlt} />,
  EmailIcon: () => <FontAwesomeIcon icon={faEnvelope} />,
  ScaleIcon: () => <FontAwesomeIcon icon={faBalanceScale} />,
  TeamIcon: () => <FontAwesomeIcon icon={faUsers} />,
  AppointmentIcon: () => <FontAwesomeIcon icon={faCalendarCheck} />,
}