import React from 'react';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt="Sidebar alt"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/mikaelcg.png" />

        <strong>Mikael Gallucci</strong>
        <span>Web</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
};
