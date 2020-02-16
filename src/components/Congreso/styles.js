import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 720px;
  padding: 30px 0;
  margin: 0 auto;
  h2, h3{
    margin-top: 0;
    margin-bottom: 20px;
    color: var(--oxford-blue);
  }
  h2{
    font-size: 38px;
  }
  h3{
    font-size: 32px;
  }
  p{
    margin-bottom: 30px;
  }
  ul.lists{
    font-family: Roboto;
    color: var(--text);
    margin-left: 15px;
    list-style: disc;
    margin-bottom: 30px;
  }
  .cell p{
    margin-bottom: 5px;
  }
`


