import { Fragment } from "react";

import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

export default function HomePage() {
  const DummyData = [
    {
      title: "Ruangguru",
      image: "dummy.jpg",
      excerpt: "Satu dua tiga empat lima, kita coba sama - sama.",
      date: "2023-04-06",
      slug: "slug-1",
    },
    {
      title: "Ruangguru",
      image: "dummy.jpg",
      excerpt: "Satu dua tiga empat lima, kita coba sama - sama.",
      date: "2023-04-06",
      slug: "slug-2",
    },
    {
      title: "Ruangguru",
      image: "dummy.jpg",
      excerpt: "Satu dua tiga empat lima, kita coba sama - sama.",
      date: "2023-04-06",
      slug: "slug-3",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DummyData} />
    </Fragment>
  );
}
