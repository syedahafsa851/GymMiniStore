import React from "react";
import img1 from '../images/trdml.png'

const Calculator = () => {
  return (
    <div>
      <div class=" text-white py-32 flex justify-center flex-col items-center">
        <h1 class="font-Averia text-5xl">Calculate Your BMI</h1>
        <div class="w-68 h-1 bg-[#e7ff14] mt-4"></div>
        <div>
          <div class="flex flex-col md:flex-row mt-10 items-center gap-5 md:gap-64">
            <div class="left">
              <img
                class="w-96 h-96 object-cover rounded-2xl"
                src={img1}
                alt="TreadMill-Running"
              />
            </div>
            <div class="right w-80 ">
              <h2 class="font-Averia text-3xl mb-5">Advanced Calculator</h2>
              <label class="flex flex-col font-Poppins text-lg" for="Gender">
                Gender
                <select
                  class="outline-none mr-3 rounded-lg text-gray-400 px-2 py-2 w-1/2 h-10 text-center"
                  name="Gender"
                  id="Gendr"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <div class="flex w-full">
                <label class="flex flex-col font-Poppins text-lg" for="">
                  Age
                  <input
                    class="outline-none mr-3 rounded-lg text-black px-2 py-2 h-10 w-1/2 text-center"
                    type=""
                    placeholder="yrs"
                  />
                </label>
                <label class="flex flex-col font-Poppins text-lg" for="">
                  Weight
                  <input
                    class="outline-none mr-3 rounded-lg text-black px-2 py-2 h-10 w-1/2 text-center"
                    type=""
                    placeholder="Kg"
                  />
                </label>
              </div>
              <div class="flex mt-5">
                <label class="flex flex-col font-Poppins text-lg" for="">
                  Height
                  <input
                    class="outline-none rounded-lg text-black px-2 py-2 h-10 w-1/2 text-center"
                    type=""
                    placeholder="ft"
                  />
                </label>
                <label class="flex flex-col font-Poppins text-lg" for="">
                  <input
                    class="px-4 mt-7 py-1 -ml-10 bg-[#e7ff14] text-black rounded-xl font-Poppins"
                    type="submit"
                    value="Submit"
                  />
                </label>
              </div>
              <div class="border border-[#e7ff14] bg-gray-500 rounded-md px-3 py-1 mt-6">
                <h3 class="font-Poppins text-xl">Result is   _________________________ </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
