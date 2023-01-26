import React, { useState, useEffect } from 'react';
import { useWindowSize, useStopScroll } from '../../hooks';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';

type Props = {
  navData: [{ title: string; url: string }];
  LinkElement?: any;
  ImageElement?: any;
  logo: string;
};

export default function Nav(props: Props) {
  const {
    navData,
    LinkElement = 'a',
    ImageElement = 'img',
    logo = 'https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg',
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState('');
  const { isMobile } = useWindowSize();

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useStopScroll({ isOpen });

  return (
    <>
      {!isMobile ? (
        <DesktopNav
          navData={navData}
          pathname={pathname}
          LinkElement={LinkElement}
          ImageElement={ImageElement}
          logo={logo}
        />
      ) : (
        <>
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            LinkElement={LinkElement}
            logo={logo}
          />
          {isOpen && (
            <MobileNav
              navData={navData}
              pathname={pathname}
              setIsOpen={setIsOpen}
              LinkElement={LinkElement}
            />
          )}
        </>
      )}
    </>
  );
}
