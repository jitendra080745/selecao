import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { title } = attributes;

    // Handlers for updating attributes
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });


    // Manage collapse state for block-wrap
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Toggle collapse state
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div {...useBlockProps()}>
            {/* Block Title */}
            <h2
                onClick={toggleCollapse}
                className={`block-title ${isCollapsed ? '' : 'show'}`}
            >
                {__('Post Content Block', 'post-content-block')}
                <span></span>
            </h2>

            {/* Block Content */}
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}>
                {!isCollapsed && (
                    <>
                        {/* Title */}
                        <h6>{__('Title', 'post-content-block')}</h6>
                        <TextControl
                            value={title}
                            onChange={onChangeTitle}
                            placeholder={__('Enter title...', 'post-content-block')}
                        />
                     
                    </>
                )}
            </div>
        </div>
    );
}
