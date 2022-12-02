import { isPending } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import photo from "../img/logo.jpeg"
import "./posts.css"
import mainPhoto from "../img/g.jpeg"

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
           
            <div className="postCredit">
                <div>
                    <img className="photo" src={photo} />
                </div>

                <div>
                   <div>
                        <p><strong><PostAuthor userId={post.userId} /></strong>
                        <TimeAgo timestamp={post.date} /></p>
                   </div>

                   <div className="postTitle">
                        <p>{post.title}</p>
                   </div>
                </div>
            </div>

            <div className="info">
                <p className="content">{post.content.substring(0, 100)}</p>
                <img className="mainPhoto" src={mainPhoto} />
            </div>
            <ReactionButtons  post={post}/>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList