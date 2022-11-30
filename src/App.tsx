import { FC, useEffect, useState } from "react";

import GanttChart from "./components/GanttChart/GanttChart";
import Button from "./components/Button/Button";
import { TProject } from "./types/chart";
import { getChartData } from "./api/getChartData";
import styles from "./App.module.scss";

const App: FC = () => {
  const [chartData, setChartData] = useState<TProject>();

  const getData = async () => {
    const chartData = await getChartData<TProject>();
    setChartData(chartData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {chartData && (
          <h1
            className={styles.title}
          >{`${chartData.project} / ${chartData.period}`}</h1>
        )}
        <Button text="Export" />
      </div>
      {chartData && <GanttChart data={chartData} />}
    </div>
  );
};

export default App;
