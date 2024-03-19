import React from "react";
import Heading from "../utils/Heading";
import { IconPlus } from "@tabler/icons-react";

const Portfolio = () => {
  const imgdata = [
    "https://wgmimedia.com/wp-content/uploads/2023/04/digital_products.jpg",
    "https://st3.depositphotos.com/1177973/16133/i/450/depositphotos_161333374-stock-photo-woman-using-laptop-for-browsing.jpg",
    "https://st3.depositphotos.com/1177973/16133/i/450/depositphotos_161333374-stock-photo-woman-using-laptop-for-browsing.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWXiHyHvupyNG4a8YDzmPb88jUu-JBoNi3wOc64-HJQ&s",
    "https://assets-global.website-files.com/5f6f2b94c163457d845d992c/609e4072b3778b78c64c8c71_most-popular-digital-product-etsy-feature-image.jpg",
    "https://www.netsolutions.com/insights/wp-content/uploads/2022/01/guide-to-digital-product-design.webp",
    "https://qph.cf2.quoracdn.net/main-qimg-847573c516a337b68badf391484e4b3e-lq",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF95mEEcukA3SDULngTpcmR3BV6L2BCkxnuSKU96Gn1g&s",
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading
        subtitel={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        }
        titel={"Portfolio"}
      />
      <div className="my-11">
        <ul className="text-lg font-medium flex items-center gap-x-10 text-dark-100">
          <li className="text-primary">All categories</li>
          <li>UI Design</li>
          <li>Web Templates</li>
          <li>Logo</li>
          <li>Branding</li>
        </ul>
      </div>
      <div className="grid grid-cols-3 w-full px-7 gap-5">
        <div className="bg-primary flex flex-col items-center gap-y-3 justify-center h-72 w-full">
          <IconPlus size={46} />
        </div>
        {imgdata.map((src) => (
          <div
            key={src}
            className="flex flex-col items-center gap-y-3 justify-center h-[300px] w-full"
          >
            <img src={src} className="h-full object-cover" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
