import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow, Button } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { title, heading, posts } = attributes;
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Toggle collapse
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    // Fetch posts using useSelect
    const fetchedPosts = useSelect((select) => {
        const query = {
            per_page: 3, // Number of posts to fetch
            _embed: true,
        };
        return select('core').getEntityRecords('postType', 'post', query);
    }, []);

    // Update posts attribute when fetchedPosts change
    useEffect(() => {
        if (fetchedPosts && fetchedPosts.length) {
            const mappedPosts = fetchedPosts.map((post) => ({
                id: post.id,
                title: post.title.rendered,
                link: post.link,
                featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
                categories: post._embedded?.['wp:term']?.[0]?.map((category) => ({
                    id: category.id,
                    name: category.name,
                })) || [],
            }));
            setAttributes({ posts: mappedPosts });
        }
    }, [fetchedPosts, setAttributes]);

    return (
        <div {...useBlockProps()}>
            <h2 onClick={toggleCollapse} className={`block-title ${isCollapsed ? '' : 'show'}`}>
                {__('Recent Blog Block', 'custom-blocks')}
                <span></span>
            </h2>
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                {!isCollapsed && (
                    <>
                        <h6>{__('Block Title', 'custom-blocks')}</h6>
                        <TextControl
                            value={title}
                            onChange={(newTitle) => setAttributes({ title: newTitle })}
                            placeholder={__('Enter block title...', 'custom-blocks')}
                        />
                        <h6>{__('Block Heading', 'custom-blocks')}</h6>
                        <TextControl
                            value={heading}
                            onChange={(newHeading) => setAttributes({ heading: newHeading })}
                            placeholder={__('Enter block heading...', 'custom-blocks')}
                        />

                        <h6>{__('Posts', 'custom-blocks')}</h6>
                        {fetchedPosts ? (
                            <ul>
                                {fetchedPosts.map((post) => (
                                    <li key={post.id}>
                                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                                            {post.title.rendered}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{__('Loading posts...', 'custom-blocks')}</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
