import { useBlockProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const { title, heading, repeater } = attributes;
    return (
        <div {...useBlockProps.save()}>
            <section id="testimonials" className="testimonials section">
                <div className="container section-title" data-aos="fade-up">
                    {title && <h2>{title}</h2>}
                    {heading && <p>{heading}</p>}
                </div>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper testing">
                        {/* useEffect(() => {
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
                        }, [repeater]); // The effect will rerun if repeater items change */}

                        <div className="swiper-wrapper">
                            {repeater.length > 0 &&
                                repeater.map((item, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <div className="testimonial-item">
                                            {item.image && (
                                                <img
                                                    src={item.image}
                                                    alt={`Testimonial ${index + 1}`}
                                                    className="testimonial-img"
                                                />
                                            )}
                                            {item.title && <h3>{item.title}</h3>}
                                            {item.subtitle && <h4>{item.subtitle}</h4>}
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                <span>{item.description}</span>
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}