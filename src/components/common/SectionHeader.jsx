

const SectionHeader = ({ title, subtitle }) => {

  return (
    <div className="bg-pink-100 h- md:h-56 text-center pt-8  space-y-4 flex flex-col items-center justify-center px-2">
      <h2 className="text-xl md:text-4xl font-bold" data-aos="fade-up"
     data-aos-duration="800">
        {title}
      </h2>
      <p className="text-sm md:text-xl" data-aos="fade-up"
     data-aos-duration="800">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
