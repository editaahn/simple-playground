import { CategoryContext } from '@contexts';
import { useContext, useRef, useState, type FC } from 'react';
import { CategoryEntity } from '../types';

type CategoryProps = CategoryEntity;

export const Category: FC<CategoryProps> = ({
  entityId,
  name: originalName,
  description: originalDescription,
  isArchived,
}) => {
  const { handleEditItem, handleRemoveItem } = useContext(CategoryContext);
  const [isEditing, setEditing] = useState(false);

  const [name, setName] = useState(originalName);
  const [description, setDescription] = useState(originalDescription);

  const prevName = useRef(name);
  const prevDescription = useRef(description);

  const isDifferent = prevName.current !== name || prevDescription.current !== description;

  const cancel = () => {
    setName(prevName.current);
    setDescription(prevDescription.current);
    setEditing(false);
  };
  
  const onEdit = () => {
    handleEditItem({ entityId, name, description, isArchived });
    prevName.current = name;
    prevDescription.current = description;
    setEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={cancel}>Cancel</button>
        <button onClick={() => handleRemoveItem(entityId)}>Remove</button>
        {isDifferent ?
          <button onClick={onEdit}>Edit</button>
          : null}
      </li>
    );
  }

  return (
    <li onClick={() => setEditing(true)}>
      {name} - {description}
    </li>
  );
};