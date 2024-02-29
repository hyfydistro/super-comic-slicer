type IProps = {
    color?: string;
    className?: string;
    ColorFillClassName?: string;
};

const TwitterIcon = ({ color = "#937F4A", className, ColorFillClassName }: IProps) => {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2}}>
      <g transform="matrix(1,0,0,1,-13801,-411)">
          <g id="twitter" transform="matrix(1.27273,0,0,1.16667,-3805.91,395.833)">
              <rect x="13834" y="13" width="33" height="36" style={{fill: "none"}} />
              <clipPath id="_clip1">
                  <rect x="13834" y="13" width="33" height="36"/>
              </clipPath>
              <g clipPath="url(#_clip1)">
                  <g id="twitter-00-neutral.svg" transform="matrix(0.04125,0,0,0.045,13850.5,31)">
                      <g transform="matrix(1,0,0,1,-400,-400)">
                          <g>
                              <path className={ColorFillClassName} d="M400,0C179.086,0 0,179.086 0,400C0,620.914 179.086,800 400,800C620.914,800 800,620.914 800,400C800,179.086 620.914,0 400,0ZM407.697,339.673C407.828,339.68 407.953,339.706 408.087,339.712C406.72,333.85 406.013,327.738 406.013,321.459C406.013,277.23 441.873,241.369 486.109,241.369C509.144,241.369 529.958,251.095 544.569,266.662C559.569,263.709 573.763,258.578 586.958,251.783C589.741,250.433 592.53,249.091 595.27,247.605C590.522,262.189 581.608,274.811 570.05,284.373C566.919,286.836 563.703,289.214 560.166,291.161C560.406,291.133 560.641,291.08 560.88,291.05C560.645,291.195 560.45,291.394 560.211,291.538C573.339,289.967 585.928,286.77 597.884,282.253C600.564,281.328 603.241,280.392 605.895,279.359C595.205,295.233 581.75,309.195 566.247,320.389C566.4,323.822 566.478,327.273 566.478,330.75C566.478,436.587 485.919,558.628 338.597,558.628C293.367,558.628 251.267,545.372 215.822,522.647C222.088,523.386 228.466,523.764 234.93,523.764C264.83,523.764 292.764,515.531 316.778,501.358C322.827,497.873 328.744,494.109 334.392,489.85C334.239,489.847 334.1,489.809 333.947,489.806C334.094,489.692 334.253,489.594 334.398,489.48C304.052,488.92 277.861,471.45 264.752,446.125C262.798,442.236 261.127,438.162 259.808,433.889C264.63,434.795 269.567,435.292 274.652,435.292C279.95,435.292 285.067,434.611 290.075,433.631C291.945,433.369 293.834,433.15 295.678,432.847C295.434,432.797 295.22,432.691 294.977,432.639C295.23,432.573 295.502,432.552 295.752,432.483C259.113,425.125 231.503,392.752 231.503,353.948C231.503,353.642 231.506,353.344 231.509,353.042L231.547,352.956C240.173,357.744 249.817,360.912 260.031,362.237C262.545,362.658 265.064,363.044 267.581,363.264C267.409,363.148 267.261,363.008 267.091,362.892C267.328,362.902 267.555,362.948 267.789,362.956C246.298,348.595 232.159,324.077 232.159,296.291C232.159,283.569 235.266,271.623 240.545,260.942C241.388,259.336 242.136,257.695 243.103,256.139C278.589,299.611 329.847,329.531 388.105,337.623C394.605,338.569 401.123,339.411 407.719,339.792C407.709,339.755 407.706,339.712 407.697,339.673Z" style={{ fillRule: "nonzero", fill: color }} />
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
  );
}

export default TwitterIcon;