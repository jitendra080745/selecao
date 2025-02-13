import { __ } from '@wordpress/i18n';
import { Link } from '@wordpress/components';

export function PostList({ posts }) {
    if (!posts || posts.length === 0) {
        return <p>{__('No posts available', 'custom-blocks')}</p>;
    }

    return (
        <div className="post-list">
            {posts.map((post) => (
                <div key={post.id} className="post-item">
                    {/* Featured Image */}
                    {post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && (
                        <img
                            src={post._embedded['wp:featuredmedia'][0].source_url}
                            alt={post.title.rendered}
                            className="post-image"
                        />
                    )}

                    {/* Post Title */}
                    <h3>
                        <Link href={post.link}>{post.title.rendered}</Link>
                    </h3>

                    {/* Categories */}
                    <div className="post-categories">
                        {post._embedded['wp:term'] &&
                            post._embedded['wp:term'][0].map((category) => (
                                <span key={category.id} className="category">
                                    {category.name}
                                </span>
                            ))}
                    </div>

                    {/* Tags */}
                    <div className="post-tags">
                        {post._embedded['wp:term'] &&
                            post._embedded['wp:term'][1].map((tag) => (
                                <span key={tag.id} className="tag">
                                    {tag.name}
                                </span>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
