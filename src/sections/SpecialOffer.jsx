import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap  max-xl:flex-col-reverse gap-10 w-full max-container">
      <div className="flex-1 flex ">
        <img src={offer} alt="offer" className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="text-4xl font-bold font-palanquin capitalize">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <div className="text-slate-gray mt-4 mb-4 info-text lg:max-w-lg ">
          <p>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            Offer unparalleled value that sets us apart.
          </p>
          <p className="mt-8 mb-11">
            Navigate a realm Of possibilities designed to fulfill your unique
            desires. surpassing the loftiest expectations, Your journey with us
            is nothing short of exceptional.
          </p>
        </div>
        <div className="flex gap-6">
          <Button label="View details" iconUrl={arrowRight} />
          <Button label="View details" borderColor = "border-slate-gray" backgroundColor="bg-white" textColor="text-black" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
