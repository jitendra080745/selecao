import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function save({ attributes }) {
    const { title, heading, posts } = attributes;
    const postsPerPage = 3; // Adjust posts per page here
    const totalPages = Math.ceil(posts.length / postsPerPage); // Calculate total pages dynamically

    // Inline JavaScript for pagination logic
    const paginationScript = `
        document.addEventListener("DOMContentLoaded", () => {
            const postListingBlock = document.querySelector(".post-listing-block");
            const posts = Array.from(postListingBlock.querySelectorAll(".portfolio-item"));
            const pagination = postListingBlock.querySelector(".pagination");
            let currentPage = 1;

            const renderPosts = () => {
                const start = (currentPage - 1) * ${postsPerPage};
                const end = start + ${postsPerPage};

                posts.forEach((post, index) => {
                    post.style.display = index >= start && index < end ? "block" : "none";
                });

                pagination.querySelectorAll(".page-item").forEach((button) => {
                    button.classList.remove("active", "disabled");
                });

                pagination.querySelector('[data-page="' + currentPage + '"]')?.classList.add("active");
                if (currentPage === 1) {
                    pagination.querySelector('[data-page="prev"]')?.classList.add("disabled");
                }
                if (currentPage === ${totalPages}) {
                    pagination.querySelector('[data-page="next"]')?.classList.add("disabled");
                }
            };

            pagination.addEventListener("click", (e) => {
                const target = e.target.closest(".page-item");
                if (!target || target.classList.contains("disabled")) return;

                const page = target.dataset.page;
                if (page === "prev") {
                    currentPage = Math.max(1, currentPage - 1);
                } else if (page === "next") {
                    currentPage = Math.min(${totalPages}, currentPage + 1);
                } else {
                    currentPage = parseInt(page, 10);
                }

                renderPosts();
            });

            renderPosts(); // Initial render
        });
    `;

    return (
        <div {...useBlockProps.save()}>
            <div className="post-listing-block">    
            <div id="recent-posts" class="recent-posts section">
                <div class="container section-title aos-init aos-animate" data-aos="fade-up">
                {title && <h2>{title}</h2>}
                {heading && <p>{heading}</p>}    
                </div>

                <div class="container">
                <div class="row gy-4">
                {posts.map((post, index) => {
                                const categories = post._embedded?.["wp:term"]?.[0] || [];
                                const featuredImage =
                                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                                return (

                    <div class="col-xl-4 col-md-6 aos-init aos-animate"  key={post.id}  data-aos="fade-up" data-aos-delay="100">
                    <article>

                        <div class="post-img">
                        
                        {featuredImage && (
                                        <img
                                            src={featuredImage}
                                            alt={post.title.rendered}
                                            className="img-fluid"
                                        />
                                    )}
                        </div>

                        {categories.map((category) => (                                                    
                                    <p class="post-category" key={category.id}>{category.name} </p>                                                
                                ))}

                                <h2 class="title">
                                <a href={post.link}>{post.title.rendered}</a>
                                </h2>


                        <div class="d-flex align-items-center">
                     
                        <div class="post-meta">
                            <p class="post-author">Maria Doe</p>
                            <p class="post-date">
                            <time datetime="2022-01-01">Jan 1, 2022</time>
                            </p>
                        </div>
                        </div>

                    </article>
                    </div>

                );
            })}
                </div>
                </div>
            </div>                                                                                
            </div>
        
        </div>
    );
}


