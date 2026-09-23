import heroImage from "../assets/images/henna.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Invitation"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </section>
  );
}