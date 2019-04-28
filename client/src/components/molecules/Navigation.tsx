import React from 'react';
import styled from 'styled-components';
import NavItem from '../atoms/NavItem';

const NavigationWrapper = styled.div`
  position: sticky;
  width: 100%;
  height: 50px;
  border-bottom: 3px solid #fff2ccff;
`;

function Navigation() {
  return (
    <NavigationWrapper>
      <NavItem iconName="diary" text="記録"></NavItem>
      <NavItem iconName="analyze" text="分析"></NavItem>
      <NavItem iconName="management" text="管理"></NavItem>
    </NavigationWrapper>
  );
}

export default Navigation;