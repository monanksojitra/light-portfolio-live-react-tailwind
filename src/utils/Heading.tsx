interface propType {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: propType) => {
  return (
    <div className="w-[80%] lg:w-[40%] text-center text-dark-100 font-bold text-4xl flex flex-col gap-y-7">
      <h1 className="capitalize">{title}</h1>
      <p className="text-base font-normal text-dark-500">{subtitle}</p>
    </div>
  );
};

export default Heading;
