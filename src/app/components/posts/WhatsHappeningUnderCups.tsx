"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function WhatsHappeningUnderCups() {
  return (
    <div className="max-w-4xl mx-auto py-6 md:py-16">
      <div>
        <p className="text-gray-700 text-justify">Oct 30, 2024 3 min read</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-playfair py-6 text-gray-900">
          What&apos;s happening under the Cups?
        </h1>
        <p className="text-gray-700 text-justify">
          When cups are applied to the skin, a negative pressure is created,
          causing a rapid diffusion of various substances within the tissues.
          These substances are drawn to the surface, forming a pool primarily
          composed of stagnant blood in dysfunctional or dead capillaries. The
          cupping pressure causes mild ruptures in these capillaries. The pool
          also contains bio-molecules such as lactic acids, cellular debris,
          metabolic waste, environmental toxins, pharmaceutical residues, and
          substances acquired from our daily exposures. The accumulation of
          these substances can have detrimental effects on our health.
        </p>
        <div className="w-full aspect-square max-h-[750px] p-4 lg:p-14">
          <Image
            alt="hi"
            src="/b7.jpg"
            width={600}
            height={600}
            className="w-full h-full max-h-[750px] object-cover"
          />
        </div>
        <p className="text-gray-700 text-justify">
          After 7-10 minutes, the cups are removed, and small incisions are made
          before the cups are reapplied. Through these punctures, a significant
          portion of the pool&apos;s contents are expelled from the body. If
          these elements remain, they can lead to organ dysfunction, failure,
          and various diseases.
        </p>
        <br />
        <p className="text-gray-700 text-justify">
          The body responds to cupping as if it were an injury, sending a rush
          of blood carrying repairing and healing elements to the area. This
          increased blood circulation cleanses the area and delivers oxygen,
          nutrients, and resources to the deprived tissue cells, promoting
          natural healing. The different shades of discoloration observed under
          the cup reflect the bio-content present in the pooled area. A skilled
          practitioner can interpret these shades and address the underlying
          causes. By effectively addressing these causes, diseases can be
          prevented to a significant extent.
        </p>
        <br />
        <p className="text-gray-700 text-justify">
          Apart from the above mentioned several physical reactions also occur
          underneath the cup. The suction created by the cup helps to release
          tension and tightness in the muscles and soft tissues. It can help
          alleviate muscle knots, and reduce pain and discomfort. The vacuum
          effect of the cup gently lifts and stretches the underlying tissues.
          This decompression can help separate the layers of soft tissue,
          promoting better movement, flexibility, and reducing adhesions or
          restrictions.
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
            src="/b4.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/hormonal-issues">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              Hormonal Issues?
            </h1>
          </Link>
        </div>
        <div>
          <Image
            alt="hi"
            src="/b5.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/bloodcleanse">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              Why blood cleansing is vital?
            </h1>
          </Link>
        </div>
        <div>
          <Image
            alt="hi"
            src="/b6.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/why-hijama">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              Why Hijama?
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
