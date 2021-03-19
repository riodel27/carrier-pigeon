import React from 'react';

function App() {
   return (
      <div className="md:container md:mx-auto">
         <div className="flex space-x-4 ">
            <div className="flex-none w-2/6">
               <h1>LEFT</h1>
            </div>
            <div className="flex-1">CENTER</div>
            <div className="flex-none w-1/6">RIGHT</div>
         </div>
      </div>
   );
}

export default App;
