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

// Feature Pages
const BizSanskar = lazy(() => import("./routes/features/biz-sanskar"));
const GarbhDhan = lazy(() => import("./routes/features/garbh-dhan"));
const GarbhSanskarFeature = lazy(() => import("./routes/features/garbh-sanskar"));
const BaalBhavishFal = lazy(() => import("./routes/features/baal-bhavish-fal"));
const Parenting = lazy(() => import("./routes/features/parenting"));

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
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/awardsaccolades" element={<AwardsAccolades />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Feature Dropdown Pages */}
        <Route path="/features/biz-sanskar" element={<BizSanskar />} />
        <Route path="/features/garbh-dhan" element={<GarbhDhan />} />
        <Route path="/features/garbh-sanskar" element={<GarbhSanskarFeature />} />
        <Route path="/features/baal-bhavish-fal" element={<BaalBhavishFal />} />
        <Route path="/features/parenting" element={<Parenting />} />

        {/* Add a catch-all route if needed */}
      </Routes>
    </Suspense>
  );
}
