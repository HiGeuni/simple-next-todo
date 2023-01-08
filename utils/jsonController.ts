// Unused File

import { todoType } from '../types/TodoTypes';
import { loadJsonFile } from 'load-json-file';
import { writeJsonFile } from 'write-json-file';

interface DataType {
  today: todoType[];
}

const create = async (val: string) => {
  let curData: DataType = await loadJsonFile('data.json');
  let newData: todoType = {
    id: curData.today.length
      ? Math.max(...curData.today.map((x) => x.id)) + 1
      : 1,
    content: val,
    createdAt: new Date(),
    isComplete: false,
  };
  curData.today.push(newData);
  writeJsonFile('data.json', curData).then(() => {
    console.log('WriteJsonFile Complete');
  });
};

const update = async (id: string, val: string) => {
  let curData: DataType = await loadJsonFile('data.json');
  let data: todoType | undefined = curData.today.find(
    (x) => x.id.toString() === id.toString(),
  );
  if (!data) {
    return 'Column Does not Exist';
  }
  data.content = val;
  writeJsonFile('data.json', curData);
};

const read = () => {
  const curData = await loadJSonFile;
  return curData.today;
};

export const JsonControl = {
  read,
  create,
  update,
};
