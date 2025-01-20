import { useBlockProps} from '@wordpress/block-editor';

    export default function save({ attributes }) {
        const {heading, description} = attributes;
    return (
        <div {...useBlockProps.save()}>
            <h4>{heading}</h4>
            <p>{description}</p>
            
        </div>
        
    );
}


