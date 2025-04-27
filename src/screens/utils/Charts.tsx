import { CandlestickChart, LineChart } from "react-native-wagmi-charts";
import { coinDetailsStyles as styles } from "../styles";
import { Colors } from "../../common/Colors";
import { CandlestickChartData } from "../../types";

export const CandlestickCharts = ({
  data,
}: {
  data: CandlestickChartData[];
}) => {
  return (
    <CandlestickChart.Provider data={data}>
      <CandlestickChart width={320}>
        <CandlestickChart.Candles
          positiveColor={Colors.electricLime}
          negativeColor={Colors.accentRed}
        />
        <CandlestickChart.Crosshair color={Colors.electricLime}>
          <CandlestickChart.Tooltip
            textStyle={styles.tooltip}
            style={styles.tooltipWrapper}
          />
        </CandlestickChart.Crosshair>
      </CandlestickChart>
    </CandlestickChart.Provider>
  );
};

export const LineCharts = ({ data }: { data: CandlestickChartData[] }) => {
  const candlestickData = data.map((item) => ({
    timestamp: item.timestamp,
    value: item.close,
  }));
  return (
    <LineChart.Provider data={candlestickData}>
      <LineChart width={320}>
        <LineChart.Path color={"red"} />
        <LineChart.CursorLine />
        <LineChart.CursorCrosshair color={Colors.electricLime}>
          <LineChart.Tooltip
            textStyle={styles.tooltip}
            style={styles.tooltipWrapper}
          />
        </LineChart.CursorCrosshair>
      </LineChart>
    </LineChart.Provider>
  );
};

export const MiniLineChart = ({ data }: { data: CandlestickChartData[] }) => {
  const candlestickData = data.map((item) => ({
    timestamp: item.timestamp,
    value: item.close,
  }));
  return (
    <LineChart.Provider data={candlestickData}>
      <LineChart width={100} height={80}>
        <LineChart.Path color={Colors.electricLime} />
      </LineChart>
    </LineChart.Provider>
  );
};
