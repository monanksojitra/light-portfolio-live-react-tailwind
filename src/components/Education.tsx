import { IconDots } from "@tabler/icons-react";

import Heading from "../utils/Heading";
import Bigcard from "../utils/Bigcard";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className="mb-9">
        <IconDots color="#FFB400" size={80} />
      </div>
      <Heading
        subtitle={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        }
        title={"Education"}
      />
      <div className="px-10 mt-12 mx-7 space-y-2 py-6  bg-light-400">
        <Bigcard
          certificate={"Certificate of web training"}
          date={"Jan 1016 - Dec 2021"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          }
          role={"Student"}
          title={"University of Toronto"}
        />
        <Bigcard
          certificate={"Certificate of web training"}
          date={"Jan 1016 - Dec 2021"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          }
          role={"Student"}
          title={"Programming Course"}
        />
        <Bigcard
          border={false}
          certificate={"Certificate of web training"}
          date={"Jan 1016 - Dec 2021"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          }
          role={"Student"}
          title={"Web developer courses"}
        />
      </div>
    </div>
  );
};

export default Education;
