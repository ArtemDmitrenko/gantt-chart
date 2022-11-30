import { FC } from "react";
import { getDateFromString } from "../../helpers/formatDates";
import { step } from "../../constants/step";
import {
  LevelBackgroundColors,
  LevelBorderColors,
} from "../../constants/levelColors";

import styles from "./sausage.module.scss";

type Props = {
  level: number;
  periodStart: string;
  periodFinish: string;
  title: string;
  startDay: Date;
  index: number;
};

const Sausage: FC<Props> = ({
  level,
  periodStart,
  periodFinish,
  title,
  startDay,
  index,
}) => {
  const startPeriodDate = getDateFromString(periodStart);
  const finishPeriodDate = getDateFromString(periodFinish);
  const timeDiff = Math.abs(startPeriodDate.getTime() - startDay.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const timeDiffPeriod = Math.abs(
    finishPeriodDate.getTime() - startPeriodDate.getTime()
  );
  const diffPeriodDays = Math.ceil(timeDiffPeriod / (1000 * 3600 * 24) + 1);
  const width = step * diffPeriodDays + 1;
  const startMargin = step * diffDays - 1;
  const backGroundColor = LevelBackgroundColors[level - 1];
  const borderColor = LevelBorderColors[level - 1];
  const top = index * 40;

  return (
    <div className={styles.container}>
      <div
        style={{
          width: width,
          left: startMargin,
          backgroundColor: backGroundColor,
          borderColor: borderColor,
          top: top,
        }}
        className={styles.item}
      >
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Sausage;
