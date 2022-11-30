const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

type TWeek = {
  period: string;
  days: Array<number>;
};

function getStartedDay(period: string): Date {
  const dataArr = period.split("-");
  const [globalStartDateInString, globalFinishDateInString] = dataArr;
  const globalStartDate = getDateFromString(globalStartDateInString);
  return getClosestPassedMonday(globalStartDate);
}

function getDataFromHolePeriod(period: string) {
  const dataArr = period.split("-");
  const [globalStartDateInString, globalFinishDateInString] = dataArr;
  const globalStartDate = getDateFromString(globalStartDateInString);
  const globalFinishDate = getDateFromString(globalFinishDateInString);
  const closestMondayToGlobalStartDate =
    getClosestPassedMonday(globalStartDate);
  const resultArr: Array<TWeek> = [];
  return getDataForHolePeriod(
    closestMondayToGlobalStartDate,
    globalFinishDate,
    resultArr
  );
}

function getDateFromString(str: string): Date {
  const resultStartArr: Array<string> = [];
  return new Date(
    str
      .split(".")
      .reduce((acc, el, i) => {
        if (i === 0) {
          acc[1] = el;
          return acc;
        } else if (i === 1) {
          acc[0] = el;
          return acc;
        }
        acc.push(el);
        return acc;
      }, resultStartArr)
      .join(".")
  );
}

function getClosestPassedMonday(date: Date): Date {
  const curWeekDay = date.getDay();
  if (curWeekDay === 1) {
    return date;
  } else if (curWeekDay > 1) {
    const finalDate = new Date(date);
    const minusDays = curWeekDay - 1;
    finalDate.setDate(date.getDate() - minusDays);
    return finalDate;
  } else {
    const finalDate = new Date(date);
    finalDate.setDate(date.getDate() - 6);
    return finalDate;
  }
}

function getDataForHolePeriod(
  startDate: Date,
  globalFinishDate: Date,
  resArr: Array<TWeek>
): TWeek[] {
  let finishDate = new Date(startDate);
  finishDate.setDate(startDate.getDate() + 6);
  if (finishDate > globalFinishDate) {
    const weekData = getWeekData(startDate, globalFinishDate);
    resArr.push(weekData);
    return resArr;
  }
  const weekData = getWeekData(startDate, finishDate);
  resArr.push(weekData);
  const newStartDay = new Date(finishDate);
  newStartDay.setDate(finishDate.getDate() + 1);
  if (newStartDay > globalFinishDate) {
    return resArr;
  }
  return getDataForHolePeriod(newStartDay, globalFinishDate, resArr);
}

function getWeekData(startDate: Date, finishDate: Date) {
  const startMonth = months[startDate.getMonth()];
  const startDay = startDate.getDate();
  const formatedStartDate = `${startDay} ${startMonth}`;
  const finishMonth = months[finishDate.getMonth()];
  const finishDay = finishDate.getDate();
  const formatedFinishDate = `${finishDay} ${finishMonth}`;
  const finalPeriod = `${formatedStartDate} - ${formatedFinishDate}`;
  const timeDiff = Math.abs(finishDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const days = [startDay];
  for (let i = 1; i < diffDays; i++) {
    const finalDate = new Date(startDate);
    finalDate.setDate(startDate.getDate() + i);
    days.push(finalDate.getDate());
  }
  days.push(finishDay);
  const resObj: TWeek = {
    period: finalPeriod,
    days,
  };
  return resObj;
}

export { getDataFromHolePeriod, getDateFromString, getStartedDay };
