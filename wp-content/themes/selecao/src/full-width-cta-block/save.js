import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title,  description, buttonText, buttonUrl,  } = attributes;

    return (
        <div {...useBlockProps.save()}>
         <section id="call-to-action" class="call-to-action section dark-background">

            <div class="container">
                <div class="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <div class="col-xl-9 text-center text-xl-start">
                    {title && <h3>{title}</h3>}
                    {title && <p>{description}</p>}     
                    </div>
                    <div class="col-xl-3 cta-btn-container text-center">                
                        {buttonText && buttonUrl && (
                            <a href={buttonUrl} className="cta-btn align-middle">
                                {buttonText}                                   
                            </a>
                        )}
                    </div>
                </div>
            </div>
           </section>           
        </div>
    );
}
