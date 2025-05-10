"use client";

import React, { useEffect, useRef } from "react";
import { blogPosts } from "../../data/ourBlogData";
import Image from "next/image";
import { FaRegCalendarAlt, FaRegComment } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const OurBlog = () => {
  const isAOSInitialized = useRef(false);

  useEffect(() => {
    if (!isAOSInitialized.current) {
      AOS.init({ duration: 1000 });
      isAOSInitialized.current = true;
    }
  }, []);
  return (
    <section className="px-6 md:px-16 lg:py-10 bg-white text-center">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <div
          data-aos="fade-up"
          key={post.id}
          className="bg-white rounded-lg shadow-xl overflow-hidden border border-hovershed flex flex-col"
        >
          <Image
            src={post.image}
            width={450}
            height={320}
            alt={post.title}
            className="w-full h-64 object-center object-cover"
          />
          <div className="p-4 flex flex-col flex-1">
            <p className="text-primary text-sm flex justify-between">
              <span className="flex items-center">
                <FaRegCalendarAlt className="mr-1" /> {post.date}
              </span>
              <span className="flex items-center">
                <FaRegComment className="mr-1" /> {post.comments} Comments
              </span>
            </p>
            <h3 className="text-xl font-serif text-gray-900 mt-4 text-left">
              {post.title}
            </h3>
            <p className="text-gray-600 mt-6 text-lg text-left">
              {post.description}
            </p>
            <div className="mt-auto pt-4 text-center">
              <Link href={`/blog/${post.slug}`}>
                <button className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-hovershed transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default OurBlog;
