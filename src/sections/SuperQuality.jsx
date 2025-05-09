import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-bold font-palanquin capitalize">
          We Provide You{" "}
          <span className="text-coral-red">
            Super <br /> Quality
          </span>{" "}
          Shoes
        </h1>
        <p className="text-slate-gray mt-4 mb-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 mb-11 text-slate-gray info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View details" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
