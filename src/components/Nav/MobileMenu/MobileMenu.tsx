import * as React from 'react';
import './MobileMenu.scss';
import HamburgerMenu from '../HamburgerMenu';

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  LinkElement?: any;
  logo: string;
};
export default function MobileMenu(props: Props) {
  const { isOpen, setIsOpen, LinkElement, logo } = props;
  return (
    <div className="mobileMenu">
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />{' '}
      <li className="image">
        <LinkElement href="/">
          <img src={logo} alt="" />
        </LinkElement>
      </li>
    </div>
  );
}
