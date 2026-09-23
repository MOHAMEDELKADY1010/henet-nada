import heroImage from "../assets/images/henna.jpg";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#f7f2eb] flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2 sm:px-4">
        <img
          src={heroImage}
          alt="Invitation"
          className="
            w-full
            h-auto
            block
            object-contain
            rounded-lg
            shadow-lg
            select-none
            pointer-events-none
          "
          draggable="false"
        />
      </div>
    </section>
  );
}