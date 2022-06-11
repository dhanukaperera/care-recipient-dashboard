import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	*:focus {
		outline: none;
	}

	html, body, #root {

	}

	html{
		font-size:16px;
		/* background-color: #2B3D49; */
	}

	body, textarea {
		font-family: 'Roboto', sans-serif;
	}

	body {
/* 		background: transparent radial-gradient(closest-side at 50% 50%, #3A586D 0%, #2B3D49 100%) 0% 0% no-repeat padding-box;
 */	}

	a {
		text-decoration:none;
		color: white;
	}

	hr {
		border-width: 0;
	}

	input::placeholder {
		color: #bbb;
	}

	@media screen and (min-width: 768px) {
		html {
			font-size: 14px;
		}
	}

	@media screen and (min-width: 2400px) {
		html {
			font-size: 17px;
		}
	}

`
