import { CategoryContext } from '@contexts';
import { useContext, useState, type FC } from 'react';

type NewCategoryProps = {
  cancel: () => void;
};

export const NewCategory: FC<NewCategoryProps> = ({ cancel }) => {
  const { handleCreateItem } = useContext(CategoryContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const save = async () => {
    setIsSaving(true);
    await handleCreateItem({ name, description});
    setIsSaving(false);
    cancel();
  }

  if (isSaving) {
    return <li>Saving Item......</li>
  }
  
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
      <button onClick={save}>Save</button>
    </li>
  );
};