import { useState } from "react"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import styles from "./Comment.module.css"

export interface CommentData {
  id: string
  content: string
  likesAmount: number
  commentedAt: Date
}

interface CommentProps {
  comment: CommentData
  onDeleteCommentById: (commentId: string) => void
}

export function Comment({ comment, onDeleteCommentById }: CommentProps) {
  const [likeCount, setLikeCount] = useState(comment.likesAmount)

  const commentedDateFormatted = format(comment.commentedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const commentedDateRelativeToNow = formatDistanceToNow(comment.commentedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleDeleteComment() {
    onDeleteCommentById(comment.id)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/lhmoreno.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Henrique</strong>
              <time title={commentedDateFormatted} dateTime={comment.commentedAt.toISOString()}>
                {commentedDateRelativeToNow}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
