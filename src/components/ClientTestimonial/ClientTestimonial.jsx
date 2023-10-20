import { useEffect, useState } from "react";

const ClientTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/data/clientTestimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="my-8 max-w-[1400px] mx-auto px-5 lg:px-0">
      <h1 className="my-5 text-3xl font-bold md:text-4xl">
        Client Testimonial
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial.key}
            className="p-10 space-y-3 rounded-md bg-slate-200"
          >
            <img
              src={testimonial.image_url}
              alt={testimonial.name}
              className="object-cover rounded-full w-14 h-14"
            />
            <h1 className="text-xl font-medium">{testimonial.name}</h1>
            <p>{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonial;
