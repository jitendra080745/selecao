import { useBlockProps} from '@wordpress/block-editor';

    export default function save({ attributes }) {
        const {repeater} = attributes;
    return (
        <div {...useBlockProps.save()}>
            <section id="features" class="features section">
                <div class="container">
                    <ul class="nav nav-tabs row d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" role="tablist">
                        {repeater.length > 0 &&  repeater.map((item, index) => (
                            <li class="nav-item col-3" role="presentation">
                                <a class="nav-link show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="false" role="tab" tabindex="-1">
                                    <i class="bi bi-binoculars"></i>
                                    {item.tabtitle && <h4 class="d-none d-lg-block"> {item.tabtitle}</h4>}

                                </a>
                            </li>
                        ))}
                    </ul>
                    <div class="tab-content aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        {repeater.length > 0 &&  repeater.map((item, index) => (
                            <div class="tab-pane fade" id="features-tab-1" role="tabpanel">
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
                                            {item.image_1 && <img src={item.image_1} alt={item.title}  class="img-fluid"/>}
                                        </div>
                                    </div>  
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}