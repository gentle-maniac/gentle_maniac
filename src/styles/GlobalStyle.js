import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { device } from "./mediaDevice";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

	html, body, #__next  {
		height: 100%;
	}

	html {
    	background-color: black;
	}

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: NanumSquare;
		font-size: 18px;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
		display: none;
	}

	img {
		user-select: none;
		pointer-events: none;
	}

	h1, h2, h3, h4, h5, h6, span, p, div {
		margin: 0;
		padding: 0;
		word-break: keep-all;
		white-space: pre-wrap;
	}

	h1 {
		@media ${device.mobile} {
			font-size: 28px;
			margin-bottom: 60px;
		}
		font-size: 50px;
    	line-height: 1.4;
		margin-bottom: 80px;
		font-family: NanumSquareExtraBold;
	}

	h2 {
		@media ${device.mobile} {
			font-size: 24px;
			margin-bottom: 10px;
		}
		font-size: 40px;
    	line-height: 1.4;
		font-family: NanumSquareExtraBold;
	}

	p {
		@media ${device.mobile} {
			font-size: 15px;
		}
		font-size: 22px;
    	line-height: 1.5;
		font-family: NanumSquare;
	}

	.b {
		font-family: NanumSquareBold;
	}

	.u {
		text-decoration: underline;
		text-underline-position: under;
	}

	.gold {
		color: #d29b3a;
	}
`;
