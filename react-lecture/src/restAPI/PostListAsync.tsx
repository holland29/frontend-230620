import React, { useState, useEffect } from 'react'
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function PostListAsync() {
    const [posts, setPosts] = useState<Post[]>([]);

    //? 로딩과 에러 핸들링 상태 관리
    // 데이터 로딩 상태를 저장하는 useState훅
    const [loading, setLoading] = useState<boolean>(false);
    // 발생한 오류를 저장하는 useState훅
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // useEffect 훅 안에서 직접 async 함수를 사용할 수는 X
        // useEffect 안에서 새로운 async 함수를 정의하고 즉시 호출하는 것은 가능
        const fetchData = async() => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch(error: any) {
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>로딩중입니다.</div>
    }

    if(error) {
        return <div>에러가 발생했습니다. {error.message}</div>
    }

  return (
    <div>
        {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
