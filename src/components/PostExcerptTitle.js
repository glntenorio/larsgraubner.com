import styled from 'styled-components'

import { FONT_BOLD, PRIMARY_COLOR } from '../constants'

const PostExcerptTitle = styled.h3`
  font-weight: 700;
  font-size: 26px;
  margin: 0 0 0.75em;
  line-height: 1.3em;
  font-family: ${FONT_BOLD};
  text-transform: uppercase;

  @media (min-width: 992px) {
    font-size: 35px;
  }

  a {
    color: rgba(0, 0, 0, 0.85);
    text-decoration: none;

    &:hover {
      color: ${PRIMARY_COLOR};
    }
  }
`

export default PostExcerptTitle
