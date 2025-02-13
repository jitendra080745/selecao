import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { title, description, shortcode, accordion } = attributes;

    return (
        <div {...useBlockProps.save()}>


<section id="team" class="team section">

 
      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
      </div>

      <div class="container">

        <div class="row gy-4">
        {accordion.length > 0 &&
            accordion.map((item, index) => (
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <div class="member-img">
                
                {item.image && <img src={item.image} alt={item.title} className="img-fluid" />}
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">          
                <h4> {item.question}</h4>
                <span>{item.answer}</span>             
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
