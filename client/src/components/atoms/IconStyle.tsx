import styled from 'styled-components';

type IconStyleProps = {
  width: number;
  color: string;
};

const IconStyle = styled.i`
  display: inline;
  svg {
    width: ${(props: IconStyleProps) => props.width }px !important;
    height: ${(props: IconStyleProps) => props.width }px !important;
    display: inline-block;
    background-size: 100%;
    path {
      fill: ${(props: IconStyleProps) => props.color } !important;
    }
  }
`;

export default IconStyle;