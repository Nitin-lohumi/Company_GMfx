const Awards = () => {
    return (
      <div className="container mx-auto px-4 py-8 mb-10">
        <h1 className="text-3xl font-bold text-center mb-6">Our Awards</h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          We are proud to have been recognized for our excellence and achievements in various fields.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex-col gap-6">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={`/im${index + 1}.jpg`}
                alt={`Award ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">Award {index + 1}</h2>
                <p className="text-gray-600 text-sm">Recognition for excellence in our industry.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Awards;
  