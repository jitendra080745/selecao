import { __ } from '@wordpress/i18n';
import { useBlockProps ,URLInput, RichText , MediaUpload} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    const {buttonUrl, buttonText, repeater, } = attributes;

    const addRepeaterItem = () => {
        const newRepeater = [...repeater, { image: '', title: '', description: '' }];
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
    const [isCallupOpen, setCallupOpen] = useState(true);

    return (
        <div {...useBlockProps()}>
            <h2
                onClick={() => setCallupOpen(!isCallupOpen)}
                style={{ cursor: 'pointer', color: isCallupOpen ? 'black' : 'black' }}
            >
                {__('Home Hero Block', 'hero-home-block')}
            </h2>

            {isCallupOpen && (
            <div className="cta-fields">
                <PanelBody title={__('Repeater Items', 'about-block')} initialOpen={true}>
                    {repeater.map((item, index) => (
                        <PanelRow key={index}>
                            <div>
                                <TextControl
                                    label={__('Title', 'about-block')}
                                    value={item.title}
                                    onChange={(value) => updateRepeaterItem(index, 'title', value)}
                                    placeholder={__('Enter item title...', 'about-block')}
                                />
                                <TextControl
                                    label={__('Description', 'about-block')}
                                    value={item.description}
                                    onChange={(value) => updateRepeaterItem(index, 'description', value)}
                                    placeholder={__('Enter item description...', 'about-block')}
                                />
                                    <TextControl
                                        label={__('Button Text', 'about-block')}
                                        value={item.buttonText}
                                        onChange={(value) => updateRepeaterItem(index, 'buttonText',  value )}
                                        placeholder={__('Enter button text...', 'about-block')}
                                    />
                                    <TextControl
                                        label={__('Button URL', 'about-block')}
                                        value={item.buttonUrl}
                                        onChange={(value) => updateRepeaterItem(index, 'buttonUrl',  value)}
                                        placeholder={__('Enter button URL...', 'about-block')}
                                    />
                                <Button
                                    onClick={() => removeRepeaterItem(index)}
                                    isDestructive
                                    style={{ marginTop: '10px' }}
                                >
                                    {__('Remove Item', 'about-block')}
                                </Button>
                            </div>
                        </PanelRow>
                    ))}
                    <Button onClick={addRepeaterItem} isPrimary style={{ marginTop: '10px' }}>
                        {__('Add Item', 'about-block')}
                    </Button>
                </PanelBody>
            </div> 
             )}   
        </div>
        
    );
}
