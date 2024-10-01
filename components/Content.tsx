import React from "react";

const Content = ({ children }: any) => {
  return (
    <>
    <main className="flex-1 flex flex-col min-h-screen bg-gray-50 overflow-y-auto">
      <div className="flex-1 flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
      </div>
    </main>
    </>
  );
};

export default Content;
