import React from "react";
import { empty } from "../../lib/getAssets";

function NoData({ title = "No data found!" }) {
  return (
    <div className="w-full py-10 h-full flex items-center justify-center">
      <div>
        <div className="mb-6">
          <img src={empty} alt="" className="w-48" />
        </div>
        <h2 className="text-center text-lg">{title}</h2>
      </div>
    </div>
  );
}

export default NoData;
