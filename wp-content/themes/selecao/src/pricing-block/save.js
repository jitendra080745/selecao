import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { title, heading, repeater } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <section id="pricing" className="pricing section">
                <div className="container section-title" data-aos="fade-up">
                    {title && <h2>{title}</h2>}
                    {heading && <p>{heading}</p>}
                </div>
                <div className="container">
                    <div className="row gy-3">
                        {repeater.length > 0 && repeater.map((item, index) => (
                            <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100" key={index}>
                                <div className="pricing-item">
                                    {item.title && <h3>{item.title}</h3>}
                                    <h4><sup>$</sup>{item.number}{item.month && <span>{item.month}</span>}</h4>
                                    
                                    {/* Render Subtitles for each item */}
                                    <ul>
                                        {item.subtitles && item.subtitles.length > 0 && item.subtitles.map((subtitle, subIndex) => (
                                            <li key={subIndex} data-aos="fade-up" data-aos-delay="100">
                                                {subtitle}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="btn-wrap">
                                        <a href={item.buttonUrl || '#'} className="btn-buy">
                                            {item.buttonText || 'Click Here'}
                                        </a>
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


// import { useBlockProps} from '@wordpress/block-editor';

//     export default function save({ attributes }) {
//         const {title,heading, repeater} = attributes;
//     return (
//         <div {...useBlockProps.save()}>
        
            
//             <section id="pricing" class="pricing section">
//                 <div class="container section-title" data-aos="fade-up">
//                     {title && <h2>{title}</h2>}
//                     {heading && <p>{heading}</p>}
//                 </div>
//                 <div class="container">
//                     <div class="row gy-3">
//                         {repeater.length > 0 && repeater.map((item, index) => (
//                             <div class="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
//                                 <div class="pricing-item">
//                                     {item.title && <h3>{item.title}</h3>}
//                                     <h4><sup>$</sup>{item.number}{item.month && <span>{item.month}</span>}</h4>
                                    
                                   
//                                     {/* <ul>
//                                         {item.subtitle && <li>{item.subtitle}</li>}

//                                     </ul> */}

//                                         <ul>
//                                              {repeater.length > 0 &&  repeater.map((item, index) => (
//                                             <li data-aos="fade-up" data-aos-delay="100">  {item.subtitle} </li>
                                                                             
//                                         ))}
//                                         </ul>
                                        

//                                     <div class="btn-wrap">
//                                         <a href={item.buttonUrl || '#'} class="btn-buy">
//                                             {item.buttonText || 'Click Here'}
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }