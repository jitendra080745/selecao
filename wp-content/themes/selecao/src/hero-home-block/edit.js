import { __ } from '@wordpress/i18n';
import { useBlockProps ,URLInput, RichText , MediaUpload} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    const { heading, description, } = attributes;
    const onChangeHeading = (newHeading) => setAttributes({ heading: newHeading });
    const onChangeDescription = (newDescription) => setAttributes({ description: newDescription });

    return (
        <div {...useBlockProps()}>
           
                <div className="cta-fields">
                  
                    <TextControl
                        tagName="h4"
                        label={__('Heading', 'hero-home-block')}
                        value={heading}
                        onChange={onChangeHeading}
                        placeholder={__('Add Heading', 'hero-home-block')}
                    />
                    <TextControl
                        tagName="p"
                        label={__('Description', 'hero-home-block')}
                        value={description}
                        onChange={onChangeDescription}
                        placeholder={__('Add Description', 'hero-home-block')}
                    />
                   
                </div>    
        </div>
        
    );
}
