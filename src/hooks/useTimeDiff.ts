import moment from "moment";
import { useEffect, useState } from "react";

const useTimeDiff = (date: Date | string) => {
  const [timeDiff, setTimeDiff] = useState("");

  useEffect(() => {
    const calculateTimeDiff = () => {
      const now = moment();
      const postDate = moment(date);
      const diffInSeconds = now.diff(postDate, "seconds");
      const diffInMinutes = now.diff(postDate, "minutes");
      const diffInHours = now.diff(postDate, "hours");
      const diffInDays = now.diff(postDate, "days");
      const diffInMonths = now.diff(postDate, "months");
      const diffInYears = now.diff(postDate, "years");

      let result = "";

      if (diffInSeconds < 60) {
        result = `${diffInSeconds}초 전`;
      } else if (diffInMinutes < 60) {
        result = `${diffInMinutes}분 전`;
      } else if (diffInHours < 24) {
        result = `${diffInHours}시간 전`;
      } else if (diffInDays < 30) {
        result = `${Math.floor(diffInDays)}일 전`;
      } else if (diffInMonths < 12) {
        result = `${Math.floor(diffInMonths)}개월 전`;
      } else {
        result = `${Math.floor(diffInYears)}년 전`;
      }

      setTimeDiff(result);
    };

    calculateTimeDiff();
    const timerId = setInterval(calculateTimeDiff, 60000); // 1 분마다 업데이트

    return () => clearInterval(timerId); // cleanup
  }, [date]);

  return timeDiff;
};

export default useTimeDiff;
