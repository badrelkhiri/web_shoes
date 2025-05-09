import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";
const Services = () => {
  return (
    <section className="mt-12 max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
