import styled from 'styled-components'
import media from 'styled-media-query'

export const PostHeader = styled.header`
  color: ${props => props.theme.postColor};
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;

  ${media.lessThan('large')`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan('large')`
    font-size: 2.8rem;
    padding: 0 1rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    font-size: 1.6rem;
    padding: 0 1rem;
  `}
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    padding: 0 1rem;
  `}
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;

  ${media.lessThan('large')`
    padding: 2rem 0;
    max-width: 100%;
  `}

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: ${props => props.theme.postColor};
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 2;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }

  p {
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    color: ${props => props.theme.postColor};
    border-left: 0.3rem solid ${props => props.theme.highlight};
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid ${props => props.theme.borders};
    margin: 3rem auto;
  }

  #twitter-widget-0,
  .instagram-media .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  a {
    border-bottom: 1px dashed ${props => props.theme.highlight};
    color: ${props => props.theme.highlight};
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: ${props => props.theme.postColor};
    }

    &:hover {
      opacity: 0.8;
    }
  }
`
