import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { TextControl, TextareaControl, PanelBody, PanelRow, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const { title, description, shortcode, accordion } = attributes;

    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeDescription = (newDescription) => setAttributes({ description: newDescription });
    const onChangeShortcode = (newShortcode) => setAttributes({ shortcode: newShortcode });
    

    // Add a new item to the accordion (repeater)
    const addAccordionItem = () => {
        const newAccordion = [...accordion, { question: '', answer: '', image: '' }];
        setAttributes({ accordion: newAccordion });
    };

    // Update a specific item in the accordion
    const updateAccordionItem = (index, field, value) => {
        const newAccordion = [...accordion];
        newAccordion[index][field] = value;
        setAttributes({ accordion: newAccordion });
    };

    // Remove an item from the accordion
    const removeAccordionItem = (index) => {
        const newAccordion = accordion.filter((_, i) => i !== index);
        setAttributes({ accordion: newAccordion });
    };

    return (
        <div {...useBlockProps()}>
            <h2 onClick={toggleCollapse} className={`block-title ${isCollapsed ? '' : 'show'}`}>
                {__('Contact Block', 'contact-block')}
                <span></span>
            </h2>
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}>
                {!isCollapsed && (
                    <>
                        <h6>{__('Title', 'contact-block')}</h6>
                        <TextControl
                            value={title}
                            onChange={onChangeTitle}
                            placeholder={__('Add Title', 'contact-block')}
                        />
                        <h6>{__('Description', 'contact-block')}</h6>
                        <TextareaControl
                            value={description}
                            onChange={onChangeDescription}
                            placeholder={__('Add Description', 'contact-block')}
                        />

                        {/* New Fields for Name and Slug */}
                        <h6>{__('Shortcode', 'contact-block')}</h6>
                        <TextareaControl
                            value={shortcode}
                            onChange={onChangeShortcode}
                            placeholder={__('Enter Shortcode for Shortcode', 'contact-block')}
                        />
    
                        <PanelBody title={__('Accordion Items', 'contact-block')} initialOpen={true}>
                            {accordion.map((item, index) => (
                                <PanelRow key={index}>
                                    <div>
                                        <h6>{__('Question', 'contact-block')}</h6>
                                        <TextControl
                                            value={item.question}
                                            onChange={(value) => updateAccordionItem(index, 'question', value)}
                                            placeholder={__('Enter Question', 'contact-block')}
                                        />
                                        <h6>{__('Answer', 'contact-block')}</h6>
                                        <TextareaControl
                                            value={item.answer}
                                            onChange={(value) => updateAccordionItem(index, 'answer', value)}
                                            placeholder={__('Enter Answer', 'contact-block')}
                                        />
                                        <h6>{__('Image', 'contact-block')}</h6>
                                        <MediaUpload
                                            onSelect={(media) => updateAccordionItem(index, 'image', media.url)}
                                            allowedTypes={['image']}
                                            render={({ open }) => (
                                                <>
                                                    <Button onClick={open} isPrimary>
                                                        {item.image
                                                            ? __('Change Image', 'contact-block')
                                                            : __('Add Image', 'contact-block')}
                                                    </Button>
                                                    {item.image && (
                                                        <div style={{ marginTop: '10px' }}>
                                                            <img
                                                                src={item.image}
                                                                alt={__('Selected Image', 'contact-block')}
                                                                style={{ maxWidth: '100%', height: 'auto' }}
                                                            />
                                                            <Button
                                                                onClick={() => updateAccordionItem(index, 'image', '')}
                                                                isDestructive
                                                                style={{ marginTop: '5px' }}
                                                            >
                                                                {__('Remove Image', 'contact-block')}
                                                            </Button>
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        />
                                        <Button
                                            onClick={() => removeAccordionItem(index)}
                                            isDestructive
                                            style={{ marginTop: '15px' }}
                                        >
                                            {__('Remove Item', 'contact-block')}
                                        </Button>
                                    </div>
                                </PanelRow>
                            ))}
                            <Button onClick={addAccordionItem} isPrimary style={{ marginTop: '15px' }}>
                                {__('Add Item', 'contact-block')}
                            </Button>
                        </PanelBody>
                    </>
                )}
            </div>
        </div>
    );
}
