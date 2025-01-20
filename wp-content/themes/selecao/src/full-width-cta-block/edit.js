import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { title, description, buttonText, buttonUrl } = attributes;

    // Handlers for updating attributes
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeDescription = (newDescription) => setAttributes({ description: newDescription });
    const onChangeButtonText = (newButtonText) => setAttributes({ buttonText: newButtonText });
    const onChangeButtonUrl = (newButtonUrl) => setAttributes({ buttonUrl: newButtonUrl });

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
                {__('Full Width CTA Block', 'full-width-cta-block')}
                <span></span>
            </h2>

            {/* Block Content */}
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}>
                {!isCollapsed && (
                    <>
                        {/* Title */}
                        <h6>{__('Title', 'full-width-cta-block')}</h6>
                        <TextControl
                            value={title}
                            onChange={onChangeTitle}
                            placeholder={__('Enter title...', 'full-width-cta-block')}
                        />

                        {/* Description */}
                        <h6>{__('Description', 'full-width-cta-block')}</h6>
                        <TextControl
                            value={description}
                            onChange={onChangeDescription}
                            placeholder={__('Enter description...', 'full-width-cta-block')}
                        />

                        {/* Button Text */}
                        <h6>{__('Button Text', 'full-width-cta-block')}</h6>
                        <TextControl
                            value={buttonText}
                            onChange={onChangeButtonText}
                            placeholder={__('Enter button text...', 'full-width-cta-block')}
                        />

                        {/* Button URL */}
                        <h6>{__('Button URL', 'full-width-cta-block')}</h6>
                        <TextControl
                            value={buttonUrl}
                            onChange={onChangeButtonUrl}
                            placeholder={__('Enter button URL...', 'full-width-cta-block')}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
