import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title } = attributes;

    return (
        <div {...useBlockProps.save()}>
         <section id="call-to-action" class="call-to-action section dark-background">

            <div class="container">
                <div class="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <div class="col-xl-9 text-center text-xl-start">
                    {title && <h3>{title}</h3>}                
                    </div>                  
                </div>
            </div>
           </section>           
        </div>
    );
}
