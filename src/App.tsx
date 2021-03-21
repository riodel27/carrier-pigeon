import React from 'react';

import logo from './assets/pigeon-logo.png';
import userImage from './assets/resources/user-one.jpeg';
import userTwo from './assets/resources/user-two.jpeg';
import userThree from './assets/resources/user-three.jpeg';
import userFour from './assets/resources/user-four.jpeg';
import settingsIcon from './assets/settings.png';

function App() {
   return (
      <div className="md:container md:mx-auto">
         <div className="flex space-x-4 ">
            <div className="w-1/5">
               <div className="flex items-center mt-5 border-b-2">
                  <img className="w-24 h-24 mr-5" src={logo} alt="logo" />
                  <p className="text-gray-600">pigeon homing</p>
               </div>
               <div className="flex justify-between pt-5 pb-5 mt-5">
                  <div className="flex">
                     <img className="mr-4 rounded-full w-14 h-14" src={userImage} alt="" />
                     <div>
                        <p>George Tarielashvili</p>
                        <p className="text-xs text-gray-500">Senior UI/UX Designer</p>
                        <p className="text-xs text-green-600">Online</p>
                     </div>
                  </div>
                  <img className="items-start w-4 h-4 mt-1" src={settingsIcon} alt="" />
               </div>
               <div className="mt-5">
                  <p>Active Chats</p>
                  <input className="mt-5 mb-5" type="text" placeholder="Search People" />

                  <div className="flex justify-between mb-4">
                     <img className="rounded-full w-14 h-14" src={userTwo} alt="" />
                     <div>
                        <p className="text-sm">Sasha Cohen</p>
                        <p className="text-xs text-gray-400">Typing</p>
                     </div>
                     <p>08:05</p>
                  </div>

                  <div className="flex justify-between mb-4">
                     <img className="rounded-full w-14 h-14" src={userThree} alt="" />
                     <div>
                        <p className="text-sm">Sasha Cohen</p>
                        <p className="text-xs text-gray-400">Typing</p>
                     </div>
                     <p>08:05</p>
                  </div>

                  <div className="flex justify-between mb-4">
                     <img className="rounded-full w-14 h-14" src={userFour} alt="" />
                     <div>
                        <p className="text-sm">Sasha Cohen</p>
                        <p className="text-xs text-gray-400">Typing</p>
                     </div>
                     <p>08:05</p>
                  </div>
               </div>
            </div>
            <div className="">message convo component</div>
            <div className="">chat details component</div>
         </div>
      </div>
   );
}

export default App;
