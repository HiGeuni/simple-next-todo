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

type t = {
  content: String;
  createdAt: Date;
  id: Number;
  isComplete: Boolean;
};

export const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  const [mark, setMark] = useState<t[]>([]);

  const loadCurTodoData = async () => {
    await fetch('/api/test')
      .then((res) => res.json())
      .then((data) => {
        const d = data.message;
        console.log(d);
        setMark(d);
      });
  };

  useEffect(() => {
    loadCurTodoData();
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
            return mark.find(
              (x) =>
                moment(x.createdAt).format('YYYY-MM-DD') ===
                moment(date).format('YYYY-MM-DD'),
            ) ? (
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
