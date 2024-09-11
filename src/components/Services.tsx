import React from "react";
import "../assets/Styles/Services.css";
import service1 from "../assets/images/service1.jpeg";
import service2 from "../assets/images/service2.jpeg";
import service3 from "../assets/images/service3.jpeg";
import service4 from "../assets/images/service4.jpeg";
import service5 from "../assets/images/service5.jpeg";
import service6 from "../assets/images/service6.jpeg";

const servicesData = [
  {
    title: "Design Consultation",
    description:
      "Start your journey with a personalized session where our experts understand your vision, preferences, and lifestyle needs.",
    features: "Interactive mood boards, space planning, material selection.",
    image: service1,
    testimonial: {
      content:
        '"The design team was incredibly attentive to our needs and transformed our vague ideas into a stunning kitchen layout."',
      author: "— Samantha & Greg, Tampa",
    },
  },
  {
    title: "Custom Cabinetry",
    description:
      "Our custom cabinetry is designed to maximize your space and complement your style with precision and care.",
    features:
      "Choice of wood, finish, hardware; 3D previews of cabinet designs.",
    image: service2,
    testimonial: {
      content:
        '"The craftsmanship on our custom cabinets is top-notch! Every detail was considered, and the result is beautiful."',
      author: "— Michael J., Clearwater",
    },
  },
  {
    title: "Complete Remodel",
    description:
      "A full-scale kitchen remodel tailored to your specifications from initial design through to the final touches.",
    features:
      "Project management, demolition, installation, final walkthrough.",
    image: service3,
    testimonial: {
      content:
        '"From demolition to the final touches, the team handled everything with professionalism and care."',
      author: "— Diane R., St. Petersburg",
    },
  },
  {
    title: "Kitchen Design Software",
    description:
      "Our software allows you to design your kitchen with real-time layouts, styles, and finishes.",
    features:
      "User-friendly interface, realistic 3D modeling, instant revisions.",
    image: service4,
    testimonial: {
      content:
        '"The design software was a game-changer for us. We felt confident in our choices, and the DIY aspect was empowering."',
      author: "— Tom & Cheryl, Sarasota",
    },
  },
  {
    title: "Painless Remodel Process",
    description:
      "We prioritize a smooth and straightforward remodeling experience with clear communication and project management.",
    features:
      "Scheduled updates, dedicated project manager, adherence to timelines.",
    image: service5,
    testimonial: {
      content:
        '"The team made it so easy. Their efficient scheduling and communication kept us in the loop without the stress."',
      author: "— Jessica G., Lakeland",
    },
  },
  {
    title: "Kitchen Flooring",
    description:
      "Complete your kitchen’s look with a range of high-quality flooring options, from luxury vinyl to modern tile.",
    features:
      "Wide range of materials, expert fitting, durable and stylish options.",
    image: service6,
    testimonial: {
      content:
        '"The new floors have completely transformed our space. The flooring has been nothing short of spectacular."',
      author: "— Brian S., Orlando",
    },
  },
];

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <div className="introduction">
        <h1>Services</h1>
        <p>
          At Malave Designs, we believe that every kitchen is the heart of the
          home, and we're dedicated to making your dream kitchen a reality. Our
          comprehensive range of services is designed to cater to every aspect
          of your kitchen transformation journey. From initial consultation to
          the final touches, we blend innovative technology, superior
          craftsmanship, and meticulous attention to detail to deliver results
          that exceed expectations. Whether you're envisioning a modern
          makeover, custom cabinetry, or exploring our cutting-edge design
          software, we are here to guide you through every step of the process.
          Discover the services that set us apart and learn how we turn your
          vision into a stunning, functional space that reflects your unique
          style and needs.
        </p>
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>
                <strong>Features:</strong> {service.features}
              </p>
            </div>
            <div className="testimonial-section">
              <p className="testimonial-content">
                {service.testimonial.content}
              </p>
              <p className="testimonial-author">{service.testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
