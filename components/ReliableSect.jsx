const ReliableSect = () => {
  return (
    <>
      <section className='py-16'>
        <div className='max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8'>
          <div className='max-w-lg'>
            <h2 className='text-3xl font-bold sm:text-4xl'>Reliable In</h2>
          </div>
          <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 select-none text-center'>
            {/* Consultancy */}
            <div className='block p-8 transition border rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              {/* <FontAwesomeIcon
                icon={faHandshake}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              /> */}
              <h3 className=' text-xl font-bold '>Quality Construction</h3>
            </div>
            {/* Supply */}
            <div className='block p-8 transition border rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              {/* <FontAwesomeIcon
                icon={faShip}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              /> */}

              <h3 className=' text-xl font-bold '>Safe Construction</h3>
            </div>

            {/* Construction */}
            <div className='block p-8 transition border rounded-xl hover:shadow-blue-500/10 hover:border-blue-500/10'>
              {/* <FontAwesomeIcon
                icon={faBuilding}
                className='w-10 h-10 text-gray-700'
                aria-hidden='true'
              /> */}

              <h3 className=' text-xl font-bold '>On-time Construction</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReliableSect;
