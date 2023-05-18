import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../data/data';

export const Posts = () => {
  const {
    status,
    error,
    data: posts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (status === 'loading') return <h1>Loading...</h1>;

  if (status === 'error') return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div className="Posts">
      <ol>
        {posts.map((post: { id: number; title: string }) => {
          return (
              <div key={post.id}>
                <a href={`/posts/${post.id}`}><li>{post.title}</li></a>
              </div>
          )
        })}
      </ol>
    </div>
  );
}