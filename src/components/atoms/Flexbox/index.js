import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: center;
`;