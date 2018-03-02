import styled from 'styled-components'

export default styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  filter: grayscale(20%);
  float: left;

  &:hover {
    filter: grayscale(0);
  }
`
