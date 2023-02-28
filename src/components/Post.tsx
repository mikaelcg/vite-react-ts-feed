import React, { ChangeEvent, FormEvent, InvalidEvent } from 'react';
import styles from './Post.module.css';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

interface PostAuthor {
  avatarUrl: string;
  name: string;
  role: string;
}

interface PostContent {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  publishedAt: Date;
  author: PostAuthor;
  content: PostContent[];
}

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState(['Comentario 1']);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    post.publishedAt,
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  const handleCreateNewComment = (event: FormEvent) => {
    event?.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleOnChangeNewComment = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  };

  const handleOnInvalidNewComment = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event?.target.setCustomValidity('Campo Obrigatorio');
  };

  const deleteComment = (commentToDelete: string) =>
    setComments(
      comments.filter((comment) => comment !== commentToDelete)
    );

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newComment}
          name="comment"
          placeholder="Deixe seu comentario"
          required
          onChange={handleOnChangeNewComment}
          onInvalid={handleOnInvalidNewComment}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            comment={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};
