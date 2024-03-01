// globalStyles.js
import { createGlobalStyle } from "styled-components";
import * as styles from "./variables";

const GlobalStyle = createGlobalStyle`
/* ==== Document ========================================================================== */

/* 1- Makes the box model more intuitive */
/* 2- Ensure every element will have the same line height to improve vertical rhythm */
/* 3- Ensure every element will have the same default font family */
*,
*::before,
*::after {
    box-sizing: inherit; /* 1 */
    line-height: inherit; /* 2 */
    font-family: inherit;
    color: inherit
}

/* 1- Makes font-size more consistent after orientation changes on mobile Safari */
/* 2- Makes the line hight more consistent in all browsers */
/* 3- Define main font family */
/* 4- Define default font size, not needed if working with px */
html {
    -webkit-text-size-adjust: 100%; /* 1 */
    line-height: ${styles.BODY_LINE_HEIGHT}; /* 2 */
    font-family: ${styles.BODY_FONT}; /* 3 */
    font-size: ${styles.BASE_UNIT}; /* 4 */
}

/* ==== Sections ========================================================================== */

/* 1- removes default margin */
/* 3- Defines main font family or relative font-size*/
/* 3- ensure body height minimum height is the browser height */
body {
    margin: 0; /* 1 */
    font-size: ${styles.BODY_FONT_SIZE}; /* 2 */
    min-height: 100vh; /* 3 */
    color: ${styles.PRIMARY_COLOR_DARK};
    box-sizing: border-box;
}

/* 1- Render the main element consistently in IE. */
main {
    display: block; /* 1 */
}

/* 1- remove browser default margins */
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: ${styles.HEADING_FONT};
    color: ${styles.PRIMARY_COLOR_XDARK};
    margin-block-end: 0; /* 1 */
    line-height: ${styles.HEADING_LINE_HEIGHT_3};
    margin: ${styles.HEADING_FONT_SPACING_SMALL};
    font-weight: ${styles.FONT_WEIGHT_BOLD};
}

h1,
h2,
h3 {
    margin: ${styles.HEADING_FONT_SPACING_LARGE};
}

h1 {
    font-size: ${styles.H1_FONT_SIZE};
    line-height:${styles.HEADING_LINE_HEIGHT_1};
}

h2 {
    font-size: ${styles.H2_FONT_SIZE};
    line-height: ${styles.HEADING_LINE_HEIGHT_2};
}

h3 {
    font-size: ${styles.H3_FONT_SIZE};
}

h4 {
    font-size: ${styles.H4_FONT_SIZE};
}

h5 {
    font-size: ${styles.H5_FONT_SIZE};
}

h6 {
    font-size:${styles.H6_FONT_SIZE};
    font-weight:${styles.FONT_WEIGHT_REGULAR};
}

/* ==== Text content ========================================================================== */

blockquote {
    font-style: italic;
    padding: ${styles.SPACING_SMEDIUM} ${styles.SPACING_SMEDIUM} ${styles.SPACING_LMEDIUM} ${styles.SPACING_XXXLARGE};
}

blockquote code {
    display: block;
    text-align: right;
    line-height: 1.25;
}


figure,
blockquote,
p,
ul,
ol,
menu,
dl {
    margin: ${styles.BODY_FONT_SPACING};
    list-style: none;
    padding: 0;
}

dt {
    font-weight: ${styles.FONT_WEIGHT_BOLD};
}

dd {
    margin: 0 0 0${styles.SPACING_SMEDIUM}; /* 2 */
}

/* 1- improves vertical rythem in firefox */
/* 2 make horizontal rythem more consistent */
li {
    display: block; /* 1 */
    margin: 0 0 0 ${styles.SPACING_MEDIUM}; /* 2 */
}

/* 1 implements new ol counter */
ol {
    counter-reset: ol-counter;
}
/* 1 implements new ol counter */
ol li {
    counter-increment: ol-counter;
}

li::before {
    line-height: 1;
}

/* improves vertical rythem in firefox */
ol li::before {
    font-family: ${styles.HEADING_FONT};
    content: counter(ol-counter) ". ";
    color: ${styles.SECONDARY_COLOR};
} 

li ul,
li menu,
li ol {
    margin-bottom: 0;
}

figcaption {
    font-weight: ${styles.FONT_WEIGHT_LIGHT};
}

/* 1- Add the correct box sizing in Firefox and Chrome. */
/* 2- Show the overflow in Edge and IE. */
/* 3- hide borders as they are not needed*/
hr {
    height: 0; /* 1 */
    overflow: visible; /* 2 */
    margin: ${styles.SPACING_SMALL} 0 ${styles.SPACING_XSMALL} ;
    border: none;
    border-bottom: ${styles.BORDER_SIZE_LARGE} solid ${styles.PRIMARY_COLOR_DARK}; /* 3 */
    padding-top: ${styles.SPACING_XXSMALL};
}

/* 1- Correct the inheritance and scaling of font size in all browsers. */
/* 2- Correct the odd em font sizing in all browsers. */
pre {
    font-family: ${styles.BODY_FONT_SECONDARY}; /* 1 */
    font-size: ${styles.BODY_FONT_SIZE}; /* 2 */
    margin: ${styles.BODY_FONT_SPACING});
}

/* ==== Inline text semantics ====================================================================== */

small {
    font-size: ${styles.SMALL_FONT_SIZE};
}

a {
    text-decoration-skip-ink: auto;
    color: ${styles.SECONDARY_COLOR};
}

a:hover {
    text-decoration: none;
}

/* 1- Correct the inheritance and scaling of font size in all browsers. */
/* 2- Correct the odd em font sizing in all browsers. */
/* 3- Correct line height to insure vertical rythem. */
code,
kbd,
samp {
    font-family: ${styles.BODY_FONT_SECONDARY}; /* 1 */
    font-size: ${styles.BODY_FONT_SIZE}; /* 2 */
    line-height: 1; /* 3 */
}

/* 1- Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. */
abbr[title] {
    text-decoration: underline dotted; /* 1 */
}

var {
    font-weight: ${styles.FONT_WEIGHT_BOLD};
}

/* 1- ensure the text will visually look bold */
b,
strong {
    font-weight: ${styles.FONT_WEIGHT_BOLDER}; /* 1 */
}

/* Prevent sub and sup elements from affecting the line height in all browsers. */

sub,
sup {
    font-size: ${styles.SMALL_FONT_SIZE};
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25rem;
}

sup {
    top: -0.5rem;
}

mark {
    background-color: ${styles.COLOR_HIGHLIGHT});
    color: ${styles.PRIMARY_COLOR_XDARK};
}

::-moz-selection {
    background: ${styles.COLOR_HIGHLIGHT};
}

::selection {
    background: ${styles.COLOR_HIGHLIGHT};
}

/* === Image and multimedia  ========================================================================== */

/* 1- Remove the border on images inside links in IE 10. */
img {
    border-style: none; /* 1 */
}

/* 1- make images more manageble. */
img,
picture,
video,
canvas,
svg {
    max-height: 100%; /* 1 */
    display: block; /* 1 */
}


/* === Forms ========================================================================== */
/*
 * 1- Change the font styles in all browsers.
 * 2- Remove the margin in Firefox and Safari.
 */
progress,
meter,
button,
input,
optgroup,
select,
textarea {
    font-family: inherit; /* 1 */
    font-size: ${styles.BODY_FONT_SIZE}; /* 1 */
    margin: 0 ${styles.SPACING_XXSMALL} ${styles.SPACING_XSMALL};
}

/* 1 remove border width to improve vertical rythem */
input,
select,
textarea,
progress {
    border-radius: ${styles.BORDER_RADIUS_SIZE};
    padding: 0.4rem ${styles.SPACING_SMALL}; /* 1 */
    border: ${styles.BORDER_SIZE_SMALL} solid${styles.PRIMARY_COLOR};
}

input[type="range"]:disabled,
input[type="range"] {
    border: none;
}

meter:focus,
datalist:focus,
button:focus,
input:focus,
select:focus,
progress:focus,
textarea:focus {
    outline: ${styles.BORDER_SIZE_MEDIUM} dotted ${styles.PRIMARY_COLOR};
    outline-offset: .2rem;
    border-color: ${styles.SECONDARY_COLOR};
}

/* 1- Remove the inheritance of text transform in Edge, Firefox, and IE. */
button,
select {
    text-transform: none; /* 1 */
}

button {
    background-color: ${styles.SECONDARY_COLOR};
    transition: background-color ${styles.ANIMATION_LENGTH} ease;
    border: none;
    cursor: pointer;
    color: ${styles.PRIMARY_COLOR_XLIGHT};
    padding: ${styles.SPACING_XXSMALL} ${styles.SPACING_SMALL};
    border-radius: ${styles.BORDER_RADIUS_SIZE};
}

button:hover {
    background-color: ${styles.SECONDARY_COLOR_DARK};
}

button:active {
    background-color: ${styles.SECONDARY_COLOR_XDARK};
}

input[type="radio"],
input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 2rem;
    padding: 0.1rem 0 0;
    border: ${styles.BORDER_SIZE_SMALL} solid  ${styles.SECONDARY_COLOR};
    border-radius: ${styles.BORDER_RADIUS_SIZE};
    width: ${styles.SPACING_SMEDIUM};
    height: ${styles.SPACING_SMEDIUM};
    margin-right: ${styles.SPACING_XSMALL};
}

input[type="radio"] {
    padding: 0;
    border-radius: 50%;
}

input[type="radio"]::before,
input[type="checkbox"]::before {
    content: "";
    width: ${styles.SPACING_SMEDIUM};
    clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
    transform: scale(0);
    background-color: ${styles.SECONDARY_COLOR};
    transition: all ${styles.ANIMATION_LENGTH};
}

input[type="radio"]::before {
    clip-path: circle(40% at 50% 50%);
}

input[type="radio"]:checked::before,
input[type="checkbox"]:checked::before {
    transform: scale(1);
}

input[type="checkbox"]:disabled:before,
input[type="radio"]:disabled:before {
    background: ${styles.PRIMARY_COLOR_XLIGHT};
}

input[type="color"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: ${styles.SPACING_XLARGE};
    height: ${styles.SPACING_XLARGE};
    background-color: transparent;
    cursor: pointer;
    padding: ${styles.SPACING_XXSMALL};
}

input[type="color"]:disabled::-webkit-color-swatch {
    border: ${styles.BORDER_SIZE_SMALL} solid ${styles.PRIMARY_COLOR_XLIGHT};
}

select, 
input[type="time"], 
input[type="week"], 
input[type="month"], 
input[type="date"], 
input[type="datetime-local"],
input[type="range"] {
    height: 3rem;
    display: inline-flex;
    vertical-align: bottom;
}

meter,
progress {
    height: 2rem;
    display: inline-flex;
    vertical-align: text-top;
}

meter,
select,
progress {
    background-color: ${styles.COLOR_WHITE};
}

meter {
    border: ${styles.BORDER_SIZE_SMALL} solid ${styles.PRIMARY_COLOR}; 
    border-radius: ${styles.BORDER_RADIUS_SIZE};
}

/* 1- Remove the default vertical scrollbar in IE 10+. */
/* 2- Prevent textarea to scale outside bounderies. */
textarea {
    overflow: auto; /* 1 */
    resize: vertical; /* 2 */
}

legend {
    background: ${styles.COLOR_WHITE};
    font-weight:${styles.FONT_WEIGHT_BOLD};
    border-left: ${styles.SPACING_XXSMALL} solid ${styles.PRIMARY_COLOR_LIGHT};
    padding: ${styles.SPACING_XXSMALL} ${styles.SPACING_XSMALL};
    font-size: ${styles.H6_FONT_SIZE};
    font-family:${styles.HEADING_FONT};
    margin-bottom: ${styles.SPACING_XSMALL};
}

fieldset {
    padding: ${styles.SPACING_XXSMALL} ${styles.SPACING_XSMALL} ${styles.SPACING_XXSMALL} 0;
    margin: 0 0 ${styles.SPACING_XSMALL};
    border: none;
}


button:disabled,
input:disabled,
optgroup:disabled,
select:disabled,
textarea:disabled {
    cursor: default;
}

button:disabled, 
legend:disabled,
fieldset:disabled {
    opacity: 50%;
    pointer-events: none;
}

input:disabled,
select:disabled,
textarea:disabled {
    border: ${styles.BORDER_SIZE_SMALL} solid ${styles.PRIMARY_COLOR_LIGHT};
    background-color: ${styles.PRIMARY_COLOR_XLIGHT};
    color: ${styles.PRIMARY_COLOR_LIGHT};
}

`;

export default GlobalStyle;
