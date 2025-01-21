import { useBlockProps} from '@wordpress/block-editor';

    export default function save({ attributes }) {
        const {title,heading, repeater} = attributes;
    return (
        <div {...useBlockProps.save()}>
            <section id="testimonials" class="testimonials section">
                <div class="container section-title" data-aos="fade-up">
                    {title && <h2>{title}</h2>}
                    {heading && <p>{heading}</p>}
                
                </div>
                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="swiper init-swiper">
                        <div class="swiper-wrapper">
                            {repeater.length > 0 && repeater.map((item, index) => (
                                <div class="swiper-slide">
                                    <div class="testimonial-item">
                                            {item.image && <img src={item.image} alt="" data-aos="fade-in"/>}
                                            
                                            {item.title && <h3>{item.title}</h3>}
                                            {item.subtitle && <h4>{item.subtitle}</h4>}
                                        <div class="stars">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i class="bi bi-quote quote-icon-left"></i>
                                            <span>{item.description && <p>{item.description}</p>}</span>
                                            <i class="bi bi-quote quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}