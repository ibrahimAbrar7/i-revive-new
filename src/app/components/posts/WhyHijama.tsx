"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function WhyHijama() {
  return (
    <div className="max-w-4xl mx-auto py-6 md:py-16">
      <div>
        <p className="text-gray-700 text-justify">Oct 30, 2024 3 min read</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-playfair py-6 text-gray-900">
          Why Hijama?
        </h1>
        <p className="text-gray-700 text-justify">
          The proper functioning of our organs and muscles relies on a
          continuous and ample blood supply, which carries vital resources such
          as oxygen, nutrients, healing agents, hormones, anti-inflammatories,
          and natural pain relievers like opioids and enkephalins. Furthermore,
          blood plays a crucial role in cleansing organs by eliminating
          metabolic waste, cellular debris, toxins from various sources, and
          disease-related substances.
          <br />
          While the body has natural detoxification processes, there are limits
          to its capacity to eliminate certain toxins effectively. Toxins such
          as heavy metals, persistent organic pollutants, and environmental
          chemicals can pose challenges to the body&apos;s natural
          detoxification mechanisms. Without proper cleansing, these toxins can
          accumulate in tissues and organs, potentially leading to diseases and
          impairing overall health.
        </p>
        <div className="w-full aspect-square max-h-[750px] p-4 lg:p-14">
          <Image
            alt="hi"
            src="/b6.jpg"
            width={600}
            height={600}
            className="w-full h-full max-h-[750px] object-cover"
          />
        </div>
        <p className="text-gray-700 text-justify">
          Blood cleansing offers numerous benefits. Firstly, it strengthens the
          immune system, enabling it to fight pathogens and infections more
          effectively. By removing toxins, blood cleansing promotes the
          production of healthy white blood cells, essential for a robust immune
          response.
        </p>
        <br />
        <p className="text-gray-700 text-justify">
          Secondly, blood cleansing improves organ function, particularly of the
          liver and kidneys, which play a critical role in filtering and
          eliminating toxins. By eliminating accumulated toxins, these organs
          can operate optimally, supporting overall organ health and longevity.
        </p>
        <br />
        <p className="text-gray-700 text-justify">
          Thirdly, blood cleansing acts as a natural detoxification process. In
          our modern world, we are constantly exposed to environmental
          pollutants and harmful substances. Blood cleansing helps remove these
          toxins, preventing their buildup and reducing the burden on the body.
        </p>
        <br />
        <p className="text-gray-700 text-justify">
          Lastly, clean blood enhances energy and vitality. Improved circulation
          and oxygenation result in increased energy levels and a greater sense
          of well-being. Nutrients are efficiently delivered to cells, enhancing
          their performance and overall vitality.
        </p>
        <br />
        <p className="text-gray-700 text-justify">
          One effective method of blood cleansing is Hijama cupping therapy. It
          is a divine therapy that stimulates the body&aposs internal cleansing
          mechanisms, aiding in the removal of toxins, waste materials, and
          stagnant blood. By creating superficial incisions, Hijama cupping
          facilitates the detoxification of both the blood and tissue cells,
          contributing to overall health and well-being.
        </p>
        <br />
        <p className="text-gray-700 text-justify">
          In summary, blood cleansing is vital for maintaining optimal health.
          It supports a strong immune system, improves organ function,
          detoxifies the body, and enhances energy and vitality. By ensuring a
          clean and potent blood supply, we can prevent diseases, enhance our
          overall well-being, and promote longevity.
        </p>
        <br />
        <p className="text-4xl">
          &quot;Like a new clean mop that leaves floor sparkling, a clean potent
          blood is the foundation of cleansing & detoxing the body naturally,
          thereby preventing diseases.&quot;
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
        <Link href="/blog">
          {" "}
          <p className="text-gray-700 hover:underline cursor-pointer">
            See all
          </p>{" "}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Image
            alt="hi"
            src="/b1.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/relief-from-pain-and-stress-discovering-hijama-cupping-therapy">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              Relief from Pain and Stress: Discovering Hijama Cupping Therapy
            </h1>
          </Link>
        </div>
        <div>
          <Image
            alt="hi"
            src="/b2.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/the-ultimate-guide-to-cupping-therapy-for-women-in-hyderabad">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              The Ultimate Guide to Cupping Therapy for Women in Hyderabad
            </h1>
          </Link>
        </div>
        <div>
          <Image
            alt="hi"
            src="/b3.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/why-choose-a-female-hijama-specialist-in-hyderabad">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              Why Choose a Female Hijama Specialist in Hyderabad?
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
