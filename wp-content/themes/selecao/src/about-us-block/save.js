import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, eyebrotext, description, buttonText, buttonUrl, repeater , descriptionright } = attributes;

    return (
        <div {...useBlockProps.save()}>
         

            <section id="about" class="about section">
                <div class="container section-title" data-aos="fade-up">                
                {title && <h2>{eyebrotext}</h2>} 
                {title && <p>{title}</p>}
                </div>
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                           {title && <p>{description}</p>}             
                        {repeater.length > 0 &&
                            repeater.map((item, index) => (
                                <ul
                                    key={index}                                                                                      
                                    data-aos-delay={`${200 + index * 100}`} >                                                                                   
                                    {item.title && 
                                        <li><i class="bi bi-check2-circle"></i> <span>{item.title}</span></li>
                                    }                                      
                                </ul>
                            ))}
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            {title && <p>{descriptionright}</p>}                    
                            {buttonText && buttonUrl && (
                                <a href={buttonUrl} className="read-more">
                                    <span>{buttonText}</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
