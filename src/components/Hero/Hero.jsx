const Hero = () => {
  return (
    <section className="bg-[#e3ffe6] h-[650px] ">
      {/* Hero Container */}
      <div className="flex container mx-auto h-full">
        {/* Hero-Left */}
        <div className="w-1/2 flex flex-col justify-center space-y-5">
          <span className="font-medium text-2xl mb-4">
            Bu sezonda en iyisini bul🔥
          </span>
          <h2 className="font-bold text-4xl">Herkese özel koleksiyon</h2>
          <a
            className="bg-black w-fit text-white text-2xl font-bold rounded-full py-4 px-8 mt-2"
            href="#"
          >
            Şimdi Keşfet
          </a>
        </div>

        {/* Hero Right */}
        <img className="min-w-[600px] h-[650px]" src="images/hero.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
