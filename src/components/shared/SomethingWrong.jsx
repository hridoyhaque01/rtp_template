import React from "react";
import { wrong } from "../../lib/getAssets";

function SomethingWrong() {
  const handleReloadClick = () => {
    window.location.reload();
  };
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          <div className="w-full max-w-[440px] mx-auto">
            <img src={wrong} alt="" className="w-full" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Something Went Wrong
          </h2>
          <button
            type="button"
            className="btn rounded-full bg-primaryMainLight hover:bg-primaryMainLight border-secondaryColor hover:border-primaryMainLight text-whiteHigh w-full max-w-max normal-case font-normal"
            onClick={handleReloadClick}
          >
            Reload Page
          </button>
        </div>
      </div>
    </section>
  );
}

export default SomethingWrong;
