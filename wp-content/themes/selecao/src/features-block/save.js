import { useBlockProps} from '@wordpress/block-editor';

    export default function save({ attributes }) {
        const {repeater} = attributes;
    return (
        <div {...useBlockProps.save()}>
             <section id="features" class="features section">
                {repeater.length > 0 &&  repeater.map((item, index) => (

                    <div class="container">

                        <ul class="nav nav-tabs row  d-flex" data-aos="fade-up" data-aos-delay="100">
                            <li class="nav-item col-3">
                                <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                                    {item.image && <img src={item.image} alt={item.title} />}
                                    {item.tabtitle && <h4 class="d-none d-lg-block"> {item.tabtitle}</h4>}
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
                            <div class="tab-pane fade active show" id="features-tab-1">
                                <div class="row">
                                    <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                        
                                        
                                        {item.bodytitle && <h3> {item.bodytitle}</h3>}
                                        {item.bodydescription && <p class="fst-italic"> {item.bodydescription}</p>}
                                        
                                        <ul>
                                            <li><i class="bi bi-check2-all"></i>
                                                {item.bodylist && <spab> {item.bodylist}</spab>}
                                            </li>
                                        </ul>
                                        
                                        {item.bodybottomdescription && <p> {item.bodybottomdescription}</p>}

                                    </div>
                                    <div class="col-lg-6 order-1 order-lg-2 text-center">
                                        {/* <img src="assets/img/working-1.jpg" alt="" class="img-fluid"/> */}
                                        {item.image_1 && <img src={item.image_1} alt={item.title}  class="img-fluid"/>}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </section>
                
        </div>
    );
}