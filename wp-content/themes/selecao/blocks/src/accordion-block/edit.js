import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl, TextareaControl, PanelBody, PanelRow, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const { title, description, accordion } = attributes;

    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeDescription = (newDescription) => setAttributes({ description: newDescription });

    // Add a new item to the accordion (repeater)
    const addAccordionItem = () => {
        const newAccordion = [...accordion, { question: '', answer: '' }];
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
                {__('Accordion Block', 'accordion-block')}
                <span></span>
            </h2>
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}>
                {!isCollapsed && (
                    <>
                        <h6>{__('Title', 'accordion-block')}</h6>
                        <TextControl
                            value={title}
                            onChange={onChangeTitle}
                            placeholder={__('Add Title', 'accordion-block')}
                        />
                        <h6>{__('Description', 'accordion-block')}</h6>
                        <TextareaControl
                            value={description}
                            onChange={onChangeDescription}
                            placeholder={__('Add Description', 'accordion-block')}
                        />

                        <PanelBody title={__('Accordion Items', 'accordion-block')} initialOpen={true}>
                            {accordion.map((item, index) => (
                                <PanelRow key={index}>
                                    <div>
                                        <h6>{__('Question', 'accordion-block')}</h6>
                                        <TextControl
                                            value={item.question}
                                            onChange={(value) => updateAccordionItem(index, 'question', value)}
                                            placeholder={__('Enter Question', 'accordion-block')}
                                        />
                                        <h6>{__('Answer', 'accordion-block')}</h6>
                                        <TextareaControl
                                            value={item.answer}
                                            onChange={(value) => updateAccordionItem(index, 'answer', value)}
                                            placeholder={__('Enter Answer', 'accordion-block')}
                                        />
                                        <Button
                                            onClick={() => removeAccordionItem(index)}
                                            isDestructive                                           
                                        >
                                            {__('Remove Item', 'accordion-block')}
                                        </Button>
                                    </div>
                                </PanelRow>
                            ))}
                            <Button onClick={addAccordionItem} isPrimary >
                                {__('Add Item', 'accordion-block')}
                            </Button>
                        </PanelBody>
                    </>
                )}
            </div>
        </div>
    );
}
