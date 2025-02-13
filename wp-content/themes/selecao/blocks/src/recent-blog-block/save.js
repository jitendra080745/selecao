import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
    const { title, heading, posts } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div id="recent-posts" className="recent-posts section">
                <div className="container section-title">
                    {title && <h2>{title}</h2>}
                    {heading && <p>{heading}</p>}
                </div>

                <div className="container">
                    <div className="row gy-4">
                        {posts.map((post) => (
                            <div
                                className="col-xl-4 col-md-6"
                                key={post.id}
                            >
                                <article>
                                    <div className="post-img">
                                        {post.featuredImage && (
                                            <img
                                                src={post.featuredImage}
                                                alt={post.title}
                                                className="img-fluid"
                                            />
                                        )}
                                    </div>

                                    <div className="post-category">
                                        {post.categories.map((category) => (
                                            <span key={category.id}>{category.name}</span>
                                        ))}
                                    </div>

                                    <h2 className="title">
                                        <a href={post.link}>{post.title}</a>
                                    </h2>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
