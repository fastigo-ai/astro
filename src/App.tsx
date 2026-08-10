import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "@/components/common/ScrollToTop";
import {
  HomeSkeleton,
  AboutUsSkeleton,
  TeamSkeleton,
  AwardsSkeleton,
  TestimonialSkeleton,
  BlogSkeleton,
  BlogPostSkeleton,
  FeatureDetailSkeleton,
} from "@/components/skeletons";

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

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<AboutUsSkeleton />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/features"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Features" />}>
              <Features />
            </Suspense>
          }
        />
        <Route
          path="/team"
          element={
            <Suspense fallback={<TeamSkeleton />}>
              <Team />
            </Suspense>
          }
        />
        <Route
          path="/awardsaccolades"
          element={
            <Suspense fallback={<AwardsSkeleton />}>
              <AwardsAccolades />
            </Suspense>
          }
        />
        <Route
          path="/testimonial"
          element={
            <Suspense fallback={<TestimonialSkeleton />}>
              <Testimonial />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<BlogSkeleton />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={<BlogPostSkeleton />}>
              <BlogPost />
            </Suspense>
          }
        />

        {/* Feature Dropdown Pages */}
        <Route
          path="/features/biz-sanskar"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Biz Sanskar" />}>
              <BizSanskar />
            </Suspense>
          }
        />
        <Route
          path="/features/garbh-dhan"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Garbh Dhan" />}>
              <GarbhDhan />
            </Suspense>
          }
        />
        <Route
          path="/features/garbh-sanskar"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Garbh Sanskar" />}>
              <GarbhSanskarFeature />
            </Suspense>
          }
        />
        <Route
          path="/features/baal-bhavish-fal"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Baal Bhavish Fal" />}>
              <BaalBhavishFal />
            </Suspense>
          }
        />
        <Route
          path="/features/parenting"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Parenting" />}>
              <Parenting />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

