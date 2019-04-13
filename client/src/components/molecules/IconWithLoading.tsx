import React, { useState, useEffect } from 'react';
import IconStyle from '../atoms/IconStyle';
import Loading from '../atoms/Loading';

const DefaultWidth = 24;
const DefaultColor = '#848d95';

type IconWithLoadingProps = {
  name: string;
  width?: number;
  color?: string;
};

function IconWithLoading({name, width = DefaultWidth, color = DefaultColor}: IconWithLoadingProps) {
  const [svg, setSvg] = useState('');
  const [loading, setLoading] = useState(true);

  const url = `./assets/images/${name}.svg`;
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

  if (loading) {
    return <Loading width={width}/>;
  }

  return (
    <IconStyle 
      width={width} 
      color={color}
      dangerouslySetInnerHTML={{ __html: svg}}/>
  );

}

export default IconWithLoading;