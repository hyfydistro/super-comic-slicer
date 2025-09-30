type IProps = {
  color?: string;
  className?: string;
  ColorFillClassName?: string;
};

const TumblrIcon = ({ color = "#937F4A", className, ColorFillClassName }: IProps) => {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2}}>
        <g transform="matrix(1,0,0,1,-13925,-411)">
            <g id="tumblr" transform="matrix(1.27273,0,0,1.16667,-3681.91,395.833)">
                <rect x="13834" y="13" width="33" height="36" style={{ fill: "none" }}/>
                <clipPath id="_clip1">
                    <rect x="13834" y="13" width="33" height="36"/>
                </clipPath>
                <g clipPath="url(#_clip1)">
                    <g id="tumblr-00.svg" transform="matrix(0.04125,0,0,0.045,13850.5,31)">
                        <g transform="matrix(1,0,0,1,-400,-400)">
                            <path className={ColorFillClassName} d="M400,0C179.063,0 0,179.063 0,400C0,620.938 179.063,800 400,800C620.938,800 800,620.938 800,400C800,179.063 620.938,0 400,0ZM512.813,578.125L512.5,578.125C495.313,586.094 480,591.875 466.094,595C452.188,598.281 437.188,599.844 421.094,599.844C402.813,599.844 386.563,597.5 372.656,592.969C358.594,588.281 346.563,581.719 336.719,573.281C326.719,564.688 319.844,555.625 316.094,545.938C312.188,536.25 310.313,522.344 310.313,504.063L310.313,363.75L266.094,363.75L266.094,307.188C281.875,302.031 295.313,294.688 306.563,285.156C317.813,275.625 326.719,264.219 333.594,250.781C340.313,237.5 345,220.469 347.656,199.844L404.531,199.844L404.531,300.937L499.375,300.937L499.375,363.75L404.531,363.75L404.531,466.25C404.531,489.531 405.781,504.375 408.281,510.937C410.781,517.5 415.313,522.812 422.031,526.719C430.781,532.031 440.938,534.687 452.344,534.687C472.656,534.687 492.656,528.125 512.813,515L512.813,578.125Z" style={{ fill: color, fillRule: "nonzero" }} />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
};

export default TumblrIcon;
