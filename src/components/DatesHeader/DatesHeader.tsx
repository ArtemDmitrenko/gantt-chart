import { FC } from "react";
import {
  getDataFromHolePeriod,
  getStartedDay,
} from "../../helpers/formatDates";
import style from "./dates-header.module.scss";
import SausageList from "../SausageList/SausageList";
import { TChart } from "../../types/chart";
import { getWorksArrayWithLevel } from "../../helpers/getWorksArrayWithLevel";

type TDatesHeaderProps = {
  period: string;
  chart: TChart;
};

const DatesHeader: FC<TDatesHeaderProps> = ({ period, chart }) => {
  const datesArr = getDataFromHolePeriod(period);
  const startDay = getStartedDay(period);
  const sausageData = getWorksArrayWithLevel(chart);

  return (
    <div className={style.container}>
      {datesArr.map(({ days, period }) => (
        <div className={style.period} key={period}>
          <div className={style.week}>{period}</div>
          <ul className={style.days}>
            {days.map((day) => (
              <li className={style.dayBlock} key={`${period}${day}`}>
                <div className={style.day}>{day}</div>
                <div className={style.column}></div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={style.sausageContainer}>
        <SausageList startDay={startDay} dataArr={sausageData} />
      </div>
    </div>
  );
};

export default DatesHeader;
