import React from 'react';

import logo from './assets/pigeon-logo.png';
import userImage from './assets/resources/user-one.jpeg';
import userTwo from './assets/resources/user-two.jpeg';
import userSix from './assets/resources/user-six.jpeg';
import userFive from './assets/resources/user-five.jpeg';
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
                  <p className="text-sm font-semibold text-gray-600">Active Chats</p>
                  <input
                     className="w-full pt-1 pb-1 pl-4 mt-5 mb-5 text-sm font-medium border border-gray-400 rounded-md bg-gray-50"
                     type="text"
                     placeholder="Search people"
                  />

                  <div className="flex items-center mb-4 ">
                     <img className="w-12 h-12 mr-4 rounded-full" src={userTwo} alt="" />
                     <div className="flex justify-between w-full">
                        <div>
                           <p className="text-sm font-semibold text-gray-600">Sasha Cohen</p>
                           <p className="text-xs italic font-medium text-gray-500">Typing...</p>
                        </div>
                        <p className="text-xs font-medium text-gray-600">08:05</p>
                     </div>
                  </div>

                  <div className="flex items-center mb-4 ">
                     <img className="w-12 h-12 mr-4 rounded-full" src={userFive} alt="" />
                     <div className="flex justify-between w-full">
                        <div>
                           <p className="text-sm font-semibold text-gray-600">Carmen Sue</p>
                           <p className="text-xs font-medium text-gray-400">Hey!!</p>
                        </div>
                        <p className="text-xs font-medium text-gray-600">09:09</p>
                     </div>
                  </div>

                  <div className="flex items-center mb-4 ">
                     <img className="w-12 h-12 mr-4 rounded-full" src={userSix} alt="" />
                     <div className="flex justify-between w-full">
                        <div>
                           <p className="text-sm font-semibold text-gray-600">Belle Rose</p>
                           <p className="text-xs font-medium text-gray-400">Hello!</p>
                        </div>
                        <p className="text-xs font-medium text-gray-600">10:00</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="self-center flex-1">
               <p className="text-center">Message Convo</p>
            </div>
            <div className="self-center flex-1">
               <p className="text-center">chat Details</p>
            </div>
         </div>
      </div>
   );
}

export default App;
