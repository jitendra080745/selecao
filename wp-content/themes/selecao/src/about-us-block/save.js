import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, eyebrotext, description, buttonText, buttonUrl, repeater } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <section id="about" className="about section light-background">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row align-items-xl-center gy-5">
                        <div className="col-xl-5 content">
                            {title && <h3>{title}</h3>}
                            {title && <h3>{eyebrotext}</h3>}                            
                            {description && <p>{description}</p>}
                            {buttonText && buttonUrl && (
                                <a href={buttonUrl} className="read-more">
                                    <span>{buttonText}</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            )}
                        </div>

                        <div className="col-xl-7">
                            <div className="row gy-4 icon-boxes">
                                {repeater.length > 0 &&
                                    repeater.map((item, index) => (
                                        <div
                                            key={index}
                                            className="col-md-6"
                                            data-aos="fade-up"
                                            data-aos-delay={`${200 + index * 100}`}
                                        >
                                            <div className="icon-box">
                                                {item.image && <img src={item.image} alt={item.title} className="icon-image" />}
                                                {item.title && <h3>{item.title}</h3>}
                                                {item.description && <p>{item.description}</p>}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="about section">
                <div class="container section-title" data-aos="fade-up">                
                {title && <h2>{eyebrotext}</h2>} 
                {title && <p>{title}</p>}
                </div>

                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i class="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                            <li><i class="bi bi-check2-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                            <li><i class="bi bi-check2-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
                        </ul>
                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
}
