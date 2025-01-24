import { __ } from '@wordpress/i18n';
import { useBlockProps, URLInput, RichText, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { title, heading, repeater } = attributes;

    // Update title and heading
    const onChangeTitle = (newTitle) => setAttributes({ title: newTitle });
    const onChangeHeading = (newHeading) => setAttributes({ heading: newHeading });

    // Add a new repeater item
    const addRepeaterItem = () => {
        const newRepeater = [...repeater, { image: '', title: '', subtitle: '', description: '' }];
        setAttributes({ repeater: newRepeater });
    };

    // Update specific field of a repeater item
    const updateRepeaterItem = (index, field, value) => {
        const newRepeater = [...repeater];
        newRepeater[index][field] = value;
        setAttributes({ repeater: newRepeater });
    };

    // Remove a repeater item
    const removeRepeaterItem = (index) => {
        const newRepeater = repeater.filter((_, i) => i !== index);
        setAttributes({ repeater: newRepeater });
    };

    // Toggle to show/hide the panel
    const [isCollapsed, setCollapsed] = useState(true); // State to track if the block is collapsed

    const toggleCollapse = () => {
        setCollapsed(!isCollapsed); // Toggle the collapsed state
    };

    // Initialize Swiper on component mount
    useEffect(() => {
        // Check if Swiper is loaded
        if (typeof Swiper !== 'undefined') {
            // Initialize Swiper only if it's loaded
            const swiperConfig = {
                loop: true,
                slidesPerView: 3,
                speed: 600,
                autoplay: {
                    delay: 5000
                },
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }
            };

            // Initialize Swiper instance after the component is mounted
            new Swiper('.swiper.testing', swiperConfig);
        }
    }, [repeater]); // The effect will rerun if repeater items change

    return (
        <div {...useBlockProps()}>
            <h2 
                onClick={toggleCollapse} 
                className={`block-title ${isCollapsed ? '' : 'show'}`} 
                style={{ cursor: 'pointer', color: isCollapsed ? 'black' : 'gray' }}
            >
                {__('Testimonial Block', 'testimonial-block')}
                <span></span>
            </h2>

            {/* Apply the collapsed class conditionally */}
            <div className={`block-wrap ${isCollapsed ? 'collapsed' : ''}`}>
                {/* Only render the content if it's not collapsed */}
                {!isCollapsed && (
                    <div className="cta-fields">
                        <h6>{__('Title', 'testimonial-block')}</h6>
                        <TextControl
                            value={title}
                            onChange={onChangeTitle}
                            placeholder={__('Add Title', 'testimonial-block')}
                        />

                        <h6>{__('Heading', 'testimonial-block')}</h6>
                        <TextControl
                            value={heading}
                            onChange={onChangeHeading}
                            placeholder={__('Add Heading', 'testimonial-block')}
                        />

                        {/* Repeater Items */}
                        <PanelBody title={__('Repeater Items', 'testimonial-block')} initialOpen={true}>
                            {repeater.length > 0 && (
                                <div className="swiper-wrapper">
                                    {repeater.map((item, index) => (
                                        <div className="swiper-slide" key={index}>
                                            <PanelRow>
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

                                                    {/* Title Field */}
                                                    <h6>{__('Title', 'testimonial-block')}</h6>
                                                    <TextControl
                                                        value={item.title}
                                                        onChange={(value) => updateRepeaterItem(index, 'title', value)}
                                                        placeholder={__('Enter item title...', 'testimonial-block')}
                                                    />

                                                    {/* Subtitle Field */}
                                                    <h6>{__('Subtitle', 'testimonial-block')}</h6>
                                                    <TextControl
                                                        value={item.subtitle}
                                                        onChange={(value) => updateRepeaterItem(index, 'subtitle', value)}
                                                        placeholder={__('Enter subtitle...', 'testimonial-block')}
                                                    />

                                                    {/* Description Field */}
                                                    <h6>{__('Description', 'testimonial-block')}</h6>
                                                    <TextControl
                                                        value={item.description}
                                                        onChange={(value) => updateRepeaterItem(index, 'description', value)}
                                                        placeholder={__('Enter description...', 'testimonial-block')}
                                                    />

                                                    {/* Remove Item Button */}
                                                    <Button
                                                        onClick={() => removeRepeaterItem(index)}
                                                        isDestructive
                                                        style={{ marginTop: '10px' }}
                                                    >
                                                        {__('Remove Item', 'testimonial-block')}
                                                    </Button>
                                                </div>
                                            </PanelRow>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <Button onClick={addRepeaterItem} isPrimary style={{ marginTop: '10px' }}>
                                {__('Add Item', 'testimonial-block')}
                            </Button>
                        </PanelBody>
                    </div>
                )}
            </div>
        </div>
    );
}
