import React, { useEffect } from "react";
import { CountUp } from "countup.js";

const Statbar = () => {
  useEffect(() => {
    // Select all elements with "countTo" attribute and animate them using CountUp
    const numbers = document.querySelectorAll("[data-count-to]");

    numbers.forEach((number) => {
      const id = number.getAttribute("id");
      const value = number.getAttribute("data-count-to");
      const decimal = number.getAttribute("data-decimal");

      let countUp;
      if (decimal) {
        const options = {
          decimalPlaces: 1,
        };
        countUp = new CountUp(id, value, options);
      } else {
        countUp = new CountUp(id, value);
      }

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
        number.innerHTML = value;
      }
    });
  }, []);

  return (
    <div className="bg-white text-x1">
      <div className="container flex flex-col mx-auto">
        <div className="w-full">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-8 justify-center items-center">
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-extrabold leading-tight text-center text-dark-grey-900">
                  <span id="countto1" data-count-to="100"></span>+
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                  Pharmacies Listed
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-extrabold leading-tight text-center text-dark-grey-900">
                  <span id="countto2" data-count-to="95"></span>%
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                  Accuracy
                </p>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-extrabold leading-tight text-center text-dark-grey-900">
                  24/7
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">
                  Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statbar;
