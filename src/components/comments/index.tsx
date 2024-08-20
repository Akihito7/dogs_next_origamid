import { fetchComments } from "@/server-actions/photos"
import styles from "./index.module.css"

type CommentType = {
    comment_ID: string,
    comment_post_ID: string,
    comment_author: string,
    comment_author_email: string,
    comment_author_url: string,
    comment_author_IP: string,
    comment_date: Date,
    comment_date_gmt: Date,
    comment_content: string,
    comment_karma: string,
    comment_approved: string,
    comment_agent: string,
    comment_type: string,
    comment_parent: string,
    user_id: string
}

export async function Comments({ idPhoto }: { idPhoto: Number }) {
    const response: CommentType[] = await fetchComments(idPhoto)
    return (
        <div className={styles.containerComments}>
            {
                response.map(c => (
                    <p className={styles.p}>
                        <span className={styles.span}>{c.comment_author}</span> :
                        {c.comment_content}
                    </p>
                ))
            }
        </div>
    )
}