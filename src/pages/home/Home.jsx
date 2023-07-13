import React from "react";

export default function Home() {
  return (
    <section className="py-8 h-full overflow-auto relative">
      <div>
        <div className="h-[25rem] w-full bg-melody bg-no-repeat bg-center bg-cover object-contain rounded-xl"></div>
        <div className="mt-10">
          <h4 className="text-lg font-semibold capitalize">suggested songs</h4>
          <audio controls>
            <source src="http://www.last.fm/music/Cher/_/Believe" />
            Your browser does not support the audio element.
          </audio>
          ;<div className="flex flex-col gap-4">hello</div>
        </div>
      </div>
    </section>
  );
}
