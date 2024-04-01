import React from "react";

const Blog = () => {
  return (
    <div>
      <div class=" text-white py-10 flex justify-center flex-col items-center">
        <h1 class="font-Averia text-4xl">Best Blogs</h1>
        <div class="w-28 h-1 bg-[#e7ff14] mt-2"></div>
        <div class="flex flex-wrap gap-1 items-center justify-center py-10">
          <div class=" flex flex-col">
            <div class="image ">
              <img
                class="w-56 h-36 object-cover"
                src="https://m.media-amazon.com/images/I/71wjRTlQPrL._AC_UF1000,1000_QL80_.jpg"
                alt="Blog-image"
              />
            </div>
            <div class="description w-56  bg-[#808080] text-white py-4 px-8 flex flex-col items-start">
              <h1 class="font-Averia text-lg font-semibold mb-1 undefined">
                Weight Loss
              </h1>
              <p class="text-[12px] opacity-60 font-Poppins">
                Weight loss is really important for our health
              </p>
              <button class="font-Averia text-black px-3 py-1 bg-[#e7ff14] rounded-xl w-32 mt-4">
                Read More
              </button>
            </div>
          </div>
          <div class="bg-[#373737] flex flex-col-reverse">
            <div class="image ">
              <img
                class="w-56 h-[149px] object-cover"
                src="https://www.verywellfit.com/thmb/mI01Y1hK5d9UDYgvl4ur8AnNrjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dumbbells-568094543df78ccc15a5b493.jpg"
                alt="Blog-image"
              />
            </div>
            <div class="description w-56 bg-[#808080] text-white py-4 px-8 flex flex-col items-start">
              <h1 class="font-Averia text-lg font-semibold mb-1 text-black">
                Gym Equipments
              </h1>
              <p class="text-[12px] opacity-60 font-Poppins">
                Weight loss is really important for our health
              </p>
              <button class="font-Averia text-black px-3 py-1 bg-[#e7ff14] rounded-xl w-32 mt-4">
                Read More
              </button>
            </div>
          </div>
          <div class="bg-[#373737] flex flex-col">
            <div class="image ">
              <img
                class="w-56 h-[149px] object-cover"
                src="https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/fb_hearthealth_940x788.webp"
                alt="Blog-image"
              />
            </div>
            <div class="description w-56 bg-[#808080] text-white py-4 px-8 flex flex-col items-start">
              <h1 class="font-Averia text-lg font-semibold mb-1 text-black">
                Healthy LifeStyle
              </h1>
              <p class="text-[12px] opacity-60 font-Poppins">
                Weight loss is really important for our health
              </p>
              <button class="font-Averia text-black px-3 py-1 bg-[#e7ff14] rounded-xl w-32 mt-4">
                Read More
              </button>
            </div>
          </div>
          <div class="bg-[#373737] flex flex-col-reverse">
            <div class="image ">
              <img
                class="w-56 h-[149px] object-cover"
                src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/02/01200417/shutterstock_324427688-1.jpg"
                alt="Blog-image"
              />
            </div>
            <div class="description w-56 bg-[#808080] text-white py-4 px-8 flex flex-col items-start">
              <h1 class="font-Averia text-lg font-semibold mb-1 undefined">
                Yoga
              </h1>
              <p class="text-[12px] opacity-60 font-Poppins">
                Weight loss is really important for our health
              </p>
              <button class="font-Averia text-black px-3 py-1 bg-[#e7ff14] rounded-xl w-32 mt-4">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
