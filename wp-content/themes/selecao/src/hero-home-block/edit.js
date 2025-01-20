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
            <h2 onClick={() => setCallupOpen(!isCallupOpen)}  class="block-title show"  style={{ cursor: 'pointer', color: isCallupOpen ? 'black' : 'black' }}
            > {__('Home Hero Block', 'hero-home-block')} </h2>
            {/* <h2 onClick={toggleCollapse} className={`block-title ${isCollapsed ? '' : 'show'}`}>{__('About Us Block', 'about-us-block')}

            class="block-title show" */}

            {isCallupOpen && (
            <div className="cta-fields">
                <PanelBody title={__('Repeater Items', 'hero-home-block')} initialOpen={true}>
                    {repeater.map((item, index) => (
                        <PanelRow key={index}>
                            <div>
                                <h6>{__('Title', 'hero-home-block')}</h6>
                                <TextControl
                                    value={item.title}
                                    onChange={(value) => updateRepeaterItem(index, 'title', value)}
                                    placeholder={__('Enter item title...', 'hero-home-block')}
                                />
                                <h6>{__('Description', 'hero-home-block')}</h6>
                                <TextControl
                                    value={item.description}
                                    onChange={(value) => updateRepeaterItem(index, 'description', value)}
                                    placeholder={__('Enter item description...', 'hero-home-block')}
                                />
                                <h6>{__('Button Text', 'hero-home-block')}</h6>
                                    <TextControl
                                        value={item.buttonText}
                                        onChange={(value) => updateRepeaterItem(index, 'buttonText',  value )}
                                        placeholder={__('Enter button text...', 'hero-home-block')}
                                    />
                                     <h6>{__('Button URL', 'hero-home-block')}</h6>
                                    <TextControl
                                        value={item.buttonUrl}
                                        onChange={(value) => updateRepeaterItem(index, 'buttonUrl',  value)}
                                        placeholder={__('Enter button URL...', 'hero-home-block')}
                                    />
                                <Button
                                    onClick={() => removeRepeaterItem(index)}
                                    isDestructive
                                    style={{ marginTop: '10px' }}
                                >
                                    {__('Remove Item', 'hero-home-block')}
                                </Button>
                            </div>
                        </PanelRow>
                    ))}
                    <Button onClick={addRepeaterItem} isPrimary style={{ marginTop: '10px' }}>
                        {__('Add Item', 'hero-home-block')}
                    </Button>
                </PanelBody>
            </div> 
             )}   
        </div>
        
    );
}
