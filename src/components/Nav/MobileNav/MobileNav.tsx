import React from 'react';
import NavLinks from '../NavLinks';
import 'styles/animations.scss';
import './MobileNav.scss';

type Props = {
  navData: [{ title: string; url: string }];
  pathname: string;
  setIsOpen: any;
  LinkElement: any;
};

export default function MobileNav(props: Props) {
  const { navData, pathname, setIsOpen, LinkElement } = props;
  return (
    <>
      <nav className="mobileNav slideRight">
        <ul>
          <NavLinks
            navData={navData}
            pathname={pathname}
            isMobile
            LinkElement={LinkElement}
          />
        </ul>
      </nav>
      <button onClick={() => setIsOpen(false)} className="overlay"></button>
    </>
  );
}
