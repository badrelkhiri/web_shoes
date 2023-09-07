import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 flex-wrap max-container"
      id="contact-us"
    >
      <h1 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold ">
        Sign Up for <span className="text-coral-red ">Updates</span> Newsletter
      </h1>
      <div className="lg:max-w-[40%] justify-between flex items-center max-sm:flex-col w-full gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" className=" border-coral-red outline-none" placeholder="subscribe@sheosy.ma" name="" id="" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
