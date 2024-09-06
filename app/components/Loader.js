const Loader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="w-2 h-8 bg-[#0f8b7e] rounded-full animate-bounce"
          style={{ animationDelay: `${index * 0.2}s` }}
        ></div>
      ))}
    </div>
  );
};

export default Loader;
