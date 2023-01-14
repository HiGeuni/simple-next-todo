import type { NextApiRequest, NextApiResponse } from 'next';

type Todo = {
  category: 'Study' | 'Contest' | 'Meeting';
  todoDate: Date;
  name: string;
};
export default function TodoHandler(
  req: NextApiRequest,
  res: NextApiResponse<Todo>,
) {
  const data: Todo = req.body;
}
