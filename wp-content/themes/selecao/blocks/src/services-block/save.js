import { useBlockProps} from '@wordpress/block-editor';
    export default function save({ attributes }) {
        const {title,heading, repeater} = attributes;
    return (
        <div {...useBlockProps.save()}>
            <section id="services" class="services section">
                <div class="container section-title" data-aos="fade-up">
                    {title && <h2>{title}</h2>}
                    {title && <p>{heading}</p>}
                </div>
                <div class="container">
                    <div class="row gy-4">
                        {repeater.length > 0 && repeater.map((item, index) => (
                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div class="service-item  position-relative" key={index}  className="col-md-6"  data-aos="fade-up"  data-aos-delay={`${200 + index * 100}`}>
                                    <div class="icon">
                                        {/* {item.image && <img src={item.image} alt={item.title} className="icon-image" />} */}
                                        <i class="bi bi-cash-stack" style="color: #0dcaf0;"></i>
                                    </div>
                                    <a href="service-details.html" class="stretched-link">  {item.title && <h3>{item.title}</h3>} </a>
                                    {item.description && <p>{item.description}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}