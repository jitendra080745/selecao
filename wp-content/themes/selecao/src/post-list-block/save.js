import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function save({ attributes }) {
    const { posts } = attributes;
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
                {/* Blog Posts Section */}
                <section id="blog-posts" className="blog-posts section">
                    <div className="container">
                        <div className="row gy-4">
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
                                            <div className="post-img">
                                                {featuredImage && (
                                                    <img
                                                        src={featuredImage}
                                                        alt={post.title.rendered}
                                                        className="post-featured-image w-100"
                                                    />
                                                )}
                                            </div>
                                            {categories.map((category) => (
                                                <p className="post-category" key={category.id}>
                                                    {category.name}
                                                </p>
                                            ))}

                                            <h2 className="title">
                                                <a href={post.link}>{post.title.rendered}</a>
                                            </h2>

                                            <div className="d-flex align-items-center">
                                                <div className="post-meta">
                                                    <p className="post-author">Maria Doe</p>
                                                    <p className="post-date">
                                                        <time dateTime="2022-01-01">Jan 1, 2022</time>
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

                {/* Pagination Section */}
                <section id="blog-pagination" className="blog-pagination section">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <nav aria-label="Page navigation" className="post-pagination">
                                <ul className="pagination">
                                    {/* Previous button */}
                                    <li className="page-item disabled" data-page="prev">
                                        <a href="#">
                                            <i className="bi bi-chevron-left"></i>
                                        </a>
                                    </li>

                                    {/* Dynamic page numbers */}
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li key={i + 1} className="page-item" data-page={i + 1}>
                                            <a href="#">
                                                {i + 1}
                                            </a>
                                        </li>
                                    ))}

                                    {/* Next button */}
                                    <li className="page-item" data-page="next">
                                        <a href="#">
                                            <i className="bi bi-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
            <script dangerouslySetInnerHTML={{ __html: paginationScript }}></script>
        </div>
    );
}
