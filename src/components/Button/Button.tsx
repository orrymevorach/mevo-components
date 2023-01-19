import * as React from 'react';

type Props = {
  children: any;
  onClick: any;
  id: string;
  classNames?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function Button(props: Props) {
  const { children, onClick, classNames, id, disabled, isLoading } = props;

  return (
    <button
      type="button"
      id={id}
      onClick={onClick}
      className={classNames}
      disabled={disabled}
    >
      {!isLoading && <p>{children}</p>}
    </button>
  );
}
