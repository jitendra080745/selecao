import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function save({ attributes }) {
    const { title, heading, posts } = attributes;
    const postsPerPage = 1; // Adjust posts per page here
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
            <section id="blog-posts" class="blog-posts section">
                <div class="container">
                    <div class="row gy-4">                                                        
                            {posts.map((post, index) => {
                                const categories = post._embedded?.["wp:term"]?.[0] || [];
                                const featuredImage =
                                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                                return (
                                    <div
                                        className="col-lg-4 portfolio-item isotope-item filter-app"
                                        key={post.id}
                                        data-index={index}
                                    >
                                <article>
                                <div class="post-img">
                                    {featuredImage && (
                                        <img
                                            src={featuredImage}
                                            alt={post.title.rendered}
                                            className="post-featured-image"
                                        />
                                    )}
                                </div>
                                {categories.map((category) => (                                                    
                                    <p class="post-category" key={category.id}>{category.name}</p>                                                
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
            </section>

            <section id="blog-pagination" class="blog-pagination section">
                <div class="container">
                    <div class="d-flex justify-content-center">
                        <ul>
                            <li><a href="#"><i class="bi bi-chevron-left"></i></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#" class="active">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li>...</li>
                            <li><a href="#">10</a></li>
                            <li><a href="#"><i class="bi bi-chevron-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>

                    <nav aria-label="Page navigation" className="post-pagination">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled" data-page="prev">
                                <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                    {__("Previous", "post-listing-block")}
                                </a>
                            </li>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i + 1} className="page-item" data-page={i + 1}>
                                    <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                        {i + 1}
                                    </a>
                                </li>
                            ))}
                            <li className="page-item" data-page="next">
                                <a className="page-link" href="#" onClick={(e) => e.preventDefault()}>
                                    {__("Next", "post-listing-block")}
                                </a>
                            </li>
                        </ul>
                    </nav>
                   
                 
             
            </div>
            <script dangerouslySetInnerHTML={{ __html: paginationScript }}></script>
        </div>
    );
}


