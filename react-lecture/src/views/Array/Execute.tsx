import React, { ChangeEvent, FC, useRef, useState } from 'react'
import CreateUser from './CreateUser';
import UserList from './UserList';

type User = {
  id: number;
  username: string;
  email: string;
  active: boolean;
}

const Execute: FC = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs( {
      ...inputs,
      [name] : value
    });
  };

  // users 상태는 사용자 목록을 관리
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      username: "seungah",
      email: "seung@qwe.qwe",
      active: true,
    },
    {
      id: 2,
      username: "junkuk",
      email: "junkuk@qwe.qwe",
      active: false,
    },
    {
      id: 3,
      username: "hello",
      email: "hello@qwe.qwe",
      active: false,
    }
  ]);

  // nextId useRef를 사용하여 다음 사용자의 id를 저장
  const nextId = useRef(4);

  const onCreate = () => {
    const user: User = {
      id: nextId.current,
      username,
      email,
      active: false
    };

    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }

  const onRemove = (id: number) => {
    // user.id가 매개변수로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // user.id가 id인 것을 제거
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = (id: number) => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user)
    )
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  )
}

export default Execute