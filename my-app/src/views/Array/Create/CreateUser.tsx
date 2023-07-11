import React, { ChangeEvent } from 'react'

interface CreateUserProps {
    username: string;
    email: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onCreate: () => void;
}

// 배열에 새로운 항목을 추가하는 방법
function CreateUser({ username, email, onChange, onCreate }: CreateUserProps) {
  return (
    <div>
        <input type="text" name="username" placeholder='회원이름' value={username} onChange={onChange} />
        <input type="text" name="email" placeholder='이메일' value={email} onChange={onChange} />
        <button onClick={onCreate}>등록</button>
    </div>
  )
}

export default CreateUser