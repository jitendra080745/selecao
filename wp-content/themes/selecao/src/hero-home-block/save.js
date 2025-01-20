import { useBlockProps} from '@wordpress/block-editor';

    export default function save({ attributes }) {
        const {buttonUrl, buttonText, repeater} = attributes;
    return (
        <div {...useBlockProps.save()}>
            <section id="hero" class="hero section dark-background">
                <div id="hero-carousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-item active">
                        {repeater.length > 0 &&
                            repeater.map((item, index) => (
                            <div class="carousel-container" key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={`${200 + index * 100}`}>
                                {item.title && <h2 class="animate__animated animate__fadeInDown"> {item.title}</h2>}
                                {item.description && <p class="animate__animated animate__fadeInUp">{item.description}</p>}
                                <a href={item.buttonUrl || '#'} class="btn-get-started animate__animated animate__fadeInUp scrollto">
                                    {item.buttonText || 'Click Here'}
                                </a>
                            </div>
                        ))}
                    </div>
                    <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>
                </div>
                {/* <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                    <defs>
                        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                    </defs>
                    <g class="wave1">
                        <use xlink:href="#wave-path" x="50" y="3"></use>
                    </g>
                    <g class="wave2">
                        <use xlink:href="#wave-path" x="50" y="0"></use>
                    </g>
                    <g class="wave3">
                        <use xlink:href="#wave-path" x="50" y="9"></use>
                    </g>
                </svg> */}

            </section>
                
        </div>
    );
}