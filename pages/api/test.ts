import type { NextApiRequest, NextApiResponse } from 'next';
import data from 'data.json';
import { ITodoType } from 'types/TodoTypes';
import { writeJsonFile, writeJsonFileSync } from 'write-json-file';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json({ message: data.today });
  }

  if (req.method === 'POST') {
    const val = req.body.val;
    const newData: ITodoType = {
      id: data.today.length ? Math.max(...data.today.map((x) => x.id)) + 1 : 1,
      content: val,
      createdAt: new Date().toISOString(),
      isComplete: false,
    };
    data.today.push(newData);
    await writeJsonFile('data.json', data);
    return res.status(200).json({ message: 'Created' });
  }

  // todo
  if (req.method === 'PUT') {
    const id = req.body.id;
    const content = req.body.content;
    const isComplete = req.body.isComplete;
    const todo: ITodoType = data.today.find((x) => x.id === id)!;
    if (!todo) return res.status(404).send({ message: 'Not Found' });
    todo.isComplete = isComplete;
    todo.content = content;
    const datas: ITodoType[] = data.today.map((x) =>
      x.id === id
        ? { ...x, id: id, isComplete: isComplete, content: content }
        : x,
    );
    await writeJsonFile('data.json', { today: datas });
    return res.status(200).json({ message: 'Updated' });
  }

  if (req.method === 'DELETE') {
    const id = req.body.id;
    const todo: ITodoType[] | undefined = data.today.filter(
      (x) => x.id.toString() !== id.toString(),
    );
    if (!todo) return res.status(404).send({ message: 'Not Found' });
    await writeJsonFile('data.json', { today: todo }).then(() =>
      console.log('complete'),
    );
    console.log('return');
    return res.status(200).json({ message: 'Deleted' });
  }
  return res.status(500);
};
