import React from "react";
import "../App.css";
import Weight from "../images/lift.png";

const Fitness = () => {
  return (
    <div class="flex flex-col px-10 relative">
      <div class="absolute bg-[#808080] w-3/4 md:w-2/3 -top-14 left-16 md:-top-10 md:left-[160px] lg:left-[220px] flex justify-center items-center rounded-2xl opacity-80 ">
        <div class="flex flex-col text-center md:flex-row md:text-start gap-1 items-center py-2 sm:py-6 px-2 border-r-2 border-[#e7ff14]">
          <img
            class="relative"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOklEQVR4nO3dzUrDQBSG4dGFVfB+XZplF6ILV115Dy6k12KvQRB/cPlKoSlRm3QmmTnBOd+7tCTCw0TomSSGoJRSSimlZghogOUcv9sbcpuwDZCFnYDWTERu258HWAA3wAvwAayAi+AxfqI1E5H359khPx34bBW8xWG0ZiJy26bn52/BU0Re/gnHxPYavETk5T/h2KFug4dIg8qNvf2bvQgeIh0pF/azG+Q24CoRaVnyPFWHsIVdZWhl2yXs+rGvg8ewxfaJbIztG9kIW8gG2EL+3W6evP3anOvrevTGgpuAM+AxEXlwZau8yMI2RBb2UAN7fDHbU33p7/KIlbwGzjUaNUDuHKM5dGnkzrHCLo3cOYewSyN3ziXs0sidc2o0Whq5c26NRksjt7kfjWKAfAS7/qkdhshuR6PEfa0ucpuWm9EoM6xkdyFkIVcRWslCriK0kss/YYqQ/yC3ZcNGyL3I2bAR8lHkydgIORp5NDZCTkZOxkbI5bd3EHJ5bIRcHhshl8dGyOWxEfK4Rjw7vTnyuZ8H2A1Wdl/aGTHAXmv7qfzKXgs5cSdY77swHI3qBkHD0aiwDUejwjYcjQrbcDQq7Ij0chHDhG2YsA0TtmHC/r/vu0ip/hvAE+60T0Iiw8tbqwu4H4mcA7sJHgJOgc+J0GOxfSB3oL8yvO+iyfXK+GoDHvr2+HJd/iT+E4QqAy532NuV/Q7cdTdSc13+eHnE7FjAycBnuvytcveE6Zzp8ldKKaWUCjP2DThCNuFTwf5iAAAAAElFTkSuQmCC"
            width="50"
            alt="image"
          />
          <img
            class="absolute rotate-90"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOklEQVR4nO3dzUrDQBSG4dGFVfB+XZplF6ILV115Dy6k12KvQRB/cPlKoSlRm3QmmTnBOd+7tCTCw0TomSSGoJRSSimlZghogOUcv9sbcpuwDZCFnYDWTERu258HWAA3wAvwAayAi+AxfqI1E5H359khPx34bBW8xWG0ZiJy26bn52/BU0Re/gnHxPYavETk5T/h2KFug4dIg8qNvf2bvQgeIh0pF/azG+Q24CoRaVnyPFWHsIVdZWhl2yXs+rGvg8ewxfaJbIztG9kIW8gG2EL+3W6evP3anOvrevTGgpuAM+AxEXlwZau8yMI2RBb2UAN7fDHbU33p7/KIlbwGzjUaNUDuHKM5dGnkzrHCLo3cOYewSyN3ziXs0sidc2o0Whq5c26NRksjt7kfjWKAfAS7/qkdhshuR6PEfa0ucpuWm9EoM6xkdyFkIVcRWslCriK0kss/YYqQ/yC3ZcNGyL3I2bAR8lHkydgIORp5NDZCTkZOxkbI5bd3EHJ5bIRcHhshl8dGyOWxEfK4Rjw7vTnyuZ8H2A1Wdl/aGTHAXmv7qfzKXgs5cSdY77swHI3qBkHD0aiwDUejwjYcjQrbcDQq7Ij0chHDhG2YsA0TtmHC/r/vu0ip/hvAE+60T0Iiw8tbqwu4H4mcA7sJHgJOgc+J0GOxfSB3oL8yvO+iyfXK+GoDHvr2+HJd/iT+E4QqAy532NuV/Q7cdTdSc13+eHnE7FjAycBnuvytcveE6Zzp8ldKKaWUCjP2DThCNuFTwf5iAAAAAElFTkSuQmCC"
            width="50"
            alt="image"
          />
          <h2 class="text-white font-Averia font-semibold text-lg md:text-2xl">
            Quality Equipments
          </h2>
        </div>
        <div class="flex flex-col text-center md:flex-row md:text-start gap-1 items-center py-2 sm:py-6 px-2 border-r-2 border-[#e7ff14]">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5klEQVR4nO2cW4hVVRjHj5ccsoculpYVBJXZ1S72Ej1ERC9WYGE3LKKwC6kVBQVBPZiFQhB0oYiISOgeClFEgRmYJpHTg4KaWkFjGMSkCZY5v1iwjdNp7z3rW99ayzl7fz8YGM4c/t//+8/m7L0uZ3U6hmEYhmEYhmEYhmEYRgeYBNwPfAUM01yGix4Xup6z/uuBk4GNtI+NrvdcIQ+0NORDuN4HcgS96N+S7WVhjqC/PtxdjgHW5Qh67+HucgywJ0fQudkNvArcCJwHTAOmFr9fD7wM7MptqklB7y4eqSZ73qDvBoZymWtK0J8AJwZ4mwJ8mMNgmnT/20xq3gImKvyNA55PbTJuquWNpORjYEIEjy7sd1MajZNmfROp2OVuchF9HgP8kMpsLJ91DaTiPqWva0tem5/KrCpEz4ZSMKQZ1haj1eUlr08AtqcwrA7So6kUvKTwcw8wAsyu+PuyFIZVIXo2loK5iivZhbzD3QAr3nNlCsPqID2aS8ENipAdy2red1UKw+ogPRpMwSZgZmDIjksq3nc68E0Kw1FDrTCfkt+B3zx+ukOm4j1JV336Pei+wYLOhAWdCQs6ExZ0Jvox6E3Ag8DFwAnADOBeYKtA41fgCeBC4HjgLPdsXsxN/9n2oPcUgVaN6CYD73jorK1bJChCX0NkkoZcGI/Bzz4DFOAI4MsanS1uOtRzfvpZIhIt0BrTMdYCZwjqnQ0cqNC6Quj9aSIRFJ7QrJbrAmquirG3AhgPfNqGoF8PrHlLidYDgVrTYgzPQ2pLjYbyN3BGYM3TSvQuVfSwBCWhtSUmQ3lPUXN88Y/qZopCz21L2NfUoG9V1nUzct2oVsuBj5oY9EjIhpieK7r3yeM4ZR+Lmxj0dmXN6SWaFyg1Zzcx6LXKmneWaD6q1DyliUGvUtRzo7p1JZrblFsUJpWs1PR90O8rtxNUsVT5uX+waUF/FljrcmB/ja67Im8L1D4WBSE1pQZD+C6gzrklj3RlHCjbDuahPxMFndQE+trvZuIENY4ENgunXM8U9jEPBUHhCQ2GMktQw81TS1kh7OOZpgb9sKDGygD9YWEfqu9KBoUnNEjqGyLhu4uOFgyAgh/tHKoQPU2i+Jw+yrNG3apKFQd97wPAXShRB+lhUsMczxqvBGhvFvTwQdODfsGzxtwA7eWe2gPFU4oKdZAeRjV8LwjD5xm6m/M9ta8mAuogPYxqme5Z50WB5nqB/6VtCXqeYPV7JKam4kb7P1QhehrVskRQ63MPvR8lqy3FHmw1wQEKjGp5WzkP3ctTAr2TiERwgAKzWjYIZ9hG2zt3jnA2MArBAQrMatkqrPdFjdaQUGsOkeikJoLHIWG9N2q01gi1biYSndRE8LhXWK/upIKVQq0FRKKTmkg+BwT13qzRWS30/ljbgp4lqPftKBvQxwm0VrQt6EcEGxKrtuwe4iJPrYkxjwJSB+lhOAZbfE6ZAR730HrN0/dNRCRKmJmOY3tolDqneo7i3Dz0ZR6HpOykz45ji3XA4F/ANRU1pgqXmn6p2iLmVl3cTZM+PGBQtTmwB7cV9zn3hZ6uK+8O4Cfk/AE86fZSd40qb090MMqiHEG7ueJB2stglkNguzYItjHsQdd7lpB7rmz3MbJBu3t+jLOv6HFxtivZMAzDMAzDMAzDMAyjM7b5B4Dlzp1sFlBoAAAAAElFTkSuQmCC"
            width="50"
            alt="image"
          />
          <h2 class="text-white font-Averia font-semibold sm:lg md:text-2xl">
            Weight Loss
          </h2>
        </div>
        <div class="flex flex-col text-center md:flex-row md:text-start gap-1 items-center py-2 sm:py-6 px-2">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE50lEQVR4nO3c3atVRRjH8VUpvmBviqLYe3dSbZQoBEEI8hy1IvoDuqmoyG4qCPLW8CIMuqqLCkSwwgvL7M0ufOmVCgrC4lAhaN5EStL2bDP1Gw9nFix2Z681s9asWfOsvX6w7/aemf1hzpx5WztJunTp0qVLly5dVAXYCLwF/Aj8NvQ6CZwu8TqLe84DnwFrkjYFWATsJb70gfVJGwJcBuwj3vRbgQ08SPzpq8cG3kVH+qqxgWPEk3+AQSuxzcwglvxhZj7tw44NOplp00QBtkwZ70k0JUboVmLHCt067JihW4UdO3RrsDVAS4BJ1dhaoNVja4JWja0NWi22RmiV2Fqh1WFrhlaFrR1aYrER1Tx2G6AlwP1mmzVv1++2pKlEBv0vsLDCd3mgAPs9v3p6oSWPV/w+edi/+5PTDz0NPAtcXwN26aGpjdB1poMOlA46UDroQOmgA6WDDpSxgZ4EngcOABcJn7GBXpCp9ybgZXNFN1RaA90HDgMXiqAz9a8CviZMVEMPgDeBtcAcU6as7qygzfvnA7upP2qhdwFLZynTCTpzT7tubHXQZ4DNOWU6Q2d6dp3DiCro08DdBWWWgs6M2efHHfoccKdFmaWhzedlNjLW0Fssy6wKfXNN8+xvEwXQXzmUWQnalCGLGp/5ElicKIDeGBhaVpC+8ilwZdJkLKF/dizTB/R6T8g7gblJ07GE3uEJOnRekvm5RXtvBz4xFkeBp2w+Vwf0hDLoS3LuaNnWUXevZTF2RWnYktC3KoKWfZZHLNu5oeDizdvptkIo6EVKoOVG0ibLNi42K9yi+OnZFtCXXCuiGeg/ZWPL8+2mLPblzrglevSKyKHlJy7uKPn9iy5Jpnm6TPmu0GsqVeLWniOOyD8BN1Ss0wbbaYpbFvqxSpXYt2Wu4w+pWK/2zI3TfTl74pvMXs6o/BUCen+lSuzbss4B+QPbC5EGOUWU+fJ8i/cN50AI6AFwTaWK7Noi/3S8rvZG4H1cgD08jMjne6H2OrZXqqi4HSsK/nSdVnsWPfSjHOzsmD2wnTL6gp4Grqtc4eh2vGMxzXzOobw8ZBvsCWPjtCr2tR99sI4NGuChgnrlxOVhz8hpPgTmjSjnqiaPst7wVvlM/XcBf+fUdzbvfLLEc+OzZeSY3fTh7Gs+eracPQKncuo55bLac+zJw9k/qmc3fd3gYNkx21wteKZg+XtcDmoDIafZU+b7hLjXMS2zEdupnwGW/YXvCso96vJohSdk+S73VsIMcCVsALwPPAqsBpYb1AXALWbc3AFM+T7bU4HsEXrUdMw11qs9VciRPSy0y+UfbMnZxXDOucxo2gD9ist+rzrkSKB/dWyvPuRIoLe1HjkS6F7rkSOAnhoL5Aigt40FcgTQvbFAbhh6amyQG4Z+saBdS4EnzFNe8a74FED3LNs3r8SjFvH05DTm8kmUs400wPdqe3Ia4BARL1IkwOuqkSXmLnDo9Bzb+KRq5MwYKBvtUQ4bEmCJ2et+Ffhmlq3RuJHTyP1n4JcYh42cq2Ofq0JOA1wtUy7gRBPDBrDM5aKK3O5Uhzwc4FpzBJX3utG8z+mVU+cWMyRMWrZxpWrkpsLMWSHmZPy+ptvTyjDz15E9Y+yw6wiwVcXqTnuAHzLA0rO/MPP7//0WSJekErQ8TiHYL8hvLcWK+R/P0dXabcoU2QAAAABJRU5ErkJggg=="
            width="50"
            alt="image"
          />
          <h2 class="text-white font-Averia font-semibold sm:lg md:text-2xl">
            Diet Chart
          </h2>
        </div>
      </div>
      <div class="py-32 flex flex-col md:flex-row items-center justify-around gap-10">
        <div class="left relative  ">
          <img
            class="rounded-3xl h-[350px] object-cover "
            src={Weight}
            width="400"
            alt="Weight-lifting-image"
          />
          <div class="absolute sm:w-48 bg-white text-center font-semibold text-black font-Poppins px-5 sm:px-10 py-3 right-20 top-[92%] sm:-right-20 sm:top-[50%] rounded-2xl">
            <h2>Best Workout machine</h2>
          </div>
        </div>
        <div class="right w-2/3 md:w-1/3 flex flex-col justify-items-start text-white">
          <h1 class="font-Averia text-5xl  mb-8">
            Get Ready to Reach Your Fitness Goals
          </h1>
          <p class="font-Poppins mb-6 opacity-60 text-sm">
            Combining aerobic exercise with other kinds of exercises like
            strength training with weights and stretching keeps muscles,
            ligaments, joints, and tendons healthy, flexible, and strong,<br/> <br/> so
            when one becomes older, He is stronger and has less risk of being
            out of balance and falling causing fractures or other injuries
          </p>
          <button class="px-3 py-1 bg-[#e7ff14] rounded-xl w-28 text-black">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
