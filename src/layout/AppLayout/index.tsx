import { Wrapper } from './style';

const AppLayout = (props: { children?: JSX.Element }) => {
  return (
    <Wrapper>
     <>{props.children}</>
    </Wrapper>
  );
};

export default AppLayout;
