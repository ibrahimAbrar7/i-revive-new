"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function WhatIsHijamaCupping() {
  return (
    <div className="max-w-4xl mx-auto py-6 md:py-16">
        <div>
          <p className="text-gray-700 text-justify">Oct 30, 2024 3 min read</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-playfair py-6 text-gray-900">
            What is Hijama Cupping ?
          </h1>
          <p className="text-gray-700 text-justify">
            Hijama, also known as cupping therapy, is considered a divine
            therapy that encompasses the body, mind, and soul. The human body
            relies on five vital organs—heart, brain, kidneys, liver, and
            lungs—for survival. The design of the human body, crafted with
            infinite wisdom & remarkable intelligence, emphasizes the vital role
            of cleansing for optimal functioning and well-being. It is evident
            from the fact that three of five vital organs play a key role in the
            body&apos;s cleansing and detoxification processes. While the
            heart&apos;s primary function is to pump oxygenated blood to nourish
            cells, it also indirectly aids in the cleansing of cellular and
            interstitial spaces through the bloodstream. The proper functioning
            of these core processes is crucial for the overall well-being of all
            organs and the body as a whole. Disruptions in these functions can
            lead to various illnesses and conditions.
          </p>
          <div className="w-full aspect-square max-h-[750px] p-4 lg:p-14">
            <Image
              alt="hi"
              src="/b8.jpg"
              width={600}
              height={600}
              className="w-full h-full max-h-[750px] object-cover"
            />
          </div>
          <p className="text-gray-700 text-justify">
            Maintaining a clean and toxin-free bloodstream is crucial for the
            effective functioning of our bodies. While the human body has its
            natural detoxification mechanisms, there are limits to its ability
            to eliminate certain toxins.The body&apos;s innate blood cleansing &
            detoxification mechanisms can become overwhelmed or impaired due to
            factors like high toxin exposure, chronic alcohol abuse, drug
            toxicity, liver disease, kidney disease, genetic disorders, and
            excessive toxin load. As a result, the blood&apos;s ability to
            effectively cleanse and deliver nutrients is significantly
            compromised.
          </p>
          <br />
          <p className="text-gray-700 text-justify">
            Hijama cupping therapy holds a significant place in promoting and
            stimulating these vital functions. By creating small incisions on
            the skin&apos;s surface, it assists in the cleansing/detoxification
            of both the blood and tissue cells. Additionally, it activates the
            body&apos;s internal cleansing mechanism through the circulatory and
            lymphatic systems. This process facilitates the removal of toxins
            and waste materials from the body, thereby contributing to overall
            health and well-being.
          </p>
          <br />
          <p className="text-gray-700 text-justify">
            The practice of Hijama has been embraced for centuries and is
            believed to have numerous benefits. It not only supports physical
            health but is also thought to have positive effects on mental and
            spiritual aspects. By promoting detoxification and facilitating the
            body&apos;s self-healing capabilities, Hijama offers a holistic
            approach to health and wellness.
          </p>
        </div>
        {/* Horizontal Line and Social Media Icons */}
        <div className="border-t-2 border-gray-300 my-6"></div>{" "}
        {/* Horizontal Line */}
        <div className="flex justify-start space-x-6 py-6">
          <a
            href="https://www.facebook.com/share/16BDece5wc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl text-black hover:text-blue-800 transition" />
          </a>
          <a
            href="https://www.instagram.com/i.revive_hyd?igsh=MXB3aXllMmk2ZXFzZQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl text-black hover:text-blue-800 transition" />
          </a>
          <a
            href="https://youtube.com/@i-revive4714?si=jG9xuzmtJMG8GmCu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-3xl text-black hover:text-blue-800 transition" />
          </a>
        </div>
        <div className="flex justify-between py-4">
          <p className="text-gray-700 text-justify">Recent Posts</p>
          <Link href="/blog">     <p className="text-gray-700 hover:underline cursor-pointer">See all</p>   </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <Image
          alt="hi"
          src="/b7.jpg"
          width={600}
          height={600}
          className="w-full aspect-video object-cover object-top h-44"
        />
        <Link href="/blog/what-s-happening-under-the-cups">
          <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
            What&apos;s happening under the Cups?
          </h1>
        </Link>
      </div>
      <div>
        <Image
          alt="hi"
          src="/b8.jpg"
          width={600}
          height={600}
          className="w-full aspect-video object-cover object-top h-44"
        />
        <Link href="/blog/what-is-hijama-cupping">
          <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
            What is Hijama Cupping?
          </h1>
        </Link>
      </div>
      <div>
        <Image
          alt="hi"
          src="/b9.jpg"
          width={600}
          height={600}
          className="w-full aspect-video object-cover object-top h-44"
        />
        <Link href="/blog/why-hijama-effects-of-hijama-cupping">
          <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
            Effects of Hijama Cupping
          </h1>
        </Link>
      </div>
    </div>
      </div>
  );
}
