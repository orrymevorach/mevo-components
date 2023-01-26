import clsx from 'clsx';
import './NavLinks.scss';
import * as React from 'react';

type Props = {
  navData: [
    {
      title: string;
      url: string;
    }
  ];
  pathname: string;
  isMobile?: boolean;
  LinkElement?: any;
};
export default function NavLinks(props: Props) {
  const { navData, pathname, isMobile = false, LinkElement } = props;
  return (
    <>
      {navData.map(({ title, url }) => {
        const removeSlashes = ({ url }) => url.replace(/\//g, '');
        const isActive =
          removeSlashes({ url }) === removeSlashes({ url: pathname });
        return (
          <li
            key={title}
            className={clsx(
              'menuItem',
              isActive ? 'isActive' : '',
              isMobile ? 'isMobile' : ''
            )}
          >
            <LinkElement href={url}>{title}</LinkElement>
          </li>
        );
      })}
    </>
  );
}
