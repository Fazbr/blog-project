import React from "react";
import MainLayout from "../../components/MainLayout";

const breadcrumbsdata = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Article title", link: "/blog/1" },
    ];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
            <breadCrumbs data={breadcrumbsdata} />

        </article>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
