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
                                    {item.eyebrow && <span class="advanced">{item.eyebrow}</span>}
                                    {item.title && <h3>{item.title}</h3>}
                                    <h4><sup>$</sup>{item.number}{item.month && <span>{item.month}</span>}</h4>
                                    <ul>
                                        {item.subtitles && item.subtitles.length > 0 && item.subtitles.map((subtitle, subIndex) => (
                                            <li key={subIndex} data-aos="fade-up" data-aos-delay="100" className={subtitle.checked ? 'na' : ''}>
                                                {subtitle.text}
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



// import { useBlockProps } from '@wordpress/block-editor';

// export default function save({ attributes }) {
//     const { title, heading, repeater } = attributes;

//     return (
//         <div {...useBlockProps.save()}>
//             <section id="pricing" className="pricing section">
//                 <div className="container section-title" data-aos="fade-up">
//                     {title && <h2>{title}</h2>}
//                     {heading && <p>{heading}</p>}
//                 </div>
//                 <div className="container">
//                     <div className="row gy-3">
//                         {repeater.length > 0 && repeater.map((item, index) => (
//                             <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100" key={index}>
//                                 <div className="pricing-item">
//                                     {item.eyebrow && <span class="advanced">{item.eyebrow}</span>}
//                                     {item.title && <h3>{item.title}</h3>}
//                                     <h4><sup>$</sup>{item.number}{item.month && <span>{item.month}</span>}</h4>
//                                     <ul>
//                                         {item.subtitles && item.subtitles.length > 0 && item.subtitles.map((subtitle, subIndex) => {
//                                             const className = (subIndex === 3 || subIndex === 4) ? 'na' : '';
//                                             return (
//                                                 <li key={subIndex} data-aos="fade-up" data-aos-delay="100" className={className}>
//                                                     {subtitle}
//                                                 </li>
//                                             );
//                                         })}
//                                     </ul>
//                                     <div className="btn-wrap">
//                                         <a href={item.buttonUrl || '#'} className="btn-buy">
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

