import { __ } from '@wordpress/i18n';
import { useBlockProps, URLInput, RichText, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl, CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { title, heading, repeater } = attributes;

    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeHeading = (newHeading) => setAttributes({ heading: newHeading });

    const addRepeaterItem = () => {
        const newRepeater = [...repeater, { image: '', eyebrow:'', title: '', description: '', subtitles: [] }];
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

    const [isCallupOpen, setCallupOpen] = useState(true);

    return (
        <div {...useBlockProps()}>
            <h2 onClick={() => setCallupOpen(!isCallupOpen)} className="block-title show" style={{ cursor: 'pointer', color: isCallupOpen ? 'black' : 'black' }}>
                {__('Pricing Block', 'pricing-block')}
            </h2>
            {isCallupOpen && (
                <div className="cta-fields">
                    <h6>{__('Title', 'pricing-block')}</h6>
                    <TextControl
                        tagName="p"
                        value={title}
                        onChange={onChangeTitle}
                        placeholder={__('Add Title', 'pricing-block')}
                    />
                    <h6>{__('Heading', 'pricing-block')}</h6>
                    <TextControl
                        tagName="h2"
                        value={heading}
                        onChange={onChangeHeading}
                        placeholder={__('Add Heading', 'pricing-block')}
                    />

                    <PanelBody title={__('Repeater Items', 'pricing-block')} initialOpen={true}>
                        {repeater.map((item, index) => (
                            <PanelRow key={index}>
                                <div>
                                    <h6>{__('Title', 'pricing-block')}</h6>
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
                                                        label={__('Checkbox', 'pricing-block')}
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
    );
}
