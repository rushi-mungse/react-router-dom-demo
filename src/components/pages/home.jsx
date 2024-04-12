const Home = () => {
  return (
    <div className="relative">
      <div className="mx-4 h-[600px] bg-primary rounded-md">
        <div className="flex items-center justify-center py-20 flex-col">
          <h1 className="text-6xl font-bold tracking-wider">
            Showcasing our inspiring works
          </h1>
          <p className="py-5 text-black/60">
            Explore our creative works and success stories.
          </p>
          <button className="px-6 py-2 rounded-full bg-secondary text-white font-light tracking-wider hover:bg-secondary/90 transition-all">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
