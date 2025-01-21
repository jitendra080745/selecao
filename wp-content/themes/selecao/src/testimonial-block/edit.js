import { __ } from '@wordpress/i18n';
import { useBlockProps ,URLInput, RichText ,MediaUploadCheck, MediaUpload} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    const {title, heading, repeater,image } = attributes;
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeHeading = (newHeading) => setAttributes({ heading: newHeading });

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
            > {__('Testimonial Block', 'testimonial-block')} </h2>
                      {isCallupOpen && (
            <div className="cta-fields">
                <h6>{__('Title', 'testimonial-block')}</h6>
                <TextControl
                    tagName="p"
                    value={title}
                    onChange={onChangeTitle}
                    placeholder={__('Add Title', 'testimonial-block')}
                />
                <h6>{__('Heading', 'testimonial-block')}</h6>
                <TextControl
                    tagName="h2"
                    value={heading}
                    onChange={onChangeHeading}
                    placeholder={__('Add Heading', 'testimonial-block')}
                />

                <PanelBody title={__('Repeater Items', 'testimonial-block')} initialOpen={true}>
                    {repeater.map((item, index) => (
                        <PanelRow key={index}>
                            <div>
                                <h6>{__('Image', 'testimonial-block')}</h6>
                                    <MediaUploadCheck>
                                    <div className="image-upload-section">
                                        {!item.image ? (
                                            <MediaUpload
                                                onSelect={(media) => updateRepeaterItem(index, 'image', media.url)}
                                                allowedTypes={['image']}
                                                value={item.image}
                                                render={({ open }) => (
                                                    <Button onClick={open} isSecondary>
                                                        {__('Select Image', 'testimonial-block')}
                                                    </Button>
                                                )}
                                            />
                                        ) : (
                                            <div className="image-wrapper">
                                                <img src={item.image} alt={__('Selected Image', 'testimonial-block')} />
                                                <Button
                                                    onClick={() => updateRepeaterItem(index, 'image', '')}
                                                    isDestructive
                                                >
                                                    {__('Remove Image', 'testimonial-block')}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </MediaUploadCheck>

                                
                                    <h6>{__('Title', 'testimonial-block')}</h6>
                                <TextControl
                                    value={item.title}
                                    onChange={(value) => updateRepeaterItem(index, 'title', value)}
                                    placeholder={__('Enter item title...', 'testimonial-block')}
                                /> 
                                <h6>{__('SubTitle', 'testimonial-block')}</h6>
                                <TextControl
                                    value={item.subtitle}
                                    onChange={(value) => updateRepeaterItem(index, 'subtitle', value)}
                                    placeholder={__('Enter sub title...', 'testimonial-block')}
                                />
                                <h6>{__('Description', 'testimonial-block')}</h6>
                                <TextControl
                                    value={item.description}
                                    onChange={(value) => updateRepeaterItem(index, 'description', value)}
                                    placeholder={__('Enter item description...', 'testimonial-block')}
                                />
                               
                                <Button
                                    onClick={() => removeRepeaterItem(index)}
                                    isDestructive
                                    style={{ marginTop: '10px' }}
                                >
                                    {__('Remove Item', 'testimonial-block')}
                                </Button>
                            </div>
                        </PanelRow>
                    ))}
                    <Button onClick={addRepeaterItem} isPrimary style={{ marginTop: '10px' }}>
                        {__('Add Item', 'testimonial-block')}
                    </Button>
                </PanelBody>
            </div> 
             )}   
        </div>
        
    );
}
