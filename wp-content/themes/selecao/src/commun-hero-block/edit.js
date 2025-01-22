import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, Button, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { title, description, breadcrumbs = [] } = attributes;

    // Handlers for updating attributes
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeDescription = (newDescription) => setAttributes({ description: newDescription });

    // Handle updates to the breadcrumbs array
    const handleBreadcrumbChange = (index, field, value) => {
        const updatedBreadcrumbs = [...breadcrumbs];
        updatedBreadcrumbs[index] = { ...updatedBreadcrumbs[index], [field]: value };
        setAttributes({ breadcrumbs: updatedBreadcrumbs });
    };

    // Handle adding a new breadcrumb
    const addBreadcrumb = () => {
        const newBreadcrumb = { title: '', url: '' };
        setAttributes({
            breadcrumbs: [...breadcrumbs, newBreadcrumb],
        });
    };

    // Handle removing a breadcrumb
    const removeBreadcrumb = (index) => {
        const updatedBreadcrumbs = breadcrumbs.filter((_, i) => i !== index);
        setAttributes({ breadcrumbs: updatedBreadcrumbs });
    };

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
                {__('Commun Hero Block', 'cummun-hero-block')}
                <span></span>
            </h2>

            {/* Block Content */}
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}>
                {!isCollapsed && (
                    <>
                        {/* Title */}
                        <h6>{__('Title', 'cummun-hero-block')}</h6>
                        <TextControl
                            value={title}
                            onChange={onChangeTitle}
                            placeholder={__('Enter title...', 'cummun-hero-block')}
                        />

                        {/* Description */}
                        <h6>{__('Description', 'cummun-hero-block')}</h6>
                        <TextControl
                            value={description}
                            onChange={onChangeDescription}
                            placeholder={__('Enter description...', 'cummun-hero-block')}
                        />

                        {/* Breadcrumbs */}
                        <InspectorControls>
                            <PanelBody title={__('Settings', 'custom-blocks')} initialOpen={true}>
                                {breadcrumbs.map((breadcrumb, index) => (
                                    <div key={index} className="breadcrumb-item">
                                        <TextControl
                                            label={__('Breadcrumb Title', 'custom-blocks')}
                                            value={breadcrumb.title}
                                            onChange={(value) =>
                                                handleBreadcrumbChange(index, 'title', value)
                                            }
                                        />
                                        <TextControl
                                            label={__('Breadcrumb URL', 'custom-blocks')}
                                            value={breadcrumb.url}
                                            onChange={(value) =>
                                                handleBreadcrumbChange(index, 'url', value)
                                            }
                                        />
                                        <Button
                                            isDestructive
                                            onClick={() => removeBreadcrumb(index)}
                                            className="remove-breadcrumb"
                                        >
                                            {__('Remove Breadcrumb', 'custom-blocks')}
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    isPrimary
                                    onClick={addBreadcrumb}
                                    className="add-breadcrumb"
                                >
                                    {__('Add Breadcrumb', 'custom-blocks')}
                                </Button>
                            </PanelBody>
                        </InspectorControls>
                    </>
                )}
            </div>
        </div>
    );
}
