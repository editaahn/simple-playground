import { useState, type FC } from 'react';
import { CategoryEntity } from '../types';

type NewCategoryProps = {
  save: (category: Pick<CategoryEntity, 'name' | 'description'>) => void;
  cancel: () => void;
};

export const NewCategory: FC<NewCategoryProps> = ({ save, cancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <li>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button onClick={cancel}>Cancel</button>
      <button onClick={() => save({ name, description })}>Save</button>
    </li>
  );
};