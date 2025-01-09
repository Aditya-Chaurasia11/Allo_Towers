import React from "react";
import { Map as MapIcon } from "lucide-react";
import Map from "./components/Map";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <MapIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Allo Towers Assignment
            </h1>
          </div>

          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
