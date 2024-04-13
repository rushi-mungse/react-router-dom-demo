import ServeCard from "../cards/serve-card";
import { TbFreezeRow } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

const Home = () => {
  return (
    <div className="relative">
      <div className="mx-4 bg-gray rounded-tl-md rounded-tr-md">
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-center flex-col">
            <div className="max-w-[40rem] mx-auto mb-12 lg:mb-20 md:text-center">
              <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight">
                Your Favourite Food Delivery Partner Fudo
              </h2>
              <p className="py-5 text-black/60">
                We are focused on being the best helping hand to local
                bussinesses
              </p>
              <button className="px-6 py-2 rounded-full bg-primary text-white font-light tracking-wider hover:bg-primary/90 transition-all">
                Order Now
              </button>
            </div>
          </div>

          <div className="relative">
            <h1 className="text-2xl">What We Serve</h1>
            <p className="text-balck/50">
              Be The Fastest In Delivering Your Food
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mt-10 gap-8">
            <ServeCard
              icon={<FaShippingFast className="size-20 text-yellow-500" />}
              title="Fastest Delivery"
              description="Delivery that is always ontime even faster."
            />

            <ServeCard
              icon={<TbFreezeRow className="size-20 text-blue-500" />}
              title="Easy To Order"
              description="You only need a few steps in ordering food."
            />

            <ServeCard
              icon={<GiHotMeal className="size-20 text-purple-500" />}
              title="Best Quality"
              description="Not only fast for us quality is also number one."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
