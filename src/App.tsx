import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./routes/index"));
const AboutUs = lazy(() => import("./routes/about-us"));
const Features = lazy(() => import("./routes/features"));
const Team = lazy(() => import("./routes/team"));
const AwardsAccolades = lazy(() => import("./routes/awardsaccolades"));
const Testimonial = lazy(() => import("./routes/testimonial"));
const Blog = lazy(() => import("./routes/blog"));
const BlogPost = lazy(() => import("./routes/blog.$slug"));

import ScrollToTop from "@/components/common/ScrollToTop";

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center text-lg font-semibold text-[#1a3a6c]">
          Loading...
        </div>
      }
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/team" element={<Team />} />
        <Route path="/awardsaccolades" element={<AwardsAccolades />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Add a catch-all route if needed */}
      </Routes>
    </Suspense>
  );
}
