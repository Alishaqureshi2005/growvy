const PlanCard = ({ plan, description, features }) => {
  return (
    <div className="w-full plan rounded-xl bg-white p-3 sm:p-4 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
      <div className="p-2 sm:p-3">
        <h1 className="text-lg sm:text-xl font-bold text-gray-800">{plan}</h1>
      </div>
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>

        {features.map((feature, index) => (
          <div key={index}>
            <h2 className="text-xs sm:text-sm font-semibold text-gray-800">{feature.feature}</h2>
            <ul className="list-disc pl-3 sm:pl-4 list-inside text-xs sm:text-sm text-gray-600 mt-1 space-y-1">
              {feature.featrureList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-3 sm:p-4 grid place-items-center">
        <button className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 py-2 px-3 sm:px-4 bg-green-600 text-white rounded-full font-semibold outline-none hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base">
          Start Today
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
