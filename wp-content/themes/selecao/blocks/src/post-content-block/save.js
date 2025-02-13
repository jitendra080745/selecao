import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div
                className="custom-title-output"
                dangerouslySetInnerHTML={{ __html: title }}
            ></div>
        </div>
    );
}
