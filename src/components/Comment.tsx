import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  comment: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export const Comment = ({
  comment,
  onDeleteComment,
}: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(comment);
  };

  const handleSetLikeCount = () => {
    setLikeCount((state) => state + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/mikaelcg.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mikael Gallucci</strong>
              <time
                title="11 de maio as 8 e 13"
                dateTime="2022-05-11 08:13:10"
              >
                Cerca de 1h atras
              </time>
            </div>

            <button
              title="Deletar comentario"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleSetLikeCount}>
            <ThumbsUp />
            Apludir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
