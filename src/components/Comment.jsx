/* eslint-disable react/prop-types */
import styles from './Comment.module.css';
import ProfileImg from '../assets/goddesss.png'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={ProfileImg} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Vinicius</strong>
                            <time title="11 de Maio ás 08:13h" dateTime="2024/05/12 08:13:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>{content}</p>
                </div>

                <footer>
                   <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>


        </div>
    )
}