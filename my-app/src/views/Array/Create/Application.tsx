import React, { ChangeEvent, useRef, useState } from 'react'
import CreateUser from './CreateUser';
import UserList from '../../ArrayRendering/UserList';

interface User {
    id: number;
    username: string;
    email: string;
}
function Application() {

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const { username, email } = inputs;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [users, setUsers] = useState<User[]>([
      {
        id: 1,
        username: "seungah",
        email: "seungah@qwe.com",
      },
      {
        id: 2,
        username: "junkuk",
        email: "junkuk@qwe.com",
      },
      {
        id: 3,
        username: "eunjin",
        email: "eunjin@qwe.com",
      },
    ]);

    const nextId = useRef<number>(4);

    // 배열에 새 항목을 추가할 때
    // spread 연산자(...)를 사용하거나 
    // concat(): 원래의 users 배열에 user를 추가한 새로운 배열을 반환
    //          원본 배열을 변경하지 않고 새로운 배열을 반환하는 순수 함수
    const onCreate = () => {
        const user: User = {
            id: nextId.current,
            username,
            email,
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    };



  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default Application