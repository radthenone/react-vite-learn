import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get(
    'http://localhost:3001/posts',
    { params: { _sort: 'title' } } //sortowanie postów
  );
  return response.data;
};

export const getPost = (id: number) => {
  return axios
    .get(`http://localhost:3001/posts/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const createPost = ({ id, title, body }: { id: number, title: string; body: string }) => {
  return axios
    .post("http://localhost:3001/posts", {
        userId: 1,
        id,
        title,
        body,
    })
    .then(response => response.data)
}