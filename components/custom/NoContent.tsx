import React from "react";
import { Button } from "../ui/button";
import { FileQuestion, RefreshCw } from "lucide-react";

const NoContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center p-6 bg-muted rounded-lg transition-all duration-300 ease-in-out hover:shadow-md">
      <FileQuestion className="w-16 h-16 text-muted-foreground mb-4 transition-transform duration-300 ease-in-out hover:scale-110" />
      <h3 className="text-2xl font-semibold mb-2">No Content Available</h3>
      <p className="text-muted-foreground mb-4">
        It looks like there no data to display at the moment. Try refreshing or
        adding some data.
      </p>
      <Button className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-primary-dark">
        <RefreshCw className="w-4 h-4" />
        Refresh Data
      </Button>
    </div>
  );
};

export default NoContent;
