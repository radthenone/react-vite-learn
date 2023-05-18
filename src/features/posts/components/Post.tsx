import { useQuery } from '@tanstack/react-query';
import { getPost } from '../data/data';
import {useParams} from "react-router-dom";
import { DeletePost } from "./DeletePost";

export const Post = () => {
    const { id } = useParams()
    const {
        status: statusPost,
        error: errorPost,
        data: post,
    } = useQuery({
        queryKey: ['posts', id && parseInt(id, 10)],
        queryFn: () => id && getPost(parseInt(id, 10)),
    })

if ( statusPost === "loading") return <h1>Loading...</h1>
if ( statusPost === "error") return <h1>{JSON.stringify(errorPost)}</h1>

return (
    <>
        <a href="/posts/" ><h1>All posts</h1></a>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        < DeletePost postId={post.id}/>
    </>
)
}

