import React from 'react';
import styled from 'styled-components';
import IconWithLoading from '../molecules/IconWithLoading';

const NavItemWrapper = styled.span`
  display: inline-block;
  width: 100px;
  height: 50px;
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #fff2ccff;
  }
  i {
    position: relative;
    left: 0;
    top: 2px;
  }
`;

const NavItemText = styled.b`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  padding: 0 4px;
`;

type NavItemProps = {
  iconName: string,
  text: string
};

function NavItem({iconName, text}: NavItemProps) {
  return (
    <NavItemWrapper>
      <IconWithLoading name={iconName} width={18}></IconWithLoading>
      <NavItemText>{text}</NavItemText>
    </NavItemWrapper>
  );
}

export default NavItem;