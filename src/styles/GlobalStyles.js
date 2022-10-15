import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    /*background pallet*/
    --background-1: #353543;
    --background-2: #272833;

    /*purple pallet*/
    --purple-1: #605B91;
    --purple-2: #3B3754;

    /*font and icons pallet*/
    --white-font: #FFFFFF;
    --yellow-dots: #FFC400;
    --green: #71F26D;

    /*fonts*/
    --introduction-font: 'Share Tech Mono', monospace;
    --name-font: 'Montserrat', sans-serif;
    --text-font: 'Inconsolata', monospace;

    font-size: 16px;
  }

  body {
    background: rgb(53,53,67);
    background: linear-gradient(180deg, rgba(53,53,67,1) 0%, rgba(39,40,51,1) 35%, rgba(59,55,84,1) 93%);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)*/


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
