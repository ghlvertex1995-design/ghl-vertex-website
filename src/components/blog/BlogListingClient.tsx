"use client";

import React, { useState, useMemo } from "react";
import { BlogPost, BlogCategory } from "@/types/blog";
import { BlogListingHero } from "./BlogListingHero";
import { FeaturedPostCard } from "./FeaturedPostCard";
import { BlogGrid } from "./BlogGrid";
import { BlogMidPageCta } from "./BlogMidPageCta";
import { CornerstoneGuides } from "./CornerstoneGuides";
import { searchPosts } from "@/data/blog";

interface BlogListingClientProps {
  initialPosts: BlogPost[];
  featuredPost: BlogPost;
  cornerstonePosts: BlogPost[];
  categories: BlogCategory[];
}

export function BlogListingClient({
  initialPosts,
  featuredPost,
  cornerstonePosts,
  categories,
}: BlogListingClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    return searchPosts(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  const isFiltered = searchQuery.trim().length > 0 || selectedCategory !== "all";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <>
      <BlogListingHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
        totalArticlesCount={initialPosts.length}
      />

      {/* Only show the big featured banner if user hasn't typed an active search query */}
      {!isFiltered && featuredPost && <FeaturedPostCard post={featuredPost} />}

      <BlogGrid
        posts={filteredPosts}
        heading={isFiltered ? "Filtered Guides" : "Latest Articles"}
        subheading={
          isFiltered
            ? `Showing results matching your selected filters.`
            : "New guides, walkthroughs, and practical insights from GHLVertex."
        }
        isFiltered={isFiltered}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onResetFilters={handleResetFilters}
      />

      <BlogMidPageCta />

      {/* Show Cornerstone Guides if not filtered */}
      {!isFiltered && <CornerstoneGuides posts={cornerstonePosts} />}
    </>
  );
}
