import * as React from 'react';
import './HamburgerMenu.scss';
import clsx from 'clsx';

type Props = {
  isOpen: boolean;
  setIsOpen: any;
  hamburgerMenuColor?: string;
};
export default function HamburgerMenu(props: Props) {
  const { isOpen = false, setIsOpen, hamburgerMenuColor = '#2f2f2f' } = props;
  const backgroundColor = isOpen ? '#2f2f2f' : hamburgerMenuColor;
  return (
    <button
      className={clsx('hamburgerMenu', isOpen ? 'open' : '')}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span style={{ backgroundColor }}></span>
      <span style={{ backgroundColor }}></span>
      <span style={{ backgroundColor }}></span>
      <span style={{ backgroundColor }}></span>
    </button>
  );
}
