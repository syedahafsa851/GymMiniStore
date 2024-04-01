import React from "react";
import john from '../images/john.png';
import jack from '../images/jack.png'

const Feedback = () => {
  return (
    <div>
      <div class="flex flex-col text-center items-center gap-4 py-10">
        <h1 class="font-Averia text-5xl font-semibold text-white">
          Client's Feedback
        </h1>
        <div class="w-80 h-1 bg-[#e7ff14]"></div>
      </div>
      <div class="flex flex-col gap-5 pb-10">
        <div class=" flex justify-center">
          <div class="flex items-center lg:justify-center bg-[#808080] w-2/3 border-4 sm:border-8 border-[#e7ff14] rounded-[60px] relative py-5 text-white">
            <div class="image absolute -left-12 sm:-left-20">
              <img
                class="border-4 sm:border-8 border-[#e7ff14] rounded-[50%] w-36 h-36 sm:w-44 sm:h-44 object-cover"
                src={john}
                alt="Client-Image"
              />
            </div>
            <div class="w-full pl-[100px] undefined ">
              <h1 class="font-Averia text-xl font-semibold undefined">
                MR JOHN
              </h1>
              <p class="font-Poppins text-[10px] sm:text-sm opacity-60">
              This is  Brilliant store i buy a treadmil from this store the results is marvellous.
              </p>
              <div class="stars flex gap-1 sm:gap-2 items-center justify-center mt-1 sm:mt-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="block mx-auto"></div>
        <div class=" flex justify-center">
          <div class="flex items-center lg:justify-center bg-[#808080] w-2/3 border-4 sm:border-8 border-[#e7ff14)] rounded-[60px] relative py-5 text-white">
            <div class="image absolute -right-12 sm:-right-20">
              <img
                class="border-4 sm:border-8 border-[#e7ff14)] rounded-[50%] w-36 h-36 sm:w-44 sm:h-44 object-cover"
                src={jack}
                alt="Client-Image"
              />
            </div>
            <div class="w-full pr-[100px] text-end ">
              <h1 class="font-Averia text-xl font-semibold text-end">
                MR JACK
              </h1>
              <p class="font-Poppins text-[10px] sm:text-sm opacity-60">
              This is  Brilliant store i buy a treadmil from this store the results is marvellous.
              </p>
              <div class="stars flex gap-1 sm:gap-2 items-center justify-center mt-1 sm:mt-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="block mx-auto"></div>
        <div class=" flex justify-center">
          <div class="flex items-center lg:justify-center bg-[#808080] w-2/3 border-4 sm:border-8 border-[#e7ff14] rounded-[60px] relative py-5 text-white">
            <div class="image absolute -left-12 sm:-left-20">
              <img
                class="border-4 sm:border-8 border-[#e7ff14] rounded-[50%] w-36 h-36 sm:w-44 sm:h-44 object-cover"
                src={john}
                alt="Client-Image"
              />
            </div>
            <div class="w-full pl-[100px] undefined ">
              <h1 class="font-Averia text-xl font-semibold undefined">
                MR JOHN
              </h1>
              <p class="font-Poppins text-[10px] sm:text-sm opacity-60">
              This is  Brilliant store i buy a treadmil from this store the results is marvellous.
              </p>
              <div class="stars flex gap-1 sm:gap-2 items-center justify-center mt-1 sm:mt-3">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgBzVhdbtNAEJ6xN2nSVtSFBggVwhUSr7QnIDkB5QTAEXoC4AYcAU4AN6DcgDckJFTzm0KABuhP4ji7zDi1vU7c2PH2gU+Kdm3vzn6eb2Z2Y4BzwLCz1oL/BbLT2FN7jgOGsMAQwZdL29S4QU1sgiGMySBY22NDeB8MgWAIud84AAUO/Xo4GG7gRq8HJWHkmVAiJsJAcEylMiITSZQYM5PKSKZYogiGUpX2TEqiCIZSlSajS6SkrRksL1V5MjbcjfqDgyvJfQXbZQtgKTK6RDKowvBPAxS1YzblpSpFRpcoOLoQtv7fVc1oOanKkdEkGh5eDNtRfzl5XlIqoV+wgT6AI4RwEdFFSzkglQs2rKCyNlkCGuaSRCFYIunXYzIsFQo/lErVKge0gXpk1eOUV1J9AMSeUugppTxF/cpw6OllIKwz8uvaC7CwNZWqOfB/r8Hg13p8XXX2YWH1G5TArtXstkOZEMUOKCxcqDiVVVABnwJXB3tH+rVUqucDvQHYD8NevEDnqqtAvqKeG90LjlcgOFki19ljSThjmEiBxdAahZKF7Wlf1I9ALP6eIGK16819L0UmixAvfty5maStASwis9h8P46pDCJTZBj+98amkPBKryOmhKaIIPQCC9rVy903+rjMjTKT0Jdbc8bC6QIk0dL6O80jJL8NW5NEQtJZBnigVLADk29GhuclkpaGXgzgYRaRM8kwRLP7jCfGA6snUGt8gnnA43leBKovO2z3rPEzKzBPVIBP4mvKhKKEeJyeOWzHvvbj6aw5uduB3fz+WCdUWf6VcnumUXrO41JEyA7koNDeZNX81BvlZRYHfOqM0/dnemQuMsFhciQY9ZeKTBkXyGh+wSNFMc/YkJAZ1ItMATmoJfMVnB8ZOhK04kUmJOL4qF99PxVHI18jjXgbzosM2HgjJqMtIpYPYJEKmqgfhoVNaEGbOt9A8jLmZDQ3R2QWLn6FeuNjXAi5rVM6V53xEWIiyN0ih61cMsNPyecOjpeovFdXupnjF1b3Yen6W7I8ShOqVFwwJaMHL5K/WZZUVQV8jmBvKAnP4zmn24ee3tJSrby1BOQC3XgRjURIhMq7fa0b1ZAHo85lD0E9igilIJNz0lnI9QyiysgE9HjnnSzvXGX5Pj+fmiGsO2BKhtika4SC19j3t87aefk+/ZVpU3c39UDSQd4E6rOzSSd8Ff1IhsfzzOfx+vyTPcedNX6mZ0Zou2GHTmYUC+0im50OHi+lvBfJVqnYLShLBtHivy9vBsrewuaPXSgBsf7z5Vg2pOAuti1k4vTj4blB5Xyi/Qd+iLabcM7K6QAAAABJRU5ErkJggg=="
                  class="w-[20px] sm:w-[30px]"
                  alt="Star-Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="block mx-auto">
        <div class="flex gap-2 mt-5 items-center justify-center p-5">
        <div class="w-5 h-5 rounded-[50%] bg-[#808080] border-[1px] border-[#e7ff14]"></div>
        <div class="w-5 h-5 rounded-[50%] bg-[#808080] border-[1px] border-[#e7ff14]"></div>
        <div class="w-5 h-5 rounded-[50%] bg-[#e7ff14] border-[1px] border-[#e7ff14]"></div>
        <div class="w-5 h-5 rounded-[50%] bg-[#808080] border-[1px] border-[#e7ff14]"></div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
