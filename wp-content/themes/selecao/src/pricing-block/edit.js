import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl, CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { title, heading, repeater } = attributes;

    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeHeading = (newHeading) => setAttributes({ heading: newHeading });

    // Add a repeater item (minimum of one item, unlimited otherwise)
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
        if (repeater.length > 1) {  // Ensure there's at least 1 item
            const newRepeater = repeater.filter((_, i) => i !== index);
            setAttributes({ repeater: newRepeater });
        }
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
                {__('Services Block', 'services-block')}
                <span></span>
            </h2>

            {/* Block Content */}
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}> {/* Conditionally apply 'collapsed' class */}
                {!isCollapsed && ( // Only render the content when not collapsed
                    <div className="cta-fields">
                        <h6>{__('Title', 'services-block')}</h6>
                        <TextControl
                            value={title}
                            onChange={onChangeTitle}
                            placeholder={__('Add Title', 'services-block')}
                        />
                        <h6>{__('Heading', 'services-block')}</h6>
                        <TextControl
                            value={heading}
                            onChange={onChangeHeading}
                            placeholder={__('Add Heading', 'services-block')}
                        />

                        {/* Repeater Items */}
                        <PanelBody title={__('Repeater Items', 'services-block')} initialOpen={true}>
                            {repeater.map((item, index) => (
                                <PanelRow key={index}>
                                    <div>
                                        <h6>{__('Title', 'services-block')}</h6>
                                        <CheckboxControl
                                            label={__('Featured', 'services-block')}
                                            checked={item.checked}
                                            onChange={(checked) => updateRepeaterItem(index, 'checked', checked)}
                                        />
                                        <TextControl
                                            value={item.title}
                                            onChange={(value) => updateRepeaterItem(index, 'title', value)}
                                            placeholder={__('Enter item title...', 'services-block')}
                                        />

                                        <h6>{__('SubTitles', 'services-block')}</h6>
                                        <PanelBody initialOpen={true}>
                                            {item.subtitles.map((subtitle, subIndex) => (
                                                <PanelRow key={subIndex}>
                                                    <div>
                                                        <h6>{__('SubTitle', 'services-block')}</h6>
                                                        <TextControl
                                                            value={subtitle.text}
                                                            onChange={(value) => updateRepeaterSubTitle(index, subIndex, 'text', value)}
                                                            placeholder={__('Enter subtitle...', 'services-block')}
                                                        />
                                                        <CheckboxControl
                                                            label={__('Line Through Checkbox', 'services-block')}
                                                            checked={subtitle.checked}
                                                            onChange={(checked) => updateRepeaterSubTitle(index, subIndex, 'checked', checked)}
                                                        />
                                                        <Button
                                                            onClick={() => removeRepeaterSubTitle(index, subIndex)}
                                                            isDestructive
                                                            style={{ marginTop: '10px' }}
                                                        >
                                                            {__('Remove SubTitle', 'services-block')}
                                                        </Button>
                                                    </div>
                                                </PanelRow>
                                            ))}
                                            <Button onClick={() => addRepeaterSubTitle(index)} isPrimary style={{ marginTop: '10px' }}>
                                                {__('Add SubTitle', 'services-block')}
                                            </Button>
                                        </PanelBody>

                                        {/* Additional Fields */}
                                        <h6>{__('Number', 'services-block')}</h6>
                                        <TextControl
                                            value={item.number}
                                            onChange={(value) => updateRepeaterItem(index, 'number', value)}
                                            placeholder={__('Enter Number...', 'services-block')}
                                        />
                                        <h6>{__('Month', 'services-block')}</h6>
                                        <TextControl
                                            value={item.month}
                                            onChange={(value) => updateRepeaterItem(index, 'month', value)}
                                            placeholder={__('Enter Month...', 'services-block')}
                                        />
                                        <h6>{__('Eyebrow', 'services-block')}</h6>
                                        <TextControl
                                            value={item.eyebrow}
                                            onChange={(value) => updateRepeaterItem(index, 'eyebrow', value)}
                                            placeholder={__('Enter text...', 'services-block')}
                                        />
                                        <h6>{__('Button Text', 'services-block')}</h6>
                                        <TextControl
                                            value={item.buttonText}
                                            onChange={(value) => updateRepeaterItem(index, 'buttonText', value)}
                                            placeholder={__('Enter button text...', 'services-block')}
                                        />
                                        <h6>{__('Button URL', 'services-block')}</h6>
                                        <TextControl
                                            value={item.buttonUrl}
                                            onChange={(value) => updateRepeaterItem(index, 'buttonUrl', value)}
                                            placeholder={__('Enter button URL...', 'services-block')}
                                        />

                                        <Button
                                            onClick={() => removeRepeaterItem(index)}
                                            isDestructive
                                            style={{ marginTop: '10px' }}
                                        >
                                            {__('Remove Item', 'services-block')}
                                        </Button>
                                    </div>
                                </PanelRow>
                            ))}
                            <Button onClick={addRepeaterItem} isPrimary style={{ marginTop: '10px' }}>
                                {__('Add Item', 'services-block')}
                            </Button>
                        </PanelBody>
                    </div>
                )}
            </div>
        </div>
    );
}
