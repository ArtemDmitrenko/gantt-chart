import { FC } from "react";

import { TProject } from "../../types/chart";
import DatesHeader from "../DatesHeader/DatesHeader";
import WorkItemList from "../WorkItemList/WorkItemList";
import styles from "./gantt-chart.module.scss";

type GanttChartProps = {
  data: TProject;
};

const GanttChart: FC<GanttChartProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <WorkItemList chart={data.chart} />
      <DatesHeader period={data.period} chart={data.chart} />
    </div>
  );
};

export default GanttChart;
