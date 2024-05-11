import img3 from '../images/William.jpeg'

export default function Newsletter() {
  return (
    <section className=" overflow-hidden bg-maincolor px-6 py-24 sm:py-32 lg:px-8">

      <div className="w-full px-4  md:px-64 justify-center">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 ">
          <div className="mx-auto  text-2xl text-center">

          <p>
            The old question ‘Is it in the database?’ 
          </p>
          <p>will be replaced by ‘Is it on the blockchain?’</p>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-24 w-24 rounded-full"
              src={img3}
              alt="image"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">William Mougayar</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Ventures Capitalist</div>
            </div>
          </figcaption>
          </div>
        </div>
      </div>

    </section>
  )
}
