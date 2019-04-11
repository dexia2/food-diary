import styled from 'styled-components';
export interface IconProps {
  name: string;
  width?: number;
  height?: number;
}

export const Icon = styled.i`
  background-image: url(assets/images/${(props: IconProps) => props.name}.svg);
  width: ${(props: IconProps) => props.width || 32 }px;
  height: ${(props: IconProps) => props.width || 32 }px;
  display: inline-block;
  background-size: 100%;
`;