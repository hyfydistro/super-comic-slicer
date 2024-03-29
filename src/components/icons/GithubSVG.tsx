type IProps = {
  color?: string;
  className?: string;
  ColorFillClassName?: string;
};

const GithubSVG = ({ color = "#937F4A", className, ColorFillClassName }: IProps) => {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2}}>
      <g transform="matrix(1,0,0,1,-13801,-479)">
          <g id="github" transform="matrix(1.27273,0,0,1.16667,-3805.91,463.833)">
              <rect x="13834" y="13" width="33" height="36" style={{ fill: "none" }} />
              <clipPath id="_clip1">
                  <rect x="13834" y="13" width="33" height="36"/>
              </clipPath>
              <g clipPath="url(#_clip1)">
                  <g id="github-01.svg" transform="matrix(0.04125,0,0,0.045,13850.5,31)">
                      <g transform="matrix(1,0,0,1,-400,-400)">
                          <clipPath id="_clip2">
                              <rect x="0" y="0" width="800" height="800"/>
                          </clipPath>
                          <g clipPath="url(#_clip2)">
                              <g>
                                  <path className={ColorFillClassName} d="M500.156,395.938C486.719,393.594 472.656,393.906 458.906,394.688C427.656,396.406 396.406,399.375 365.156,396.562C350.313,395.156 335.313,393.75 320.313,394.062C293.125,394.531 270.313,403.437 256.875,429.375C250.156,442.187 248.594,455.937 249.062,470.156C250.156,510.156 267.5,532.969 305.625,544.375C336.25,553.438 367.656,554.688 399.219,554.063C410.938,554.063 422.656,554.687 434.375,553.906C458.594,552.5 482.344,548.906 505.313,540.469C529.063,531.719 543.281,515 548.438,490.781C550.469,481.406 551.406,471.562 551.25,462.031C550.938,429.688 529.063,400.781 500.156,395.938ZM346.406,501.719C336.25,512.813 321.563,512.969 311.094,502.188C303.438,494.375 299.063,482.344 299.063,467.344C299.375,457.188 302.344,446.094 311.094,437.188C321.563,426.406 336.25,426.563 346.406,437.5C361.719,454.063 361.719,485.156 346.406,501.719ZM488.438,502.5C478.906,512.344 465.156,512.656 455,503.594C437.5,487.656 437.5,452.188 455,436.094C465,426.875 478.75,427.188 488.438,437.031C497.344,446.094 500.313,457.5 500.781,469.688C500.313,482.031 497.188,493.281 488.438,502.5Z" style={{ fill: color, fillRule: "nonzero", stroke: color, strokeWidth: "1px" }} />
                                  <path className={ColorFillClassName} d="M400,0C179.063,0 0,179.063 0,400C0,620.938 179.063,800 400,800C620.938,800 800,620.938 800,400C800,179.063 620.938,0 400,0ZM605,435C602.813,452.812 599.063,471.094 592.656,487.813C573.906,535.781 536.406,562.188 486.719,570.156C458.281,574.687 429.063,574.844 397.5,577.188C369.219,574.687 338.125,574.375 307.969,569.063C249.531,558.75 209.844,517.813 198.281,459.219C192.344,429.375 190.625,399.375 199.844,369.688C204.688,354.375 212.656,340.781 222.969,328.438C224.375,326.875 225.625,324.531 225.469,322.5C223.75,295.625 226.875,269.063 234.844,243.437C241.406,222.031 236.563,223.281 260.313,229.531C288.906,237.031 313.906,252.5 338.438,268.594C341.25,270.469 345.625,271.25 349.063,270.625C383.75,265.313 418.281,265 452.969,271.094C455.469,271.563 458.75,270.625 461.094,269.219C482.188,255.469 503.906,243.125 527.656,234.531C536.25,231.406 545.313,229.375 554.063,226.719C557.969,225.625 559.688,227.031 561.094,230.781C571.719,260.469 576.094,290.938 574.531,322.344C574.375,324.063 575.313,326.406 576.406,327.813C603.125,358.75 609.844,395.625 605,435Z" style={{ fill: color, fillRule: "nonzero", stroke: color, strokeWidth: "1px" }} />
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>
  );
};

export default GithubSVG;
