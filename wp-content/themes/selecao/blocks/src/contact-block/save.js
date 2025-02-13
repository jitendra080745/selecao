import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, description, shortcode, accordion } = attributes;

    return (
        <div {...useBlockProps.save()}>
        <section id="contact" class="contact section">
            <div class="container section-title aos-init aos-animate" data-aos="fade-up">
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
            </div>

            <div class="container aos-init aos-animate" data-aos="fade" data-aos-delay="100">
            <div class="row gy-4">
                <div class="col-lg-4">
                {accordion.length > 0 &&
                    accordion.map((item, index) => (
                    <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <i class="bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                        <h3> {item.question}</h3>
                        <p>{item.answer}</p>
                        </div>
                    </div>
                ))}

                </div>

                <div class="col-lg-8">
                {shortcode && <p>{shortcode}</p>}
                </div>

            </div>

            </div>
        </section>
        </div>
    );
}
