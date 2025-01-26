const Hero = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className="max-w-[1200px] sm:p-4 p-6 my-10 mx-auto flex flex-col gap-10 sm:flex-row-reverse sm:base-flex">
      {/* Illustration */}
      <div className="basis-1/2">
        <img
          src={
            darkMode
              ? '/images/illustration-intro.png'
              : '/images/illustration-1.svg'
          }
          alt="illustration"
        />
      </div>
      <article className="basis-1/2">
        <div className="section-one-text">
          <h3 className="font-bold text-4xl sm:text-4xl dark:text-white text-dblue">
            All your files in one secure location,
            <br /> accesible anywhere.
          </h3>
          <p className="my-4 text-xl text-dblue dark:text-white">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family and co-workers
          </p>
        </div>

        <button className="px-4  py-2 text-white bg-[#65e2d9] text-lg hover:bg-[#339ecc] rounded-2xl w-[250px] font-bold">
          Get Started
        </button>
      </article>
    </section>
  )
}

export default Hero
