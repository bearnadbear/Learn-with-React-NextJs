import PostsGrid from "../posts/posts-grid";

import styles from "./featured-posts.module.css";

export default function FeaturedPost(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Post</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
