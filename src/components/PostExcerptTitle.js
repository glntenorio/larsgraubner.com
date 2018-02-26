import styled from 'styled-components'

import { FONT_SANS_SERIF, PRIMARY_COLOR } from '../constants'

const PostExcerptTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 0 0 0.35em;
  line-height: 1.3em;
  font-family: ${FONT_SANS_SERIF};

  @media (min-width: 992px) {
    font-size: 26px;
  }

  a {
    color: ${PRIMARY_COLOR};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default PostExcerptTitle
