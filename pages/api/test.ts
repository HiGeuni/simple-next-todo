import type { NextApiRequest, NextApiResponse } from 'next';
import data from 'data.json';
import { todoType } from 'types/TodoTypes';
import { writeJsonFile } from 'write-json-file';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json({ message: data.today });
  }
  if (req.method === 'POST') {
    const val = req.body.val;
    const newData: todoType = {
      id: data.today.length ? Math.max(...data.today.map((x) => x.id)) + 1 : 1,
      content: val,
      createdAt: new Date().toISOString(),
      isComplete: false,
    };
    data.today.push(newData);
    writeJsonFile('data.json', data);
    return res.status(200).json({ message: 'Created' });
  }
  if (req.method === 'PUT') {
    const val = req.body.val;
    const id = req.body.id;
    let todo: todoType | undefined = data.today.find(
      (x) => x.id.toString() === id.toString(),
    );
    if (!todo) return res.status(404).send({ message: 'Not Found' });
    todo.content = val;
    data.today.push(todo);
    writeJsonFile('data.json', data);
    return res.status(200).json({ message: 'Updated' });
  }
  return res.status(500);
};
