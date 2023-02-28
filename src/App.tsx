import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { PostType } from './components/Post.jsx';

import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mikaelcg.png',
      name: 'Mikael Gallucci',
      role: 'Developer @ RFA Labs',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera',
      },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione aperiam quisquam eum cumque perspiciatis facilis exercitationem labore ut unde dolore, nisi maiores tempore? Facere cum temporibus, consectetur architecto nemo illo.',
      },
      {
        type: 'link',
        content: 'www.abc.com',
      },
    ],
    publishedAt: new Date('2023-02-28 14:37:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Ola!',
      },
      {
        type: 'paragraph',
        content:
          'Facilis exercitationem labore ut unde dolore, nisi maiores tempore? Facere cum temporibus, consectetur architecto nemo illo.',
      },
      {
        type: 'link',
        content: 'www.xyzwky.com',
      },
    ],
    publishedAt: new Date('2023-02-28 10:18:00'),
  },
];

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
};
