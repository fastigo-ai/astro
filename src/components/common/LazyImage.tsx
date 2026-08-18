import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  fallbackSrc?: string;
}

export default function LazyImage({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio,
  fallbackSrc = "/images/celestial_mother.png",
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imageSrc = hasError ? fallbackSrc : src;

  return (
    <div className={cn("relative overflow-hidden bg-pink-50/40", aspectRatio, containerClassName)}>
      {/* Shimmer skeleton placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/60 via-pink-100/40 to-pink-50/60 animate-pulse" />
      )}

      {/* Smoothly fading in image */}
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        className={cn(
          "w-full h-full object-cover transition-all duration-500 ease-out",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-xs",
          className,
        )}
        {...props}
      />
    </div>
  );
}
