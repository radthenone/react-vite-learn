import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import {createPost, getPosts} from '../data/data';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useRef } from 'react';

export const CreatePost = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const queryPosts = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });
  const mutatePost = useMutation(createPost, {
    onSuccess: (newPost: any) => {
      queryClient.setQueryData(['posts', newPost.id], newPost);
      navigate(`/post/${newPost.id}`);
    }
  });

  let newPost: {id: number, title: string, body: string } | undefined;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (queryPosts.data && titleRef.current && bodyRef.current) {
    const lastPostId = queryPosts.data.length + 1;
      newPost = {
        id: lastPostId,
        title: titleRef.current.value ?? '',
        body: bodyRef.current.value ?? ''
    };
    mutatePost.mutate(newPost);
  }
  };

  if (queryPosts.status === "loading") return <h2>Loading...</h2>
  if (queryPosts.status === "error") return <h2>{JSON.stringify(queryPosts.error)}</h2>

  return (
    <div>
      {mutatePost.status === 'error' && JSON.stringify(mutatePost.error)}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input id="body" ref={bodyRef} />
        </div>
        <button disabled={mutatePost.status === 'loading'}>
          {mutatePost.status === 'loading' ? 'Loading...' : 'Create'}
        </button>
      </form>
    </div>
  );
};
