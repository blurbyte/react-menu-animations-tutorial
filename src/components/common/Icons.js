/*eslint-disable react/no-multi-comp */
import React, {PropTypes} from 'react';

const HamburgerIcon = ({width = 42, height = 20, fill = "#54534e"}) => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 68 32">
    <path fill={fill} d="M66 4H2C.896 4 0 3.104 0 2s.896-2 2-2h64c1.105 0 2 .896 2 2s-.894 2-2 2zm0 14H2c-1.104 0-2-.895-2-2s.896-2 2-2h64c1.105 0 2 .896 2 2s-.894 2-2 2zm0 14H2c-1.104 0-2-.896-2-2s.896-2 2-2h64c1.105 0 2 .896 2 2s-.894 2-2 2z"/>
  </svg>
);

HamburgerIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

const CodeIcon = ({width = 55, height = 44, fill = "#54534e", backgroundFill = "#fff"}) => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 92 74">
    <path className="background" fill={backgroundFill} d="M82 44.304c0 2.21-1.79 4-4 4H14c-2.21 0-4-1.79-4-4V6.237c0-2.21 1.79-4 4-4h64c2.21 0 4 1.79 4 4v38.067zm2.834 27.71c5.207 0 6.227-4.862 4.166-7.793-6.266-8.91-2.293-3.28-7-10.166H10C5.292 60.94 9.266 55.31 3 64.22c-2.06 2.932-1.042 7.793 4.167 7.793h77.667z"/>
    <path fill={fill} d="M78 50.054H14c-3.31 0-6-2.69-6-6V5.987c0-3.31 2.69-6 6-6h64c3.31 0 6 2.69 6 6v38.067c0 3.31-2.69 6-6 6zM14 3.987c-1.103 0-2 .897-2 2v38.067c0 1.104.897 2 2 2h64c1.104 0 2-.896 2-2V5.987c0-1.103-.896-2-2-2H14zM90.637 63.07c-3.735-5.31-3.816-5.436-4.27-6.124-.318-.484-.813-1.238-2.717-4.02-.372-.546-.99-.872-1.65-.872H10c-.66 0-1.278.326-1.65.87-1.904 2.783-2.4 3.537-2.717 4.022-.453.688-.534.813-4.27 6.125C-.196 65.294-.44 68.21.75 70.5c1.16 2.234 3.5 3.516 6.416 3.516h77.667c2.918 0 5.257-1.28 6.417-3.516 1.19-2.29.948-5.206-.613-7.427zm-81.66-3.928c.276-.422.69-1.05 2.08-3.088h69.886c1.39 2.037 1.804 2.666 2.08 3.088.422.642.547.83 2.922 4.21.693 1.114.896 2.064.562 2.675-.354.645-1.343.986-2.858.986H8.35c-1.516 0-2.504-.342-2.858-.986-.335-.61-.132-1.56.562-2.674 2.374-3.38 2.5-3.57 2.92-4.21zM87.7 68.654c-.583 1.123-1.88 1.36-2.866 1.36H7.167c-.986 0-2.284-.237-2.868-1.36-.424-.814-.378-1.922.08-2.842.043.246.12.48.237.696.548.998 1.805 1.505 3.735 1.505H83.65c1.93 0 3.186-.507 3.733-1.505.12-.216.194-.45.238-.696.458.92.504 2.027.08 2.842zM38.17 35.268c.15-.23.084-.54-.147-.692l-14.61-9.496 14.612-9.616c.23-.15.294-.46.143-.692-.15-.23-.46-.295-.692-.143l-15.25 10.035c-.142.093-.226.25-.226.42 0 .167.086.325.228.417l15.25 9.913c.085.055.18.08.273.08.164 0 .324-.08.42-.227zm16.35.147l15.252-9.913c.142-.092.228-.25.228-.418 0-.17-.084-.326-.225-.42L54.523 14.63c-.23-.154-.54-.09-.69.142-.153.23-.09.54.142.692l14.61 9.616-14.608 9.496c-.23.15-.297.46-.146.692.097.147.257.228.42.228.093 0 .188-.027.27-.08zm-13.073-.196l10-19.95c.123-.247.023-.547-.223-.67-.248-.126-.55-.025-.672.222l-10 19.95c-.124.246-.024.546.223.67.072.036.148.053.224.053.183 0 .36-.1.447-.276zm10.367 29.787c.464 0 .86-.23 1.06-.612s.16-.866-.094-1.23c-.22-.312-.214-.316-.296-.42-.55-.705-.894-.737-1.37-.737H40.886c-.478 0-.82.032-1.372.736-.082.104-.076.108-.296.422-.256.363-.292.846-.093 1.23s.594.61 1.058.61h11.63z"/>
  </svg>
);

CodeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  backgroundFill: PropTypes.string
};

const DesignIcon = ({width = 45, height = 44, fill = "#54534e", backgroundFill = "#fff"}) => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 75 74">
    <rect className="background" x="29.838" y="-3.084" transform="rotate(-135 37.84 37.01)" fill={backgroundFill} width="16" height="80.187"/>
    <path fill={fill} d="M60.71-.005L.876 59.83l14.14 14.145 59.84-59.837L60.71-.005zM60.7 16.96c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l2.837 2.837-5.656 5.656-2.837-2.835c-.194-.196-.512-.195-.705 0-.196.195-.196.51 0 .706l2.835 2.837-28.72 28.72-2.837-2.837c-.194-.195-.512-.195-.707 0s-.194.512 0 .707l2.837 2.837-5.657 5.657-2.837-2.837c-.194-.193-.512-.195-.707 0s-.195.514 0 .707l2.836 2.838-5.66 5.658-8.482-8.488L60.71 5.652l8.486 8.485-5.66 5.66L60.7 16.96z"/>
    <path className="background" fill={backgroundFill} d="M58.514 69.67c3.124 3.124 8.19 3.124 11.314 0s3.124-8.19 0-11.314l-51.1-51.1L3.03 2.87l4.388 15.7 51.098 51.1z"/>
    <path fill={fill} d="M71.242 56.94L19.772 5.47.146-.012 5.63 19.615l51.47 51.47c1.89 1.888 4.4 2.928 7.07 2.928s5.184-1.04 7.072-2.93c3.9-3.898 3.9-10.242 0-14.142zm-4.596 1.063l-8.485 8.485L9.587 17.914c1.6-1.028 3.192-2.316 4.682-3.805 1.498-1.5 2.78-3.086 3.804-4.682l48.574 48.575zM8.05 7.893c.403-.403.782-.812 1.15-1.223l8.013 2.24c-.987 1.53-2.232 3.072-3.65 4.492-1.434 1.432-2.96 2.67-4.493 3.655L6.83 9.04c.41-.367.818-.746 1.22-1.148zm60.365 60.363c-1.134 1.133-2.64 1.757-4.243 1.757s-3.11-.624-4.243-1.757l-1.062-1.06 8.485-8.486 1.06 1.06c2.34 2.34 2.34 6.147.002 8.486z"/>
  </svg>
);

DesignIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  backgroundFill: PropTypes.string
};

const IdeasIcon = ({width = 30, height = 44, fill = "#54534e", backgroundFill = "#fff"}) => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 49 74">
    <path className="background" fill={backgroundFill} d="M24.5 2.16c-12.18 0-22.052 9.873-22.052 22.05 0 5.968 2.215 11.175 6.045 15.165 5.03 5.24 5.902 8.235 5.902 14.478v9.84c0 1.566 2.417 5.304 5.525 5.304h9.16c2.787 0 5.525-3.872 5.525-5.304v-9.84c0-6.242.885-9.244 5.912-14.488 3.82-3.984 6.034-9.196 6.034-15.153.002-12.18-9.87-22.052-22.05-22.052z"/>
    <path fill={fill} d="M48.552 24.05C48.552 10.79 37.762 0 24.5 0S.448 10.79.448 24.05C.448 30.38 2.73 36.1 7.05 40.6c3.377 3.518 4.665 5.766 5.118 8.97h-.558c-1.104 0-2 .896-2 2s.896 2 2 2h.783v10.122c0 2.5 3.18 7.304 7.526 7.304h.502C20.975 72.733 22.582 74 24.5 74s3.525-1.267 4.077-3.004h.503c4.043 0 7.525-4.9 7.525-7.304v-3.986l.002-6.136h.783c1.104 0 2-.896 2-2s-.896-2-2-2h-.558c.455-3.202 1.745-5.453 5.128-8.98 4.312-4.496 6.592-10.215 6.592-16.54zM16.395 63.693V60.4l16.21-3.614v2.92h.004v.852l-16.08 3.585c-.075-.177-.124-.334-.135-.45zm2.076-32.29l-.88.49c-.962.544-1.522.702-2.498.702-.903 0-1.752-.352-2.39-.99-.64-.638-.99-1.486-.99-2.39 0-.903.352-1.75.99-2.39.638-.64 1.487-.99 2.39-.99.9 0 1.75.352 2.39.99.564.564.99 1.75.99 2.762v1.816zm6.03-2.23c.25.148.512.298.782.454l4.246 2.363v17.58H19.47V31.99l4.255-2.368c.268-.154.526-.302.775-.45zm-2.382-3.028c-.644-.672-.998-1.524-.998-2.398 0-.902.352-1.75.99-2.39.638-.64 1.487-.99 2.39-.99.902 0 1.75.35 2.39.99.638.64.99 1.487.99 2.39 0 .902-.353 1.75-1 2.398-.745.778-1.512 1.33-2.38 1.863-.87-.536-1.636-1.087-2.382-1.863zm10.49 27.426v.02c0 .012 0 1.525-.002 2.17l-16.21 3.615V53.57h16.21zM29.08 66.996h-9.16c-1.125 0-2.208-1.006-2.87-1.945l15.56-3.47v2.026c-.152.873-2.087 3.39-3.53 3.39zm3.727-17.426H30.53V32.546l.39.217c1.11.63 1.837.83 2.99.83 1.17 0 2.27-.455 3.097-1.282.828-.828 1.283-1.927 1.283-3.095 0-1.17-.455-2.27-1.283-3.098-.826-.828-1.926-1.283-3.097-1.283-1.17 0-2.27.456-3.098 1.283-.755.755-1.283 2.182-1.283 3.47v1.258l-3.754-2.09-.308-.176c.75-.49 1.44-1.02 2.128-1.737.828-.828 1.284-1.928 1.284-3.098s-.456-2.27-1.284-3.096c-.826-.83-1.926-1.286-3.096-1.286-1.17 0-2.27.456-3.097 1.284-.828.828-1.283 1.927-1.283 3.097 0 1.134.453 2.23 1.276 3.09.69.72 1.383 1.253 2.137 1.744-.1.056-.2.114-.3.172l-3.763 2.093v-1.26c0-1.288-.527-2.714-1.282-3.47-.83-.826-1.928-1.282-3.097-1.282-1.17 0-2.27.456-3.097 1.283s-1.282 1.927-1.282 3.098c0 1.17.457 2.27 1.283 3.096.828.828 1.928 1.283 3.098 1.283 1.153 0 1.88-.202 2.987-.83l.393-.218V49.57h-2.275c-.48-4.133-2-7.304-6.26-11.74-3.59-3.74-5.487-8.504-5.487-13.78C4.448 12.996 13.444 4 24.5 4s20.05 8.995 20.05 20.05c0 5.272-1.893 10.034-5.478 13.77-4.262 4.45-5.785 7.62-6.265 11.75zm-2.28-18.17v-1.814c0-1.01.427-2.197.99-2.762 1.277-1.278 3.506-1.277 4.78 0 .64.64.99 1.488.99 2.39 0 .902-.35 1.75-.99 2.39-.637.64-1.485.99-2.39.99-.977 0-1.537-.157-2.5-.703l-.88-.49z"/>
  </svg>
);

IdeasIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  backgroundFill: PropTypes.string
};

const ResearchIcon = ({width = 38, height = 44, fill = "#54534e", backgroundFill = "#fff"}) => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 62 74">
    <path className="background" fill={backgroundFill} d="M40 1.987V26.38l18.503 34.31c.677 1.254 1.298 2.59 1.298 4.123 0 3.977-3.224 7.2-7.2 7.2H9.4c-3.977 0-7.2-3.224-7.2-7.2 0-1.53.617-2.865 1.293-4.12L22 26.38V1.988h18z"/>
    <path fill={fill} d="M60.263 59.74L42 25.873V3.987h1c1.105 0 2-.896 2-2s-.895-2-2-2H19c-1.104 0-2 .896-2 2s.896 2 2 2h1v21.887L1.732 59.744C.936 61.22.2 62.854.2 64.812c0 5.074 4.127 9.2 9.2 9.2h43.2c5.073 0 9.2-4.126 9.2-9.2 0-1.953-.738-3.593-1.537-5.073zM38 3.986V26.38c0 .33.082.657.24.948l5.236 9.712H18.522l2.44-4.527h4.256c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-3.716l2.257-4.185c.157-.29.24-.618.24-.95V3.988h14zm14.6 66.026H9.4c-2.867 0-5.2-2.334-5.2-5.2 0-1.014.402-1.965 1.053-3.17l2.767-5.13h4.293c.276 0 .5-.225.5-.5 0-.277-.224-.5-.5-.5H8.56l5.932-11h4.227c.275 0 .5-.225.5-.5 0-.277-.225-.5-.5-.5h-3.69l2.953-5.474h26.033l12.726 23.597c.654 1.212 1.06 2.165 1.06 3.175-.002 2.867-2.335 5.2-5.203 5.2zm-11.55-15.89c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c2.482 0 4.5-2.018 4.5-4.5s-2.017-4.5-4.5-4.5zm0 8c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm-8.044-10.068c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-6c-1.38 0-2.5 1.122-2.5 2.5s1.12 2.5 2.5 2.5c1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5zm-8.958 19.042c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-6c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c1.378 0 2.5-1.12 2.5-2.5s-1.122-2.5-2.5-2.5z"/>
  </svg>
);

ResearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  backgroundFill: PropTypes.string
};

const ChartsIcon = ({width = 44, height = 44, fill = "#54534e", backgroundFill = "#fff"}) => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 74 74">
    <path className="background" fill={backgroundFill} d="M72 68c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4h62c2.21 0 4 1.79 4 4v62z"/>
    <path fill={fill} d="M68 0H6C2.69 0 0 2.69 0 6v62c0 3.31 2.69 6 6 6h62c3.31 0 6-2.69 6-6V6c0-3.31-2.69-6-6-6zM19.5 45.492c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm.5.95c1.2-.175 2.204-.95 2.687-2.02l10.86 3.103c-.02.154-.047.307-.047.467 0 1.758 1.31 3.204 3 3.45V70H20V46.44zm19.5 1.55c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm-2 3.45c1.69-.246 3-1.692 3-3.45 0-.45-.093-.88-.25-1.276l11.518-6.563c.543.686 1.33 1.158 2.232 1.29V70H37.5V51.44zm17-10.95c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm0-6c-1.93 0-3.5 1.57-3.5 3.5 0 .46.095.898.257 1.3l-11.51 6.56c-.64-.82-1.628-1.36-2.747-1.36-1.42 0-2.638.854-3.187 2.07l-10.86-3.103c.02-.155.047-.308.047-.468 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 .194.026.38.058.566L4 50.43V18h66v10.61l-12.737 7.26c-.64-.833-1.635-1.378-2.763-1.378zM6 4h62c1.103 0 2 .897 2 2v8H4V6c0-1.103.897-2 2-2zM4 68V51.582l12.372-7.05c.5 1.012 1.47 1.74 2.628 1.91V70H6c-1.103 0-2-.896-2-2zm64 2H55V41.44c1.69-.244 3-1.69 3-3.448 0-.443-.092-.863-.242-1.254L70 29.762V68c0 1.104-.897 2-2 2z"/>
  </svg>
);

ChartsIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  backgroundFill: PropTypes.string
};

const DocsIcon = ({width = 39, height = 44, fill = "#54534e", backgroundFill = "#fff"}) => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 74">
    <path className="background" fill={backgroundFill} d="M62.064 60.242V68c0 2.21-1.79 4-4 4H5.98c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4h48.04c2.21 0 4 1.79 4 4v54.242h4.044z"/>
    <path fill={fill} d="M62.02 58.242h-2.04V6c0-3.31-2.69-6-6-6h-48c-3.31 0-6 2.69-6 6v62c0 3.31 2.69 6 6 6h52.042c3.31 0 6-2.69 6-6v-7.758c0-1.104-.896-2-2-2zM3.98 6c0-1.103.896-2 2-2h48c1.1 0 2 .897 2 2v52.242h-46c-1.105 0-2 .896-2 2v7.494c0 1.104-.898 2-2 2s-2-.896-2-2V6zm56.04 62c0 1.104-.895 2-2 2H11.534c.286-.7.446-1.463.446-2.264v-5.494h48.04V68zm-8.54-18.403h-43c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h43c.275 0 .5.224.5.5s-.225.5-.5.5zm0-9h-43c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h43c.275 0 .5.224.5.5s-.225.5-.5.5zm0-9h-24.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h24.5c.275 0 .5.224.5.5s-.225.5-.5.5zm0-9h-24.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h24.5c.275 0 .5.224.5.5s-.225.5-.5.5zm0-9h-24.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h24.5c.275 0 .5.224.5.5s-.225.5-.5.5zm-29.5 18H8.48c-.277 0-.5-.224-.5-.5v-18c0-.276.223-.5.5-.5h13.5c.275 0 .5.224.5.5v18c0 .276-.224.5-.5.5zm-13-1h12.5v-17H8.98v17z"/>
  </svg>
);

DocsIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  backgroundFill: PropTypes.string
};

const BlurbyteLogo = ({width = 120, height = 25, fill = "#ff4326"}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 405 82" aria-labelledby="title">
    <title id="title">Blurbyte</title>
    <path fill={fill} d="M300.1533 0h-3.9873c-4.456 0-7.2715 2.1162-8.211 6.1157l-4.9237 23.558c-.705 3.528-2.1123 7.2906-4.458 7.2906-1.876 0-3.5195-1.1748-4.6914-7.0562L269.1904 7.527C268.0175 2.5868 265.672 0 261.6835 0h-4.2226c-3.2833 0-7.0372 1.1758-4.2228 10.583.703 2.587 15.4834 47.0762 15.4834 51.0742 0 3.293-2.3467 6.3496-6.8047 7.291-4.2218.9414-6.8028 2.8223-6.8028 6.585 0 4 2.581 6.3506 6.333 6.3506h5.8662c6.8008 0 14.3086-2.1162 19-16.6973l18.5313-57.191c.2354-.9413.4697-2.0536.4697-3.699 0-2.353-2.3466-4.2965-5.161-4.2965M75.9936 0h-3.753c-4.221 0-7.0365 3.293-7.0365 7.527v65.772c0 6.115 2.579 8.701 9.6167 8.701 5.8656 0 8.6796-2.5858 8.6796-7.5263V8.7007C83.5006 2.8213 80.92 0 75.9936 0M201.459.041h-3.7534c-3.9873 0-5.8638 3.0566-5.8638 7.2905v63.733c0 7.5253 1.8765 9.408 7.9766 9.408 5.3936 0 4.9248-1.6464 10.5557-1.6464s6.0987 3.0577 14.7784 3.0577c14.544 0 25.8027-10.8193 25.8027-32.9258 0-19.05-10.5556-29.398-25.0985-29.398-6.5684 0-9.8516 2.587-13.6055 2.587-3.286 0-4.9268-3.7628-4.9268-7.0553V7.3315c0-4.94-2.581-7.2905-5.8652-7.2905M9.6016.041H5.849C1.862.041-.0146 3.0976-.0146 7.3315v63.733c0 7.5253 1.8765 9.408 7.9746 9.408 5.3954 0 4.9257-1.6464 10.556-1.6464 5.6295 0 6.0982 3.0577 14.7765 3.0577 14.546 0 25.8047-10.8193 25.8047-32.9258 0-19.05-10.5547-29.398-25.0996-29.398-6.5688 0-9.852 2.587-13.6055 2.587-3.284 0-4.9257-3.7628-4.9257-7.0553V7.3315c0-4.94-2.5806-7.2905-5.8647-7.2905M133.17 1.921h-3.519c-3.048 0-5.3937 2.1186-5.3937 5.8812 0 3.057 1.6406 5.644 7.27 5.644 3.9883 0 6.8032-1.412 6.8032-5.8804 0-3.997-2.815-5.645-5.1606-5.645m-24.8643 0h-3.2842c-3.7534 0-5.6284 2.8238-5.6284 5.8814 0 3.057 1.6407 5.644 7.27 5.644 3.988 0 6.8033-1.412 6.8033-5.8804 0-3.5262-2.3457-5.645-5.1606-5.645M376.161 17.561c-15.247 0-29.792 9.8765-29.792 33.8647C346.369 71.416 359.2706 82 376.3946 82c17.5947 0 26.038-10.584 26.038-14.3457 0-2.8232-4.2216-6.1143-7.9755-6.1143-6.0977 0-7.7412 8.2305-17.8262 8.2305-6.1006 0-12.1992-5.6445-12.1992-10.8184 0-3.997 2.8145-6.8192 8.21-6.8192h24.3965c5.631 0 7.9767-1.4102 7.9767-6.8203 0-4.704-3.2852-27.7515-28.8536-27.7515m-214.625.2354c-7.0355 0-8.9125 3.293-8.9125 9.1724v43.9775c0 6.1162 2.3457 9.4072 6.8032 9.4072h4.6914c4.9254 0 7.271-3.0566 7.271-8.9375V47.1943c0-5.4102 3.0504-9.6426 9.1495-11.524 6.3335-1.8827 7.7407-4.2323 7.7407-9.8773 0-4.4692-1.877-6.8208-5.8647-6.8208-3.5186 0-4.4565 1.411-7.975 1.411-2.816 0-5.6294-2.5868-12.9034-2.5868m-23.4388 2.1152h-2.5815c-4.9253 0-7.271 2.1182-7.271 6.5864v24.6953c0 11.288-3.754 16.9316-11.024 16.9316-7.038 0-9.3837-4.9386-9.3837-15.052V26.498c0-4.4683-3.0498-6.5864-6.5688-6.5864h-3.753c-3.2846 0-6.099 2.3535-6.099 6.5864v38.0996C91.416 75.414 97.5152 82 109.0098 82c9.3838 0 8.914-3.0566 15.9507-3.0566 4.6904 0 4.6904 1.4102 11.2593 1.4102 4.9263 0 8.4443-2.1152 8.4443-6.584V27.203c0-4.938-2.1108-7.2914-6.5668-7.2914m-108.791 50.683c-7.9746 0-13.6045-6.8202-13.6045-20.46 0-13.642 6.8032-19.5214 14.0732-19.5214 9.3832 0 13.6063 9.172 13.6063 21.166 0 12.7003-6.5688 18.8155-14.075 18.8155m191.8587 0c-7.9756 0-13.6074-6.8203-13.6074-20.46 0-13.642 6.8047-19.5215 14.0752-19.5215 9.3838 0 13.6055 9.172 13.6055 21.166 0 12.7003-6.5664 18.8155-14.0733 18.8155m153.8233-27.871c-6.334 0-9.6182-1.879-9.6182-5.4068 0-4.2345 6.0997-7.526 10.791-7.526 5.629 0 10.5548 4.233 10.5548 7.995 0 3.294-3.9883 4.9376-11.7275 4.9376M324.9913 0c-8.4474 0-9.1505 5.8813-9.1505 8.4683 0 2.5874 0 4.273-1.173 6.86-.9384 2.351-7.036 4.7025-7.036 8.701 0 3.9962 4.2217 5.6427 6.0977 7.9957 1.877 2.3506 2.581 5.8784 2.3457 10.5835v21.9893C316.0752 76.1222 322.6445 82 335.547 82c6.333 0 9.3808-2.5858 9.3808-7.5263 0-7.0527-7.7393-7.0527-9.6152-11.0518-.9395-1.882-1.4082-3.0587-1.4082-7.0567v-14.464c0-3.998-.2334-5.4086.9385-7.9945 2.1112-4.7036 9.3817-3.9985 9.3817-9.643 0-5.644-6.8027-5.644-8.6777-8.467-1.1738-1.8808-1.6426-4.741-1.6426-7.095 0-3.292-.7032-8.7018-8.9132-8.7018"/>
  </svg>
);

BlurbyteLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

export {HamburgerIcon, CodeIcon, DesignIcon, IdeasIcon, ResearchIcon, ChartsIcon, BlurbyteLogo, DocsIcon};