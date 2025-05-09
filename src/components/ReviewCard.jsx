import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="text-center flex flex-col items-center gap-2">
      <div>
        <img
          src={imgURL}
          width={120}
          height={120}
          className="rounded-full object-cover"
          alt={customerName}
        />
      </div>
      <p className="text-slate-gray max-w-sm mt-3 info-text">{feedback}</p>
      <div className="font-semibold flex gap-2 items-center">
        <img src={star} width={24} className="object-cover m-0" alt="star" />{" "}
        <span className="mt-1 text-xl font-montserrat text-slate-gray">
          ({rating})
        </span>
      </div>
      <h3 className="font-bold mt-1 text-3xl font-palanquin">{customerName}</h3>
    </div>
  );
};
export default ReviewCard;
