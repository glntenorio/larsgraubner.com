import styled from 'styled-components'

const PostExcerpt = styled.article`
  & + article {
    margin-top: 40px;

    @media (min-width: 992px) {
      margin-top: 100px;
    }
  }
`

export default PostExcerpt
