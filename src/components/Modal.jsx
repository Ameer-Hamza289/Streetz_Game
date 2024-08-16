import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        className="bg-[#f8e3be] p-8 rounded-2xl relative w-3/4 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto shadow-lg text-black font-sans"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for Firefox and IE/Edge
      >
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .scrollbar-hidden::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-black text-2xl hover:text-gray-800"
        >
          &#x2715; {/* Cross icon */}
        </button>
        <h2 className="text-4xl font-bold mb-8 text-center ">GAME RULES</h2>
        
        <ol className="list-decimal list-inside text-lg mb-8 font-serif text-center">
          <li>Players get a total of three attempts to catch as much beers as possible for their friends.</li>
          <li>If a player gets 30 or more beers, they will win (1) complimentary ticket to the festival.</li>
          <li>Once a player has utilized all three attempts he/she will not be able to continue to play.</li>
        </ol>

        <h3 className="text-xl font-bold mb-2 text-center font-serif italic">*TERMS OF SERVICE:*</h3>
        <p className="text-lg mb-8 text-center">
          By playing, you agree to our terms and conditions.<br />
          Game is intended for entertainment purposes only.<br />
          Players must be 18+ years old.
        </p>

        <h3 className="text-xl font-bold mb-2 text-center font-serif italic">*GAMEPLAY RULES:*</h3>
        <p className="text-lg mb-8 text-center">
          Game is played as intended, without exploiting bugs or cheats.
        </p>

        <h3 className="text-xl font-bold mb-2 text-center font-serif italic">*INTELLECTUAL PROPERTY:*</h3>
        <p className="text-lg mb-8 text-center">
          Game assets, logos, and trademarks are our property.<br />
          No unauthorized use, reproduction, or distribution.<br />
          We collect data for gameplay improvement and analytics.<br />
          Personal data is handled according to our privacy policy.
        </p>

        <h3 className="text-xl font-bold mb-2 text-center font-serif italic">*DISCLAIMER:*</h3>
        <p className="text-lg mb-8 text-center">
          Game is provided "as-is" without warranties.<br />
          We're not liable for technical issues, losses, or damages.
        </p>

        <h3 className="text-xl font-bold mb-2 text-center font-serif italic">*CONTACT US:*</h3>
        <p className="text-lg text-center">
          For support, feedback, or questions,<br />
          email: streetzfestival@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Modal;






// import React from 'react';

// const Modal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg relative w-3/4 md:w-1/2 lg:w-1/3">
//         <button 
//           onClick={onClose} 
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//         >
//           &#x2715; {/* Cross icon */}
//         </button>
//         <h2 className="text-2xl font-bold mb-4">Game Rules</h2>
//         <p className="text-lg mb-4">
//           Welcome to the Streetz Game! Here's how to play:
//         </p>
//         <ul className="list-disc pl-6 mb-4">
//           <li>Use the left and right arrow keys to move your player.</li>
//           <li>Catch the bottles to earn points.</li>
//           <li>Avoid missing bottles, as you'll lose lives.</li>
//           <li>The game ends when you run out of lives.</li>
//         </ul>
//         <p className="text-lg">
//           Good luck, and have fun!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Modal;
