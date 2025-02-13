import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { currentPage, totalPages } = attributes;
    const postsPerPage = 5; 

    // Fetch all posts
    const allPosts = useSelect((select) => 
        select('core').getEntityRecords('postType', 'post', { per_page: -1, _embed: true })
    , []);

    // Fetch filtered posts based on the current page
    const filteredPosts = useSelect((select) => {
        const query = {
            per_page: postsPerPage, 
            page: currentPage,
            _embed: true,
        };
        return select('core').getEntityRecords('postType', 'post', query);
    }, [currentPage]);

    // Update attributes for total pages and posts
    useEffect(() => {
        if (allPosts) {
            const total = Math.ceil(allPosts.length / postsPerPage);
            setAttributes({
                totalPages: total,
                posts: filteredPosts,
            });
        }
    }, [allPosts, filteredPosts, currentPage, setAttributes]);

    // Pagination handler
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setAttributes({ currentPage: page });
        }
    };

    // Collapse state and toggle handler
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div {...useBlockProps()}>
            <h2 
                onClick={toggleCollapse} 
                className={`block-title ${isCollapsed ? '' : 'show'}`}
            >
                {__('Post List Block', 'post-list-block')}
                <span></span>
            </h2>
            
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : 'show'}`}>
                {!isCollapsed && (
                    <>                
                        {/* Post listing */}
                        <h6>{__('Post List', 'post-list-block')}</h6>
                        <div className="post-listing">
                            <ul>
                                {filteredPosts && filteredPosts.map((post) => (
                                    <li key={post.id}>
                                        <a href={post.link}>{post.title.rendered}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
