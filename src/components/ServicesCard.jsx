const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
      <div className="flex flex-col gap-3">
        <div className="h-11 w-11 flex justify-center items-center rounded-full bg-coral-red">
          <img src={imgURL} alt={label} />
        </div>
        <h2 className="text-2xl font-semibold">{label}</h2>
        <p className="break-words leading-normal font-montserrat text-slate-gray text-lg">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
