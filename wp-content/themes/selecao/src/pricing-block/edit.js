import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl, CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { title, heading, repeater } = attributes;

    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeHeading = (newHeading) => setAttributes({ heading: newHeading });

    const addRepeaterItem = () => {
        const newRepeater = [...repeater, { image: '', eyebrow: '', title: '', description: '', subtitles: [] }];
        setAttributes({ repeater: newRepeater });
    };

    const updateRepeaterItem = (index, field, value) => {
        const newRepeater = [...repeater];
        newRepeater[index][field] = value;
        setAttributes({ repeater: newRepeater });
    };

    const removeRepeaterItem = (index) => {
        const newRepeater = repeater.filter((_, i) => i !== index);
        setAttributes({ repeater: newRepeater });
    };

    const addRepeaterSubTitle = (index) => {
        const newRepeater = [...repeater];
        newRepeater[index].subtitles.push({ text: '', checked: false });
        setAttributes({ repeater: newRepeater });
    };

    const updateRepeaterSubTitle = (index, subIndex, field, value) => {
        const newRepeater = [...repeater];
        newRepeater[index].subtitles[subIndex][field] = value;
        setAttributes({ repeater: newRepeater });
    };

    const removeRepeaterSubTitle = (index, subIndex) => {
        const newRepeater = [...repeater];
        newRepeater[index].subtitles = newRepeater[index].subtitles.filter((_, i) => i !== subIndex);
        setAttributes({ repeater: newRepeater });
    };

    // Collapsible logic
    const [isCollapsed, setCollapsed] = useState(true); // Manage collapse state

    const toggleCollapse = () => {
        setCollapsed(!isCollapsed); // Toggle collapse state
    };

    return (
        <div {...useBlockProps()}>
            <h2
                onClick={toggleCollapse}
                className={`block-title ${isCollapsed ? '' : 'show'}`} // Conditionally apply 'show' class
                style={{ cursor: 'pointer', color: isCollapsed ? 'black' : 'gray' }}
            >
                {__('Pricing Block', 'pricing-block')}
                <span></span>
            </h2>

            {/* Block Content */}
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}> {/* Conditionally apply 'collapsed' class */}
                {!isCollapsed && ( // Only render the content when not collapsed
                    <div className="cta-fields">
                        <h6>{__('Title', 'pricing-block')}</h6>
                        <TextControl
                            value={title}
                            onChange={onChangeTitle}
                            placeholder={__('Add Title', 'pricing-block')}
                        />
                        <h6>{__('Heading', 'pricing-block')}</h6>
                        <TextControl
                            value={heading}
                            onChange={onChangeHeading}
                            placeholder={__('Add Heading', 'pricing-block')}
                        />

                        {/* Repeater Items */}
                        <PanelBody title={__('Repeater Items', 'pricing-block')} initialOpen={true}>
                            {repeater.map((item, index) => (
                                <PanelRow key={index}>
                                    <div>
                                        <h6>{__('Title', 'pricing-block')}</h6>
                                        <CheckboxControl
                                            label={__('Featured', 'pricing-block')}
                                            checked={item.checked}
                                            onChange={(checked) => updateRepeaterItem(index, 'checked', checked)}
                                        />
                                        <TextControl
                                            value={item.title}
                                            onChange={(value) => updateRepeaterItem(index, 'title', value)}
                                            placeholder={__('Enter item title...', 'pricing-block')}
                                        />

                                        <h6>{__('SubTitles', 'pricing-block')}</h6>
                                        <PanelBody initialOpen={true}>
                                            {item.subtitles.map((subtitle, subIndex) => (
                                                <PanelRow key={subIndex}>
                                                    <div>
                                                        <h6>{__('SubTitle', 'pricing-block')}</h6>
                                                        <TextControl
                                                            value={subtitle.text}
                                                            onChange={(value) => updateRepeaterSubTitle(index, subIndex, 'text', value)}
                                                            placeholder={__('Enter subtitle...', 'pricing-block')}
                                                        />
                                                        <CheckboxControl
                                                            label={__('Line Through Checkbox', 'pricing-block')}
                                                            checked={subtitle.checked}
                                                            onChange={(checked) => updateRepeaterSubTitle(index, subIndex, 'checked', checked)}
                                                        />
                                                        <Button
                                                            onClick={() => removeRepeaterSubTitle(index, subIndex)}
                                                            isDestructive
                                                            style={{ marginTop: '10px' }}
                                                        >
                                                            {__('Remove SubTitle', 'pricing-block')}
                                                        </Button>
                                                    </div>
                                                </PanelRow>
                                            ))}
                                            <Button onClick={() => addRepeaterSubTitle(index)} isPrimary style={{ marginTop: '10px' }}>
                                                {__('Add SubTitle', 'pricing-block')}
                                            </Button>
                                        </PanelBody>

                                        {/* Additional Fields */}
                                        <h6>{__('Number', 'pricing-block')}</h6>
                                        <TextControl
                                            value={item.number}
                                            onChange={(value) => updateRepeaterItem(index, 'number', value)}
                                            placeholder={__('Enter Number...', 'pricing-block')}
                                        />
                                        <h6>{__('Month', 'pricing-block')}</h6>
                                        <TextControl
                                            value={item.month}
                                            onChange={(value) => updateRepeaterItem(index, 'month', value)}
                                            placeholder={__('Enter Month...', 'pricing-block')}
                                        />
                                        <h6>{__('Eyebrow', 'pricing-block')}</h6>
                                        <TextControl
                                            value={item.eyebrow}
                                            onChange={(value) => updateRepeaterItem(index, 'eyebrow', value)}
                                            placeholder={__('Enter text...', 'pricing-block')}
                                        />
                                        <h6>{__('Button Text', 'pricing-block')}</h6>
                                        <TextControl
                                            value={item.buttonText}
                                            onChange={(value) => updateRepeaterItem(index, 'buttonText', value)}
                                            placeholder={__('Enter button text...', 'pricing-block')}
                                        />
                                        <h6>{__('Button URL', 'pricing-block')}</h6>
                                        <TextControl
                                            value={item.buttonUrl}
                                            onChange={(value) => updateRepeaterItem(index, 'buttonUrl', value)}
                                            placeholder={__('Enter button URL...', 'pricing-block')}
                                        />

                                        <Button
                                            onClick={() => removeRepeaterItem(index)}
                                            isDestructive
                                            style={{ marginTop: '10px' }}
                                        >
                                            {__('Remove Item', 'pricing-block')}
                                        </Button>
                                    </div>
                                </PanelRow>
                            ))}
                            <Button onClick={addRepeaterItem} isPrimary style={{ marginTop: '10px' }}>
                                {__('Add Item', 'pricing-block')}
                            </Button>
                        </PanelBody>
                    </div>
                )}
            </div>
        </div>
    );
}
