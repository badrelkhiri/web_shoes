// --- START OF FILE PopularProducts.jsx ---
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12 pt-10" id="products">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
          molestiae quaerat molestias beatae quos debitis, nostrum
          exercitationem incidunt quia ab unde voluptates, vel nobis. Nobis
          ipsum pariatur libero voluptate sed.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
