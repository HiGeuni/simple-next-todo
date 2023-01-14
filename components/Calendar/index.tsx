import {
  ChangeEvent,
  useCallback,
  useState,
  MouseEvent,
  useEffect,
} from 'react';
import Calendar, { CalendarTileProperties, Detail } from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { CustomContainer } from './styles';

export const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  const [mark, setMark] = useState<string[]>([]);
  useEffect(() => {
    let tmp = [];
    for (let i = 0; i < 10; ++i) {
      tmp.push(moment(value).format('YYYY-MM-DD'));
    }
    setMark(tmp);
  }, []);

  return (
    <CustomContainer>
      <h1>This is Calendar</h1>
      <div className="calendar-container">
        <Calendar
          locale="us"
          onChange={setValue}
          value={value}
          formatDay={(locale, date) => moment(date).format('DD')}
          selectRange={false}
          tileContent={({ date, view }: CalendarTileProperties) => {
            return mark.find((x) => x === moment(date).format('YYYY-MM-DD')) ? (
              <div>
                <div className="dot"></div>
              </div>
            ) : (
              <></>
            );
          }}
        />
        <br />
        <div className="text-gray-500 mt-4">
          Selected Date : {moment(value).format('YYYY년 MM월 DD일')}
        </div>
      </div>
    </CustomContainer>
  );
};
