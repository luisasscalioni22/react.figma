import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#455a64",
  secondary: "#E32D59",
  third: "#FFB74D",
  thirdLight: "#F196AC",
  white: "#ffffff",
  black: "#000000",
  success: "#50ba9e",
  danger: "#660000"
}
