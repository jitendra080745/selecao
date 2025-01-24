import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUploadCheck, MediaUpload} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl, CheckboxControl  } from '@wordpress/components';
import { useState } from '@wordpress/element';

import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    const {repeater, } = attributes;

    const addRepeaterItem = () => {
        const newRepeater = [...repeater, { image: '',image_1: '', tabtitle: '',bodytitle: '', bodydescription: '',bodylist: '',bodybottomdescription: '',subtitles: [] }];
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
            <h2 onClick={() => setCallupOpen(!isCallupOpen)}  class="block-title show"  style={{ cursor: 'pointer', color: isCallupOpen ? 'black' : 'black' }}
            > {__('Features Block', 'features-block')} </h2>
            {isCallupOpen && (
            <div className="cta-fields">
                <PanelBody title={__('Tab Repeater', 'features-block')} initialOpen={true}>
                    {repeater.map((item, index) => (
                        <PanelRow key={index}>
                            <div>
                                <h6>{__('Tab Image', 'features-block')}</h6>
                                <MediaUploadCheck>
                                    <div className="image-upload-section">
                                        {!item.image ? (
                                            <MediaUpload
                                                onSelect={(media) => updateRepeaterItem(index, 'image', media.url)}
                                                allowedTypes={['image']}
                                                value={item.image}
                                                render={({ open }) => (
                                                    <Button onClick={open} isSecondary>
                                                        {__('Select Image', 'features-block')}
                                                    </Button>
                                                )}
                                            />
                                        ) : (
                                            <div className="image-wrapper">
                                                <img src={item.image} alt={__('Selected Image', 'features-block')} />
                                                <Button
                                                    onClick={() => updateRepeaterItem(index, 'image', '')}
                                                    isDestructive
                                                >
                                                    {__('Remove Image', 'features-block')}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </MediaUploadCheck>
                                <h6>{__('Tab Title', 'features-block')}</h6>
                                <TextControl
                                    value={item.tabtitle}
                                    onChange={(value) => updateRepeaterItem(index, 'tabtitle', value)}
                                    placeholder={__('Enter Tab Title...', 'features-block')}
                                />
                                <h6>{__('Body Title', 'features-block')}</h6>
                                <TextControl
                                    value={item.bodytitle}
                                    onChange={(value) => updateRepeaterItem(index, 'bodytitle', value)}
                                    placeholder={__('Enter Body Title...', 'features-block')}
                                />
                                <h6>{__('Body Description', 'features-block')}</h6>
                                <TextControl
                                    value={item.bodydescription}
                                    onChange={(value) => updateRepeaterItem(index, 'bodydescription', value)}
                                    placeholder={__('Enter Description...', 'features-block')}
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
                                <h6>{__('Body Bottom Description', 'features-block')}</h6>
                                <TextControl
                                    value={item.bodybottomdescription}
                                    onChange={(value) => updateRepeaterItem(index, 'bodybottomdescription', value)}
                                    placeholder={__('Enter Bottom Description...', 'features-block')}
                                />
                                <h6>{__('Body Image', 'features-block')}</h6>
                                <MediaUploadCheck>
                                    <div className="image-upload-section">
                                        {!item.image_1 ? (
                                            <MediaUpload
                                                onSelect={(media) => updateRepeaterItem(index, 'image_1', media.url)}
                                                allowedTypes={['image']}
                                                value={item.image_1}
                                                render={({ open }) => (
                                                    <Button onClick={open} isSecondary>
                                                        {__('Select Image', 'features-block')}
                                                    </Button>
                                                )}
                                            />
                                        ) : (
                                            <div className="image-wrapper">
                                                <img src={item.image_1} alt={__('Selected Image', 'features-block')} />
                                                <Button
                                                    onClick={() => updateRepeaterItem(index, 'image_1', '')}
                                                    isDestructive
                                                >
                                                    {__('Remove Body Image', 'features-block')}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </MediaUploadCheck>
                                <Button
                                    onClick={() => removeRepeaterItem(index)}
                                    isDestructive
                                    style={{ marginTop: '10px' }}
                                >
                                    {__('Remove Item', 'features-block')}
                                </Button>
                            </div>
                        </PanelRow>
                    ))}
                    <Button onClick={addRepeaterItem} isPrimary style={{ marginTop: '10px' }}>
                        {__('Add Tab', 'features-block')}
                    </Button>
                </PanelBody>
            </div> 
             )}   
        </div>
        
    );
}
