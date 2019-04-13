
import styled from 'styled-components';

const LoadinBorderWidth = 6;
const OuterBorderColor = '#ccc';
const InnerBorderColor = '#848d95';

export type LoadingProps = {
  width: number;
};

function loadingPadding(width: number) {
  return (width - LoadinBorderWidth) / 2;
}

const Loading = styled.span`
  display: inline-block;
  height: 0;
  width: 0;
  padding: ${(props: LoadingProps) => loadingPadding(props.width)}px;
  border: ${LoadinBorderWidth}px solid ${OuterBorderColor};
  border-right-color: ${InnerBorderColor};
  border-radius: 50%;
  animation: rotate 1s infinite linear;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
}
`;

export default Loading;