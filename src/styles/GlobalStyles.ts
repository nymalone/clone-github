import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--primary);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);

    transition: color .2s ease-out
  }

  li {
    list-style: none;
  }

  /* a partir do momento que eu coloco um theme provider na minha aplicação
  todos os itens podem receber um prop chamada theme que é justamente o theme que eu to passando no meu <ThemeProvider> */

  :root {
    ${props => {
      const theme = props.theme;

      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      })

      return append;
    }}
  }
`
