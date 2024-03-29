import Heading from "../utils/Heading";
import { IconChevronRight } from "@tabler/icons-react";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <Heading
        subtitle={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        }
        title={"Blog"}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full px-7 gap-5 mt-12">
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center w-full">
          <div className="h-72">
            <img
              src="https://wgmimedia.com/wp-content/uploads/2023/04/digital_products.jpg"
              className="h-full object-cover"
              alt=""
            />
          </div>
          <div className="px-6 py-4">
            <h4 className="text-lg font-medium text-dark-100">
              How to make web tempates
            </h4>
            <p className="text-base text-dark-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna{" "}
            </p>
            <div className="text-lg cursor-pointer font-medium flex gap-x-3 py-2 text-primary items-center">
              <h4>Learn more</h4>
              <div className="h-3 aspect-square">
                <IconChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center w-full">
          <div className="h-72">
            <img
              src="https://assets-global.website-files.com/5f6f2b94c163457d845d992c/609e4072b3778b78c64c8c71_most-popular-digital-product-etsy-feature-image.jpg"
              className="h-full object-cover"
              alt=""
            />
          </div>
          <div className="px-6 py-4">
            <h4 className="text-lg font-medium text-dark-100">
              Make Business card
            </h4>
            <p className="text-base text-dark-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna{" "}
            </p>
            <div className="text-lg cursor-pointer font-medium flex gap-x-3 py-2 text-primary items-center">
              <h4>Learn more</h4>
              <div className="h-3 aspect-square">
                <IconChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light-400 flex flex-col items-center gap-y-3 justify-center w-full">
          <div className="h-72">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF95mEEcukA3SDULngTpcmR3BV6L2BCkxnuSKU96Gn1g&s"
              className="h-full object-cover"
              alt=""
            />
          </div>
          <div className="px-6 py-4">
            <h4 className="text-lg font-medium text-dark-100">
              How to make Flyer Design
            </h4>
            <p className="text-base text-dark-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna{" "}
            </p>
            <div className="text-lg cursor-pointer font-medium flex gap-x-3 py-2 text-primary items-center">
              <h4>Learn more</h4>
              <div className="h-3 aspect-square">
                <IconChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
