import styled from 'styled-components'

import { FONT_SANS_SERIF, PRIMARY_COLOR } from '../constants'

const PostExcerptTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 0.35em;
  line-height: 1.3em;
  font-family: ${FONT_SANS_SERIF};
  letter-spacing: 0.03em;

  @media (min-width: 992px) {
    font-size: 22px;
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
