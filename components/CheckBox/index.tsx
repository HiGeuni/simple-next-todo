import { useState } from 'react';
import { ActiveDiv, CheckBoxWraper } from './styles';

interface IProps {
  label: string;
}

const Checkbox = ({ label }: IProps) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <CheckBoxWraper>
      <input
        className={isCheck ? 'checked' : 'no'}
        type="checkbox"
        onChange={() => {
          setIsCheck(!isCheck);
        }}
        id="checkbox"
      />
      <label htmlFor="checkbox"></label>
      {isCheck ? <ActiveDiv>{label}</ActiveDiv> : <div>{label}</div>}
    </CheckBoxWraper>
  );
};

export default Checkbox;
