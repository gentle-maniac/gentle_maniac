import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400');
    /* ${normalize} */

	html, body, #__next  {
		height: 100%;
		margin: 0px;
		padding: 0px;
	}

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: Montserrat, sans-serif;
		font-size: 18px;
		line-height: 1.5;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	a {
		color: hsl(350, 100%, 92%);
		text-decoration: none;
		display: inline-block;
	}

	::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
		display: none;
	}
`;
