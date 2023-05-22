import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts } from './features/posts/components/Posts'
import { Post } from './features/posts/components/Post'
import { CreatePost } from './features/posts/components/CreatePost'
import { Register } from "./features/users/components/Register";
import { Login } from "./features/users/components/Login";
import { User } from './features/users/components/User'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import PrivateRoutes from './utils/PrivateRoutes';

const queryClient = new QueryClient();

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<PrivateRoutes />}>
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/posts/:id" element={<Post />} />
                            <Route path="/posts/create" element={<CreatePost />} />
                            <Route path="/profile" element={<User />} />
                        </Route>
                        <Route path="/" element={<App />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
            </Provider>
        </QueryClientProvider>
    </StrictMode>
);