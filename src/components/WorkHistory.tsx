import Heading from "../utils/Heading";
import Bigcard from "../utils/Bigcard";

const WorkHistory = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <Heading
        subtitle={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
        }
        title={"Work History"}
      />
      <div className="px-10 mt-12 mx-7 space-y-2 py-6  bg-light-400">
        <Bigcard
          certificate="Certificate of web training"
          date="Jan 1016 - Dec 2021"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          role="Student"
          title="Lead Web Designer"
        />
        <Bigcard
          certificate={"Certificate of web training"}
          date={"Jan 1016 - Dec 2021"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          }
          role={"Student"}
          title={"Junior Web Designer"}
        />
        <Bigcard
          border={false}
          certificate={"Certificate of web training"}
          date={"Jan 1016 - Dec 2021"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."
          }
          role={"Student"}
          title={"Senior Web Designer"}
        />
      </div>
    </div>
  );
};

export default WorkHistory;
