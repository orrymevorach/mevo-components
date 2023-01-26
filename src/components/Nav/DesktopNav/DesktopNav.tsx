import * as React from 'react';
import './DesktopNav.scss';
import NavLinks from '../NavLinks';

type Props = {
  navData: [
    {
      title: string;
      url: string;
    }
  ];
  pathname: string;
  LinkElement?: any;
  ImageElement?: any;
  logo: string;
};

export default function DesktopNav(props: Props) {
  const { navData, pathname, LinkElement, ImageElement, logo } = props;
  return (
    <nav className="nav">
      <ul>
        <li>
          <LinkElement href="/">
            <ImageElement src={logo} width={100} height={100} alt="" />
          </LinkElement>
        </li>

        <NavLinks
          navData={navData}
          pathname={pathname}
          LinkElement={LinkElement}
        />
      </ul>
    </nav>
  );
}
