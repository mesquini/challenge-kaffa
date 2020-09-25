import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Content,
  TopView,
  InputTodo,
  ButtonSend,
  Label,
  LabelText,
  LabelButton,
} from './styles';

interface ITodo {
  id: number;
  label: string;
}

const Ex_5: React.FC = () => {
  const [todo, setTodo] = useState([] as ITodo[]);
  const [value, setValue] = useState('');

  useEffect(() => {
    async function loadTodos() {
      const todos = await AsyncStorage.getItem('@kaffa/todo');
      if (todos) setTodo(JSON.parse(todos));
    }
    loadTodos();
  }, []);

  const handleSendTodo = useCallback(async () => {
    if (value.length > 0) {
      const id = new Date().getTime();

      var newTodo: ITodo[] = [];

      setTodo((state) => {
        newTodo = [{id, label: value}, ...state];

        return newTodo;
      });
      setValue('');

      await AsyncStorage.setItem('@kaffa/todo', JSON.stringify(newTodo));
    }
  }, [value, todo]);

  const handleRemoveTodo = useCallback(async (id: string) => {
    var newTodo: ITodo[] = [];

    setTodo((state) => {
      newTodo = state.filter((todo) => todo.id !== Number(id));
      return newTodo;
    });

    await AsyncStorage.setItem('@kaffa/todo', JSON.stringify(newTodo));
  }, []);

  return (
    <Container>
      <Header>Simple Todo List</Header>
      <Content>
        <TopView>
          <InputTodo
            autoCapitalize="words"
            onChangeText={(e) => setValue(e)}
            value={value}
          />
          <ButtonSend onPress={handleSendTodo}>
            <Icon name="send" size={20} color="green" />
          </ButtonSend>
        </TopView>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 5}}
          data={todo}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <Label key={item.id}>
              <LabelText>{item.label}</LabelText>
              <LabelButton onPress={() => handleRemoveTodo(item.id)}>
                <Icon name="trash-2" size={20} color="#ff0000" />
              </LabelButton>
            </Label>
          )}
        />
      </Content>
    </Container>
  );
};

export default Ex_5;
