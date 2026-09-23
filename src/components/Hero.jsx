import heroImage from "../assets/images/henna.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Invitation"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
  <div className="flex flex-col items-center text-white animate-bounce">
    <span className="text-sm mb-4 drop-shadow-lg">
      اسحب لأسفل
    </span>

    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-4"
    >
      <path d="M7 8l5 5 5-5" />
      <path d="M7 13l5 5 5-5" />
    </svg>
  </div>
</div>
    </section>
  );
}