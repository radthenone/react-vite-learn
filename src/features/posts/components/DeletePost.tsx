import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getPost, deletePost } from '../data/data';
import { useNavigate } from 'react-router-dom';

export const DeletePost = ({ postId }: { postId: number }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const deletePostQuery = useQuery({
        queryKey: ["posts", postId],
        queryFn: () => getPost(postId),
    })
    const deletePostMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts']
            })
            navigate("/posts")
        }
        }
    )

    if (deletePostQuery.status === "loading") return <h1>Loading...</h1>
    if (deletePostQuery.status === "error") {
        return <h1>{JSON.stringify(deletePostQuery.error)}</h1>
    }

    const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
        deletePostMutation.mutate(postId);
    }
    };

    return (
        <div>
            <button onClick={handleDelete} disabled={deletePostMutation.isLoading}>
                {deletePostMutation.isLoading ? 'Deleting...' : 'Delete'}
            </button>
        </div>
    )
}

