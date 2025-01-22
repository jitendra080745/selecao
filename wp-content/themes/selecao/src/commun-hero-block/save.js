import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title,  description, breadcrumbs  } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div class="page-title dark-background">
                <div class="container position-relative">
                {title && <h1>{title}</h1>}
                {title && <p>{description}</p>}  
                    <nav class="breadcrumbs">        
                    <ol>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <li key={index} className={index === breadcrumbs.length - 1 ? 'current' : ''}>
                            {index !== breadcrumbs.length - 1 ? (
                                <a href={breadcrumb.url}>{breadcrumb.title}</a>
                            ) : (
                                    breadcrumb.title
                                )}
                            </li>
                        ))}
                    </ol>
                    </nav>
                </div>
            </div>         
        </div>
    );
}
