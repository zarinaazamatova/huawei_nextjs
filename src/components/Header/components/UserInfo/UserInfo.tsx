import React, { ReactNode } from 'react';
import * as S from './UserInfo.styles';

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
      <S.StyledLink href={url}>{name}</S.StyledLink>
      {amount ? <S.StyledCounter>0</S.StyledCounter> : <span>{dropDown}</span>}
    </S.StyledCart>
  );
};
