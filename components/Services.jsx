const Services = () => {
  return (
    <>
      <section className=''>
        <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
          <div className='max-w-lg'>
            <h2 className='text-3xl font-bold sm:text-4xl underline'>
              We are reliable in
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 select-none'>
            {/* Consultancy */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              {/* <FontAwesomeIcon
                icon={faHandshake}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              /> */}
              <h3 className='mt-4 text-xl font-bold '>Quality Construction</h3>

              <p className='mt-1 text-base text-gray-300'>
                We have a team of experienced and skilled people who are helping
                companies to reach their goals by providing them with best
                solution they need. We provide consultancy services and These
                include indentation, market-research, global &amp; local
                forecasting models and more
                {/* Our team&apos;s vision and mission is to leverage physically
                  in office research, indentation, global forecasting models and
                  expertise to advise government and private companies in
                  strategic issues related to the energy world. */}
              </p>
            </div>
            {/* Supply */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              {/* <FontAwesomeIcon
                icon={faShip}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              /> */}

              <h3 className='mt-4 text-xl font-bold '>Safe Construction</h3>

              <p className='mt-1 text-base text-gray-300'>
                Providing supply service from a wide range of suppliable goods
                that have no specific category. These include specialty
                chemicals, vehicles, machinery, medical equipment, heavy
                equipment, materials for power plants, agriculture,
                construction, and much more
                {/* We have been involved in the industry since 2010, we have
                  grown our company from the ground up and now provide
                  everything from materials for power plants, construction,
                  agriculture and other suppliable goods. */}
              </p>
            </div>

            {/* Construction */}
            <div className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              {/* <FontAwesomeIcon
                icon={faBuilding}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              /> */}

              <h3 className='mt-4 text-xl font-bold '>On-time Construction</h3>

              <p className='mt-1 text-base text-gray-300'>
                When it comes to construction, it should not only be done fast
                but also done efficiently. We at “Energy Solution” are here to
                assist you in achieving both goals. Our team consists of highly
                skilled professionals who have years of experience in their
                respective fields
                {/* We build the future in every project and community.
                  Construction safety management and quality controls, to an
                  extensive network of locations, leading-edge equipments and a
                  highly-trained workforce. */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
