"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function HarmonalIssue() {
  return (
    <div className="max-w-4xl mx-auto py-6 md:py-16">
      <div>
        <p className="text-gray-700 text-justify">Oct 30, 2024 3 min read</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-playfair py-6 text-gray-900">
          Hormonal Issues?
        </h1>
        <p className="text-gray-700 text-justify">
          One of the most commonly disregarded fact is that blood circulation
          issues can indirectly cause hormonal imbalances. Let&apos;s say when
          someone is diagnosed with Hypothyroid it not necessarily mean that the
          Thyroid gland is dysfunctional! Because scanning the blood sample and
          finding less TSH hormones and dysfunctional Thyroid gland can be two
          different things. Let me present few specific examples to elaborate on
          the matter :
        </p>
        <div className="w-full aspect-square max-h-[750px] p-4 lg:p-14">
          <Image
            alt="hi"
            src="/b4.jpg"
            width={600}
            height={600}
            className="w-full h-full max-h-[750px] object-cover"
          />
        </div>

        <p className="text-gray-700 text-justify">
          1.{" "}
          <span className="font-bold">
            Hypoperfusion and Hormonal Imbalances:
          </span>
          Hypoperfusion refers to reduced blood flow to specific organs or
          tissues. If there is inadequate blood supply to endocrine glands
          responsible for hormone production, it may affect their functioning
          and lead to hormonal imbalances. For instance, reduced blood flow to
          the pituitary gland, which controls the release of various hormones,
          may disrupt its hormone production and secretion, potentially
          resulting in hormonal imbalances.
        </p>
        <p className="text-gray-700 text-justify">
          2.{" "}
          <span className="font-bold">
            Impaired Blood Flow and Hormone Delivery:
          </span>{" "}
          Hormones are transported throughout the body via the bloodstream. If
          blood circulation is impaired, the delivery of hormones to target
          organs or tissues may be compromised. This can affect the appropriate
          functioning of these organs and disrupt hormonal balance. For example,
          impaired blood flow to the ovaries in women can lead to hormonal
          imbalances, potentially causing menstrual irregularities.
        </p>
        <p className="text-gray-700 text-justify">
          3.{" "}
          <span className="font-bold">
            Circulatory Disorders and Endocrine Glands:
          </span>
          Certain circulatory disorders, such as atherosclerosis, peripheral
          vascular disease, or venous insufficiency, can affect blood flow to
          various organs, including endocrine glands. If the blood supply to
          these glands is compromised, it can disrupt their hormone production
          and secretion, resulting in hormonal imbalances. For instance,
          compromised blood flow to the adrenal glands can lead to adrenal
          hormone deficiencies or excesses.
        </p>
        <p className="text-gray-700 text-justify">
          4.{" "}
          <span className="font-bold">
            Inflammation and Hormonal Imbalances:
          </span>
          Some circulatory issues, such as chronic inflammation in blood
          vessels, can indirectly impact hormonal balance. Inflammatory
          processes can affect the production and regulation of hormones,
          leading to imbalances. Additionally, chronic inflammation can disrupt
          the functioning of the hypothalamus and pituitary gland, which control
          the release of many hormones, further contributing to hormonal
          imbalances. <br />
          <br />
          It&apos;s important to note that the relationship between blood
          circulation issues and hormonal imbalances is complex, and the
          mechanisms through which they interact can vary depending on the
          specific condition or underlying cause.
        </p>
        <br />
        <p className="text-3xl">
          &quot;We suggest you before turning to medicinal drugs and
          surrendering to them for all your life it is a very wise idea to get
          Hijama Cupping done few times. HIjama Cupping coupled with proper diet
          & lifestyle changes can benefit not only in Hormonal issues due Blood
          circulatory issues but also potentially treat the dysfunctional glands
          as well.&quot;
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
            src="/b10.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/treating-spider-veins-varicose-veins-by-hijama-cupping">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              Treating Spider Veins, Varicose Veins by Hijama Cupping
            </h1>
          </Link>
        </div>
        <div>
          <Image
            alt="hi"
            src="/b11.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/pcos-answer-is-hijama-cupping">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              PCOS: Answer is Hijama Cupping
            </h1>
          </Link>
        </div>
        <div>
          <Image
            alt="hi"
            src="/b12.jpg"
            width={600}
            height={600}
            className="w-full aspect-video object-cover object-top h-44"
          />
          <Link href="/blog/best-hijama-practices">
            <h1 className="text-xl lg:text-2xl py-2 hover:text-blue-500 transition text-gray-900">
              Best Hijama Practices
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
