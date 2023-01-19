import Calendar, { CalendarTileProperties, Detail } from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { CustomContainer } from './styles';
import { ITodoType } from 'types/TodoTypes';

interface IProps {
  value: Date;
  setValue: (date: Date) => void;
  todos: ITodoType[];
}

export const CalendarComponent = ({ value, setValue, todos }: IProps) => {
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
            return todos.find(
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
      </div>
    </CustomContainer>
  );
};
