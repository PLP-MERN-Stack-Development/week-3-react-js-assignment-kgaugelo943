import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import PostList from './components/PostList';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TaskManager />} />
        <Route path="posts" element={<PostList />} />
      </Route>
    </Routes>
  );
}
