import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, description, accordion } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div id="faq" className="faq section">
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    {title && <h2>{title}</h2>}
                    {description && <p>{description}</p>}
                </div>

                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row">
                        <div className="col-12">
                            <div className="custom-accordion" id="accordion-faq">
                                {accordion.length > 0 &&
                                    accordion.map((item, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse-faq-${index}`}
                                                    aria-expanded={index === 0 ? 'true' : 'false'}
                                                    aria-controls={`collapse-faq-${index}`}
                                                >
                                                    {item.question}
                                                </button>
                                            </h2>

                                            <div
                                                id={`collapse-faq-${index}`}
                                                className={`collapse ${index === 0 ? 'show' : ''}`}
                                                aria-labelledby={`heading-${index}`}
                                                data-parent="#accordion-faq"
                                            >
                                                <div className="accordion-body">{item.answer}</div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
