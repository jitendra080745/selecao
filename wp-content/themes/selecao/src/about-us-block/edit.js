import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { TextControl, Button, PanelBody, PanelRow } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { title, eyebrotext, description, buttonText, buttonUrl, repeater } = attributes;

    // Handlers for updating attributes
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeEyebroText = (neweyebrotext) => setAttributes({ eyebrotext: neweyebrotext });
    const onChangeDescription = (newDescription) => setAttributes({ description: newDescription });
    const onChangeButtonText = (newButtonText) => setAttributes({ buttonText: newButtonText });
    const onChangeButtonUrl = (newButtonUrl) => setAttributes({ buttonUrl: newButtonUrl });

    // Add new repeater item
    const addRepeaterItem = () => {
        const newRepeater = [...repeater, { image: '', title: '', description: '' }];
        setAttributes({ repeater: newRepeater });
    };

    // Update a specific repeater item field
    const updateRepeaterItem = (index, field, value) => {
        const newRepeater = [...repeater];
        newRepeater[index][field] = value;
        setAttributes({ repeater: newRepeater });
    };

    // Remove a specific repeater item
    const removeRepeaterItem = (index) => {
        const newRepeater = repeater.filter((_, i) => i !== index);
        setAttributes({ repeater: newRepeater });
    };

    // Remove image from a specific repeater item
    const onRemoveImage = (index) => {
        const newRepeater = [...repeater];
        newRepeater[index].image = '';
        setAttributes({ repeater: newRepeater });
    };

    // Manage collapse state for block-wrap
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Toggle collapse state
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div  {...useBlockProps()}>
            <h2 onClick={toggleCollapse} className={`block-title ${isCollapsed ? '' : 'show'}`}>{__('About Us Block', 'about-us-block')}
            <span></span>
            </h2>
           <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}>
                 {/* Toggle Collapse Button */}

            {/* Content Section */}
            {!isCollapsed && (
                <>

                    {/* Title Input */}
                    <h6>{__('Eyebro Text', 'about-us-block')}</h6>
                    <TextControl
                        value={eyebrotext}
                        onChange={onChangeEyebroText}
                        placeholder={__('Enter Eyebro Text...', 'about-us-block')}
                    />
                    {/* Title Input */}
                    <h6>{__('Title', 'about-us-block')}</h6>
                    <TextControl
                        value={title}
                        onChange={onChangeTitle}
                        placeholder={__('Enter title...', 'about-us-block')}
                    />
                    {/* Description Input */}
                    <h6>{__('Description', 'about-us-block')}</h6>
                    <TextControl
                        value={description}
                        onChange={onChangeDescription}
                        placeholder={__('Enter description...', 'about-us-block')}
                    />



                    {/* Button Text */}
                    <h6>{__('Button Text', 'about-us-block')}</h6>
                    <TextControl
                        value={buttonText}
                        onChange={onChangeButtonText}
                        placeholder={__('Button text...', 'about-us-block')}
                    />

                    {/* Button URL */}
                    <h6>{__('Button URL', 'about-us-block')}</h6>
                    <TextControl
                        value={buttonUrl}
                        onChange={onChangeButtonUrl}
                        placeholder={__('Button URL...', 'about-us-block')}
                    />

                    {/* Repeater Items Section */}
                    <h6>{__('Repeater Items', 'about-us-block')}</h6>
                    <PanelBody initialOpen={true}>
                        {repeater.map((item, index) => (
                            <PanelRow key={index}>
                                <div>
                                    {/* Image Upload */}
                                    <h6>{__('Image', 'about-us-block')}</h6>
                                    {item.image && <img src={item.image} alt="" style={{ maxWidth: '100%' }} />}
                                    <MediaUpload
                                        onSelect={(media) => updateRepeaterItem(index, 'image', media.url)}
                                        allowedTypes={['image']}
                                        render={({ open }) => (
                                            <>
                                                {item.image ? (
                                                    <Button onClick={() => onRemoveImage(index)} isPrimary>
                                                        {__('Remove Image', 'about-us-block')}
                                                    </Button>
                                                ) : (
                                                    <>
                                                        <span className="title-no-image-selected">
                                                            {__('No image selected', 'about-us-block')}
                                                        </span>
                                                        <Button onClick={open} isPrimary>
                                                            {__('Add Image', 'about-us-block')}
                                                        </Button>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    />

                                    {/* Title Input for Repeater Item */}
                                    <h6>{__('Title', 'about-us-block')}</h6>
                                    <TextControl
                                        value={item.title}
                                        onChange={(value) => updateRepeaterItem(index, 'title', value)}
                                        placeholder={__('Enter item title...', 'about-us-block')}
                                    />

                                    {/* Description Input for Repeater Item */}
                                    <h6>{__('Description', 'about-us-block')}</h6>
                                    <TextControl
                                        value={item.description}
                                        onChange={(value) => updateRepeaterItem(index, 'description', value)}
                                        placeholder={__('Enter item description...', 'about-us-block')}
                                    />

                                    {/* Remove Repeater Item Button */}
                                    <Button
                                        onClick={() => removeRepeaterItem(index)}
                                        isDestructive
                                        style={{ marginTop: '10px' }}
                                    >
                                        {__('Remove Item', 'about-us-block')}
                                    </Button>
                                </div>
                            </PanelRow>
                        ))}
                        <Button onClick={addRepeaterItem} isPrimary style={{ marginTop: '10px' }}>
                            {__('Add Item', 'about-us-block')}
                        </Button>
                    </PanelBody>
                </>
            )}
           </div>
        </div>
    );
}
