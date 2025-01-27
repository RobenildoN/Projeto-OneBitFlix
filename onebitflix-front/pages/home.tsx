import NewestCategory from "../src/components/homeAuth/newestCategory";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import Head from "next/head";
import FavoriteCategory from "@/components/homeAuth/favoriteCategory";
import FeaturedCategory from "@/components/homeAuth/featuredCategory";
import ListCategories from "@/components/homeAuth/listCategories";

const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
        <NewestCategory />
        <FavoriteCategory />
        <FeaturedCategory />
        <ListCategories />
      </main>
    </>
  );
};

export default HomeAuth;
