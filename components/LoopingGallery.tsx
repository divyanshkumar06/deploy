// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const imageUrls = [
//   "https://th.bing.com/th/id/R.3c1dd9a48beba7547417fb546fba5b8d?rik=9B0iVSi%2bYi9wRA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f0%2f7%2f3%2f820767-full-hd-nature-wallpapers-1920x1080-for-meizu.jpg&ehk=BGgL4g9sk2uysoCXn6sslXVXvfyXDH16ISeI2ZB475o%3d&risl=&pid=ImgRaw&r=0",
  
// ];

// const LoopingGallery: React.FC = () => {
//   const galleryRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLUListElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (!galleryRef.current || !cardsRef.current) return;

//     const cards = gsap.utils.toArray(cardsRef.current.children) as HTMLElement[];
//     const cardWidth = cards[0].offsetWidth; // Width of each card
//     const spacing = 20; // Space between cards
//     const totalWidth = (cardWidth + spacing) * cards.length; // Total width of all cards

//     // Duplicate cards for seamless looping
//     cardsRef.current.innerHTML += cardsRef.current.innerHTML;

//     // GSAP animation for infinite scrolling
//     const tl = gsap.timeline({
//       repeat: -1, // Infinite loop
//       defaults: { ease: "none" },
//     });

//     tl.to(cardsRef.current, {
//       x: `-=${totalWidth}`,
//       duration: cards.length * 2, // Adjust duration for speed
//       modifiers: {
//         x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // Loop back to start
//       },
//     });

//     // ScrollTrigger for snapping and interaction
//     const trigger = ScrollTrigger.create({
//       trigger: galleryRef.current,
//       start: "top top",
//       end: `+=${totalWidth}`, // End based on the total width of the cards
//       pin: true,
//       scrub: 1,
//       onUpdate(self) {
//         const progress = self.progress;
//         const snapProgress = gsap.utils.snap(1 / (cards.length - 1), progress); // Snap to each card
//         tl.progress(snapProgress);
//         setCurrentIndex(Math.floor(snapProgress * cards.length)); // Update current index
//       },
//     });

//     // Cleanup
//     return () => {
//       tl.kill();
//       trigger.kill();
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//     scrollToCard(currentIndex + 1);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
//     scrollToCard(currentIndex - 1);
//   };

//   const scrollToCard = (index: number) => {
//     const cards = gsap.utils.toArray(cardsRef.current?.children || []) as HTMLElement[];
//     const cardWidth = cards[0].offsetWidth;
//     const spacing = 20;
//     const scrollX = index * (cardWidth + spacing);

//     gsap.to(cardsRef.current, {
//       x: -scrollX,
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <div className="gallery relative overflow-hidden h-[300px]" ref={galleryRef}>
//       <ul
//         className="cards flex space-x-5"
//         ref={cardsRef}
//         style={{ width: "max-content" }}
//       >
//         {imageUrls.map((url, i) => (
//           <li key={i} className="w-[400px] h-[300px] flex-shrink-0">
//             <img
//               src={url}
//               alt={`Gallery ${i}`}
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </li>
//         ))}
//       </ul>

//       {/* Navigation Buttons */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700"
//       >
//         Prev
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default LoopingGallery;