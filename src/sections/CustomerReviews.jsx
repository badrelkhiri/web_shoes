import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className="max-content">
      <h1 className="text-center text-4xl font-bold font-palanquin">
        What out <span className="text-coral-red">Customers</span> Say
      </h1>
      <p className="text-slate-gray text-center mt-4 m-auto info-text max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.imgURL} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
