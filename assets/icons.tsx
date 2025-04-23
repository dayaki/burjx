import Svg, { SvgProps, Path, Circle } from "react-native-svg";

type Props = SvgProps & {
  xmlns?: string;
  xmlSpace?: string;
};
export const SearchIcon = (props: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={10.824} cy={10.324} r={7.623} stroke="#fff" />
    <Path
      fill="#fff"
      d="M19.947 19.818a.5.5 0 0 0 .707-.707l-.707.707Zm-3.724-3.723 3.724 3.723.707-.707-3.724-3.723-.707.707Z"
    />
  </Svg>
);

export const BackIcon = (props: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M5.646 10.646a.5.5 0 0 0 0 .708l3.182 3.182a.5.5 0 1 0 .708-.708L6.707 11l2.829-2.828a.5.5 0 1 0-.708-.708l-3.182 3.182ZM16 11.5a.5.5 0 0 0 0-1v1Zm-10 0h10v-1H6v1Z"
    />
  </Svg>
);

export const FullScreenIcon = (props: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#CDFF00"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 9V4h-5M4 13v5h5M18 4l-6 6M10 12l-6 6"
    />
  </Svg>
);
