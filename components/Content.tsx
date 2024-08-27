import React from "react";

const Content = ({ children }: any) => {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-gray-50">
        {children}

      </main>
    </>
  );
};

export default Content;
