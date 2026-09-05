import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "@/components/common/ScrollToTop";
import FloatingContactWidget from "@/components/common/FloatingContactWidget";
import {
  HomeSkeleton,
  AboutUsSkeleton,
  AwardsSkeleton,
  TestimonialSkeleton,
  BlogSkeleton,
  BlogPostSkeleton,
  FeatureDetailSkeleton,
} from "@/components/skeletons";

const Home = lazy(() => import("./routes/index"));
const AboutUs = lazy(() => import("./routes/about-us"));
const Features = lazy(() => import("./routes/features"));
const Courses = lazy(() => import("./routes/courses"));
const AwardsAccolades = lazy(() => import("./routes/awardsaccolades"));
const Testimonial = lazy(() => import("./routes/testimonial"));
const Blog = lazy(() => import("./routes/blog"));
const BlogPost = lazy(() => import("./routes/blog.$slug"));
const Contact = lazy(() => import("./routes/contact"));
const Newsletter = lazy(() => import("./routes/newsletter"));

// Content Hub Pages
const GarbhSanskarHub = lazy(() => import("./routes/garbh-sanskar/index"));
const PregnancyHub = lazy(() => import("./routes/pregnancy/index"));
const HowToHub = lazy(() => import("./routes/how-to/index"));
const ArticleDetailPage = lazy(() => import("./routes/article-detail"));
const ScientificEvidenceHub = lazy(() => import("./routes/scientific-evidence/index"));
const ScientificEvidenceDetail = lazy(() => import("./routes/scientific-evidence/detail"));

// Feature Pages
const BizSanskar = lazy(() => import("./routes/features/biz-sanskar"));
const BeejSanskar = lazy(() => import("./routes/features/beej-sanskar"));
const GarbhDhan = lazy(() => import("./routes/features/garbh-dhan"));
const GarbhSanskarFeature = lazy(() => import("./routes/features/garbh-sanskar"));
const GarbhSanskarPlanDetail = lazy(() => import("./routes/features/garbh-sanskar-plan"));
const BaalSanskar = lazy(() => import("./routes/features/baal-sanskar"));
const InfantCare = lazy(() => import("./routes/features/infant-care"));
const BaalBhavishFal = lazy(() => import("./routes/features/baal-bhavish-fal"));
const BhavishyaFal = lazy(() => import("./routes/features/bhavishya-fal"));
const Parenting = lazy(() => import("./routes/features/parenting"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <FloatingContactWidget />
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
          element={<Navigate to="/about-us" replace />}
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
              <Courses />
            </Suspense>
          }
        />

        {/* ── Content Hub & Resource Routes ── */}
        <Route
          path="/garbh-sanskar"
          element={
            <Suspense fallback={<BlogSkeleton />}>
              <GarbhSanskarHub />
            </Suspense>
          }
        />
        <Route
          path="/garbh-sanskar/:slug"
          element={
            <Suspense fallback={<BlogPostSkeleton />}>
              <ArticleDetailPage defaultHub="garbh-sanskar" />
            </Suspense>
          }
        />

        <Route
          path="/pregnancy"
          element={
            <Suspense fallback={<BlogSkeleton />}>
              <PregnancyHub />
            </Suspense>
          }
        />
        <Route
          path="/pregnancy/:slug"
          element={
            <Suspense fallback={<BlogPostSkeleton />}>
              <ArticleDetailPage defaultHub="pregnancy" />
            </Suspense>
          }
        />

        <Route
          path="/how-to"
          element={
            <Suspense fallback={<BlogSkeleton />}>
              <HowToHub />
            </Suspense>
          }
        />
        <Route
          path="/how-to/:slug"
          element={
            <Suspense fallback={<BlogPostSkeleton />}>
              <ArticleDetailPage defaultHub="how-to" />
            </Suspense>
          }
        />

        {/* ── Scientific Evidence Hub & Research Routes ── */}
        <Route
          path="/scientific-evidence"
          element={
            <Suspense fallback={<BlogSkeleton />}>
              <ScientificEvidenceHub />
            </Suspense>
          }
        />
        <Route
          path="/scientific-evidence/:slug"
          element={
            <Suspense fallback={<BlogPostSkeleton />}>
              <ScientificEvidenceDetail />
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
          path="/features/garbh-sanskar/:planId"
          element={
            <Suspense fallback={<FeatureDetailSkeleton title="Garbh Sanskar Plan" />}>
              <GarbhSanskarPlanDetail />
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
