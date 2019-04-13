import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const DefaultWidth = 24;
const DefaultColor = '#848d95';

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

type IconProps = {
  name: string;
  width?: number;
  color?: string;
};

function Icon(props: IconProps) {
  const [svg, setSvg] = useState('');
  const [loading, setLoading] = useState(true);

  const url = `./assets/images/${props.name}.svg`;
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.status !== 200) {
          setLoading(false);
          throw new Error('Not 200 response');
        }
        return res.text();
      })
      .then(svg => {
        setSvg(svg);
        setLoading(false);
      });
  });

  const width = props.width || DefaultWidth;
  if (loading) {
    return <Loading width={width}/>;
  }

  const color = props.color || DefaultColor;
  return (
    <IconStyle 
      width={width} 
      color={color}
      dangerouslySetInnerHTML={{ __html: svg}}/>
  );

}

export default Icon;