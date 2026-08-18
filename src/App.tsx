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
const Contact = lazy(() => import("./routes/contact"));
const Newsletter = lazy(() => import("./routes/newsletter"));

// Feature Pages
const BizSanskar = lazy(() => import("./routes/features/biz-sanskar"));
const BeejSanskar = lazy(() => import("./routes/features/beej-sanskar"));
const GarbhDhan = lazy(() => import("./routes/features/garbh-dhan"));
const GarbhSanskarFeature = lazy(() => import("./routes/features/garbh-sanskar"));
const BaalSanskar = lazy(() => import("./routes/features/baal-sanskar"));
const InfantCare = lazy(() => import("./routes/features/infant-care"));
const BaalBhavishFal = lazy(() => import("./routes/features/baal-bhavish-fal"));
const BhavishyaFal = lazy(() => import("./routes/features/bhavishya-fal"));
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
        <Route
          path="/contact"
          element={
            <Suspense fallback={<AboutUsSkeleton />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Suspense fallback={<AboutUsSkeleton />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/our-story"
          element={
            <Suspense fallback={<AboutUsSkeleton />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/newsletter"
          element={
            <Suspense fallback={<AboutUsSkeleton />}>
              <Newsletter />
            </Suspense>
          }
        />

        <Route
          path="/courses"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Courses" />}>
              <Features />
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
          path="/features/beej-sanskar"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Beej Sanskar" />}>
              <BeejSanskar />
            </Suspense>
          }
        />
        <Route
          path="/features/garbh-dhan"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Garbhadhan" />}>
              <GarbhDhan />
            </Suspense>
          }
        />
        <Route
          path="/features/garbh-sanskar"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Garbhadhan Sanskar" />}>
              <GarbhSanskarFeature />
            </Suspense>
          }
        />
        <Route
          path="/features/baal-sanskar"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Baal Sanskar" />}>
              <BaalSanskar />
            </Suspense>
          }
        />
        <Route
          path="/features/infant-care"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Infant Care" />}>
              <InfantCare />
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
          path="/features/bhavishya-fal"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Bhavishya Fal" />}>
              <BhavishyaFal />
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
