
type IProps = {
  color?: string;
  className?: string;
  ColorFillClassName?: string;
};

const FacebookIcon = ({ color = "#937F4A", className, ColorFillClassName }: IProps) => {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2}}>
        <g transform="matrix(1,0,0,1,-13863,-479)">
            <g id="github" transform="matrix(1.27273,0,0,1.16667,-3743.91,463.833)">
                <rect x="13834" y="13" width="33" height="36" style={{ fill: "none" }} />
                <clipPath id="_clip1">
                    <rect x="13834" y="13" width="33" height="36"/>
                </clipPath>
                <g clipPath="url(#_clip1)">
                    <g id="facebook.svg" transform="matrix(0.04125,0,0,0.045,13850.5,31)">
                        <g transform="matrix(1,0,0,1,-400,-400)">
                            <clipPath id="_clip2">
                                <rect x="0" y="0" width="800" height="800"/>
                            </clipPath>
                            <g clipPath="url(#_clip2)">
                                <path className={ColorFillClassName} d="M400,0C179.063,0 0,179.063 0,400C0,620.938 179.063,800 400,800C620.938,800 800,620.938 800,400C800,179.063 620.938,0 400,0ZM488.281,332.188L483.75,392.031L422.344,392.031L422.344,599.844L344.844,599.844L344.844,392.031L303.438,392.031L303.438,332.188L344.844,332.188L344.844,292.031C344.844,274.375 345.313,247.031 358.125,230C371.719,212.031 390.313,199.844 422.344,199.844C474.531,199.844 496.406,207.344 496.406,207.344L486.094,268.594C486.094,268.594 468.906,263.594 452.813,263.594C436.719,263.594 422.344,269.375 422.344,285.469L422.344,332.188L488.281,332.188Z" style={{ fill: color, fillRule: "nonzero", stroke: "rgb(117,127,74)", strokeWidth: "1px" }} />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
};

export default FacebookIcon;
