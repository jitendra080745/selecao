import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextareaControl, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { title } = attributes;

    // State for preview toggle
    const [isPreview, setIsPreview] = useState(false);

    // Handler for updating the title
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });

    return (
        <div {...useBlockProps()}>
            {/* Block Header */}
            <h2>{__('Post Content Block', 'post-content-block')}</h2>

            {/* HTML/Preview Toggle */}
            <div className="toggle-buttons">
                <Button
                    isPrimary={!isPreview}
                    onClick={() => setIsPreview(false)}
                >
                    {__('HTML', 'post-content-block')}
                </Button>
                <Button
                    isPrimary={isPreview}
                    onClick={() => setIsPreview(true)}
                >
                    {__('Preview', 'post-content-block')}
                </Button>
            </div>

            {/* Content Section */}
            <div className="content-section">
                {!isPreview ? (
                    // HTML Input Mode
                    <TextareaControl
                        value={title}
                        onChange={onChangeTitle}
                        placeholder={__('Write your HTML here...', 'post-content-block')}
                        rows={4}
                    />
                ) : (
                    // Preview Mode
                    <div
                        className="preview-output"
                        dangerouslySetInnerHTML={{ __html: title }}
                    ></div>
                )}
            </div>
        </div>
    );
}
