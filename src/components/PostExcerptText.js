import styled from 'styled-components'

import { TEXT_COLOR } from '../constants'

const PostExcerptText = styled.p`
  font-size: 16px;
  color: ${TEXT_COLOR};
  line-height: 1.65em;
  margin: 0;

  @media (min-width: 992px) {
    font-size: 20px;
  }
`

export default PostExcerptText