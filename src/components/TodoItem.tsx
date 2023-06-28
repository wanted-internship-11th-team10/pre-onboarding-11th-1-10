import { useState, ChangeEventHandler } from 'react';
import { useInput } from '../hooks';
import { type Todo } from '../context';
import { useHandleTodo } from '../context';
import styled from 'styled-components';

interface TodoItemProps {
  item: Todo;
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState(item.isCompleted);
  const [value, handleValueChange, setValue] = useInput(item.todo);
  const { updateTodo, deleteTodo } = useHandleTodo();

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTodo({ ...item, isCompleted: e.target.checked });
    setChecked(e.target.checked);
  };

  const handleSubmitButtonClick = () => {
    if (value !== '') {
      setIsEdit(false);
      updateTodo({ ...item, todo: value });
    }
  };

  const handleCancelButtonClick = () => {
    setIsEdit(false);
    setValue(item.todo);
  };

  return (
    <Li>
      <Label>
        <Checkbox type="checkbox" checked={checked} onChange={handleCheckboxChange} />
        {!isEdit ? <span>{value}</span> : null}
      </Label>
      {!isEdit ? (
        <ButtonWrapper>
          <Button data-testid="modify-button" onClick={() => setIsEdit(true)}>
            수정
          </Button>
          <Button data-testid="delete-button" onClick={() => deleteTodo(item.id)}>
            삭제
          </Button>
        </ButtonWrapper>
      ) : (
        <>
          <ModifyInput data-testid="modify-input" type="text" value={value} onChange={handleValueChange} />
          <ButtonWrapper>
            <Button data-testid="submit-button" onClick={handleSubmitButtonClick}>
              제출
            </Button>
            <Button data-testid="cancel-button" onClick={handleCancelButtonClick}>
              취소
            </Button>
          </ButtonWrapper>
        </>
      )}
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  align-items: center;
  height: 36px;
  line-height: 36px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const ButtonWrapper = styled.div`
  height: 80%;
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 4px 8px;
`;

const ModifyInput = styled.input`
  width: 300px;
  padding: 4px;
`;
