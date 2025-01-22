import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { repeater } = attributes;
    return (
        <div {...useBlockProps.save()}>
            <section id="features" className="features section">
                <div className="container">
                    <ul
                        className="nav nav-tabs row d-flex aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        role="tablist"
                    >
                        {repeater.length > 0 &&
                            repeater.map((item, index) => (
                                <li className="nav-item col-3" role="presentation" key={index}>
                                    <a
                                        className={`nav-link ${index === 0 ? "active show" : ""}`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#features-tab-${index}`}
                                        aria-selected={index === 1 ? "true" : "false"}
                                        role="tab"
                                        tabIndex="-1"
                                    >
                                        <i className="bi bi-binoculars"></i>
                                        {item.tabtitle && (
                                            <h4 className="d-none d-lg-block">{item.tabtitle}</h4>
                                        )}
                                    </a>
                                </li>
                            ))}
                    </ul>
                    <div
                        className="tab-content aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {repeater.length > 0 &&
                            repeater.map((item, index) => (
                                <div
                                    className={`tab-pane fade ${
                                        index === 1 ? "active show" : ""
                                    }`}
                                    id={`features-tab-${index}`}
                                    role="tabpanel"
                                    key={index}
                                >
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                            {item.bodytitle && <h3>{item.bodytitle}</h3>}
                                            {item.bodydescription && (
                                                <p className="fst-italic">{item.bodydescription}</p>
                                            )}

                                            <ul>
                                                <li>
                                                    <i className="bi bi-check2-all"></i>
                                                    {item.bodylist && <span>{item.bodylist}</span>}
                                                </li>
                                            </ul>
                                            {item.bodybottomdescription && (
                                                <p>{item.bodybottomdescription}</p>
                                            )}
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            {item.image_1 && (
                                                <img
                                                    src={item.image_1}
                                                    alt={item.title}
                                                    className="img-fluid"
                                                />
                                            )}
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
