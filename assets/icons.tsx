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
