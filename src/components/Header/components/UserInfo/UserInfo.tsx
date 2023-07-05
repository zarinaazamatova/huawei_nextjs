import React, { ReactNode } from 'react';
import Link from 'next/link';
import * as S from './UserInfo.Styles';

type UserProps = {
  url: string;
  name: string;
  icon: ReactNode;
  dropDown: ReactNode | undefined;
  amount: boolean;
};

export const UserInfo = ({ url, name, icon, dropDown, amount }: UserProps) => {
  return (
    <S.StyledCart>
      <span>{icon}</span>
      <Link href={url} style={{ textDecoration: 'none', color: 'black' }}>
        {name}
      </Link>
      {amount ? <S.StyledCounter>0</S.StyledCounter> : <span>{dropDown}</span>}
    </S.StyledCart>
  );
};
