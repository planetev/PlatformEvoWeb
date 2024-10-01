import React from "react";

const Content = ({ children }: any) => {
  return (
    <>
    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {/* <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          </div> */}
          {children}
        </main>
    </>
  );
};

export default Content;
