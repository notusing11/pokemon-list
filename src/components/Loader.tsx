import styled from 'styled-components'

const Loader = styled.div`
  & {
    margin: 4rem auto;
    opacity: 0.3;
    
    width: 60px;
    aspect-ratio: 4;
    --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
    background:
      var(--_g) 0% 50%,
      var(--_g) 50% 50%,
      var(--_g) 100% 50%;
    background-size: calc(100% / 3) 100%;
    animation: l7 1s infinite linear;
  }
  @keyframes l7 {
    33% {
      background-size:
        calc(100% / 3) 0%,
        calc(100% / 3) 100%,
        calc(100% / 3) 100%;
    }
    50% {
      background-size:
        calc(100% / 3) 100%,
        calc(100% / 3) 0%,
        calc(100% / 3) 100%;
    }
    66% {
      background-size:
        calc(100% / 3) 100%,
        calc(100% / 3) 100%,
        calc(100% / 3) 0%;
    }
  }
  // reference : https://css-loaders.com/dots/
`
export default Loader
