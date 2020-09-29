import React, { useCallback, useEffect, useState } from 'react';
import { FaTrash, FaTelegramPlane } from 'react-icons/fa';
import Header from '../../components/Header';

import { Container, Content, TopDiv, TodoList, Empty } from './styles';

interface ITodo {
  id: string;
  label: string;
}

const Ex_5: React.FC = () => {
  const [todo, setTodo] = useState([] as ITodo[]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const todos = localStorage.getItem('@kaffa/todo');
    console.log(todos);
    if (todos) setTodo(JSON.parse(todos));
  }, []);

  const handleSendTodo = useCallback(async () => {
    if (value.length > 0) {
      const id = new Date().getTime().toString();

      setTodo(state => {
        var newTodo: ITodo[] = [];
        if (state) newTodo = [{ id, label: value }, ...state];
        else newTodo = [{ id, label: value }];
        localStorage.setItem('@kaffa/todo', JSON.stringify(newTodo));

        return newTodo;
      });

      setValue('');
    }
  }, [value]);

  const handleRemoveTodo = useCallback(async (id: string) => {
    setTodo(state => {
      var newTodo: ITodo[] = [];
      newTodo = state.filter(todo => todo.id !== id);
      localStorage.setItem('@kaffa/todo', JSON.stringify(newTodo));
      return newTodo;
    });
  }, []);

  return (
    <>
      <Header>Simple Todo List</Header>
      <Container>
        <Content>
          <TopDiv>
            <input
              placeholder="Insert one todo"
              onChange={e => setValue(e.target.value)}
              value={value}
            />
            <button onClick={handleSendTodo}>
              <FaTelegramPlane color="#160bf4" size={20} />
            </button>
          </TopDiv>
          {todo.map(item => (
            <TodoList key={item.id}>
              <p>{item.label}</p>
              <button onClick={() => handleRemoveTodo(item.id)}>
                <FaTrash color="#f90000" />
              </button>
            </TodoList>
          ))}

          {todo.length === 0 && (
            <Empty>
              <h3>Don't have Todo list</h3>
            </Empty>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Ex_5;
