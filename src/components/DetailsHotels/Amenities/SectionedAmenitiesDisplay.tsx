import React, { useState } from 'react';

// Define interfaces
interface AmenitiesSection {
  title: string;
  items: string[];
}

interface AmenitiesData {
  title: string;
  sections: AmenitiesSection[];
}

interface FlattenedItem {
  isTitle: boolean;
  content: string;
}

interface SectionedAmenitiesDisplayProps {
  amenitiesData?: AmenitiesData;
}

// Default amenities data
const defaultAmenitiesData: AmenitiesData = {
  title: "Amenities at Pride Plaza Hotel Aerocity New Delhi",
  sections: [
    {
      title: "Popular Amenities",
      items: [
        "Jacuzzi",
        "Spa",
        "Swimming Pool",
        "Gym",
        "Restaurant",
        "Fireplace",
        "24-hour Room Service",
        "Lounge",
        "Bar",
        "Steam and Sauna",
      ],
    },
    {
      title: "Basic Facilities",
      items: [
        "Housekeeping",
        "Express check-in/check-out",
        "Free Wi-Fi",
        "Smoking Rooms",
        "Swimming Pool",
        "Elevator/Lift",
        "Linen",
        "Refrigerator",
        "Ironing Service",
        "EV Charging Station",
        "Newspaper",
        "Air Conditioning",
        "Free LAN",
        "24-hour Room Service",
        "Laundry Service",
        "Smoke Detector",
        "Power Backup",
        "Free Parking",
      ],
    },
    {
      title: "Transfers",
      items: ["Paid Railway Transfers", "Paid Airport Transfers"],
    },
    {
      title: "Food and Drinks",
      items: ["Dining Area", "Restaurant", "Bar", "Bakery", "24-hour Cafe"],
    },
    {
      title: "Payment Services",
      items: ["Currency Exchange"],
    },
    {
      title: "Safety and Security",
      items: [
        "Fire Extinguishers",
        "Security alarms",
        "Safe",
        "Electronic Keycard",
        "CCTV",
      ],
    },
    {
      title: "Health and wellness",
      items: ["First-aid Services", "Gym"],
    },
    {
      title: "Media and technology",
      items: ["TV"],
    },
    {
      title: "General Services",
      items: [
        "Ticket/Tour Assistance",
        "Wake-up Call",
        "Multilingual Staff",
        "Concierge",
        "Facilities for Guests with Disabilities",
        "Luggage Storage",
        "Bellboy Service",
        "Wheelchair",
        "Pool/ Beach towels",
        "Doctor on Call",
        "Luggage Assistance",
      ],
    },
    {
      title: "Beauty and Spa",
      items: ["Spa", "Steam and Sauna", "Massage"],
    },
    {
      title: "Outdoor Activities",
      items: ["Vehicle Rentals"],
    },
    {
      title: "Common Area",
      items: [
        "Outdoor Furniture",
        "Seating Area",
        "Lounge",
        "Reception",
        "Jacuzzi",
        "Sun Deck",
        "Fireplace",
      ],
    },
    {
      title: "Business Center",
      items: [
        "Fax Service",
        "Business Centre",
        "Photocopying",
        "Banquet",
        "Conference Room",
        "Printer",
      ],
    },
    {
      title: "Other Facilities",
      items: [
        "Valet parking",
        "Breakfast",
        "Security Guard",
        "Sitout Area",
        "Kid's Menu",
      ],
    },
  ],
};

const SectionedAmenitiesDisplay: React.FC<SectionedAmenitiesDisplayProps> = ({
  amenitiesData: propData
}: SectionedAmenitiesDisplayProps) => {
  // Use provided data or fallback to default data
  const data: AmenitiesData = propData || defaultAmenitiesData;
  const [expanded,] = useState<boolean>(true);

  // Function to arrange sections in columns
  const organizeInColumns = (): Array<Array<FlattenedItem>> => {
    // Create 5 empty columns
    const columns: Array<Array<FlattenedItem>> = [[], [], [], [], []];

    // Flatten all sections and items into a single array
    const flattenedItems: Array<FlattenedItem> = [];

    data.sections.forEach((section: AmenitiesSection) => {
      // Add section title
      flattenedItems.push({ isTitle: true, content: section.title });

      // Add section items
      section.items.forEach((item: string) => {
        flattenedItems.push({ isTitle: false, content: item });
      });
    });

    // Calculate items per column for equal distribution
    const itemsPerColumn: number = Math.ceil(flattenedItems.length / 5);

    // Distribute items among columns
    for (let i = 0; i < flattenedItems.length; i++) {
      const columnIndex = Math.floor(i / itemsPerColumn);
      if (columnIndex < 5) {
        columns[columnIndex].push(flattenedItems[i]);
      }
    }

    return columns;
  };

  const columns: Array<Array<FlattenedItem>> = organizeInColumns();

  // const toggleExpanded = (): void => {
  //   setExpanded(!expanded);
  // };

  return (
    <div className="amenities-container">
      {expanded ? (
        <div className="amenities-grid">
          {columns.map((column: Array<FlattenedItem>, colIndex: number) => (
            <div key={colIndex} className="amenities-column">
              {column.map((item: FlattenedItem, itemIndex: number) => (
                <div
                  key={`${colIndex}-${itemIndex}`}
                  className={`amenities-item ${item.isTitle ? 'amenities-title' : 'amenities-content'}`}
                >
                  {item.isTitle ? (
                    item.content
                  ) : (
                    <div className="amenities-content-wrapper">
                      <span className="amenities-bullet">•</span>
                      <span>{item.content}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="amenities-collapsed-grid">
          {data.sections.slice(0, 5).map((section: AmenitiesSection, sectionIndex: number) => (
            <div key={sectionIndex} className="amenities-collapsed-section">
              <h3 className="amenities-collapsed-title">{section.title}</h3>
              <ul className="amenities-collapsed-list">
                {section.items.slice(0, 5).map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="amenities-collapsed-item">
                    <span className="amenities-bullet">•</span>
                    <span>{item}</span>
                  </li>
                ))}
                {section.items.length > 5 && (
                  <li className="amenities-more-items">+ {section.items.length - 5} more</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .amenities-container {
          font-family: "Segoe UI", "Poppins", "Open Sans", "Bahnschrift", sans-serif,
    Arial, Helvetica, sans-serif, "lato";
         padding: 20px 24px 0px 22px
          background-color: white;
          border-radius: 8px;
          font-size: 14px;
        }
        
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 20px;
          margin-top: 10px;
        }
        
        @media (min-width: 768px) {
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .amenities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1280px) {
          .amenities-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
        
        .amenities-column {
          display: flex;
          flex-direction: column;
          padding-left: 20px;
        }
        
        .amenities-item {
          margin-bottom: 4px;
        }
        
        .amenities-title {
          font-weight: 600;
          // margin-top: 12px;
          color: var(--text-color-black);
          margin-left: 10px;
          font-size: 16px;
        }
        
        .amenities-content {
          padding-left: 16px;
        }
        
        .amenities-content-wrapper {
          display: flex;
          align-items: flex-start;
        }
        
        .amenities-bullet {
          margin-right: 8px;
          color: #4b5563;
          flex-shrink: 0;
        }
        
        .amenities-collapsed-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 20px;
          padding-top: 10px;
          padding-left: 22px;
        }
        
        @media (min-width: 768px) {
          .amenities-collapsed-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .amenities-collapsed-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .amenities-collapsed-section {
          border: 1px solid #e5e7eb;
          padding: 16px;
          border-radius: 8px;
        }
        
        .amenities-collapsed-title {
          font-weight: bold;
          margin-bottom: 8px;
        }
        
        .amenities-collapsed-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        
        .amenities-collapsed-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 4px;
        }
        
        .amenities-more-items {
          color: #6b7280;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default SectionedAmenitiesDisplay;



// import React, { useState } from 'react';

// // Define interfaces
// interface AmenitiesSection {
//   title: string;
//   items: string[];
// }

// interface AmenitiesData {
//   title: string;
//   sections: AmenitiesSection[];
// }

// interface FlattenedItem {
//   isTitle: boolean;
//   content: string;
// }

// interface SectionedAmenitiesDisplayProps {
//   amenitiesData?: AmenitiesData;
// }

// // Default amenities data
// const defaultAmenitiesData: AmenitiesData = {
//   title: "Amenities at Pride Plaza Hotel Aerocity New Delhi",
//   sections: [
//     {
//       title: "Popular Amenities",
//       items: [
//         "Jacuzzi",
//         "Spa",
//         "Swimming Pool",
//         "Gym",
//         "Restaurant",
//         "Fireplace",
//         "24-hour Room Service",
//         "Lounge",
//         "Bar",
//         "Steam and Sauna",
//       ],
//     },
//     {
//       title: "Basic Facilities",
//       items: [
//         "Housekeeping",
//         "Express check-in/check-out",
//         "Free Wi-Fi",
//         "Smoking Rooms",
//         "Swimming Pool",
//         "Elevator/Lift",
//         "Linen",
//         "Refrigerator",
//         "Ironing Service",
//         "EV Charging Station",
//         "Newspaper",
//         "Air Conditioning",
//         "Free LAN",
//         "24-hour Room Service",
//         "Laundry Service",
//         "Smoke Detector",
//         "Power Backup",
//         "Free Parking",
//       ],
//     },
//     {
//       title: "Transfers",
//       items: ["Paid Railway Transfers", "Paid Airport Transfers"],
//     },
//     {
//       title: "Food and Drinks",
//       items: ["Dining Area", "Restaurant", "Bar", "Bakery", "24-hour Cafe"],
//     },
//     {
//       title: "Payment Services",
//       items: ["Currency Exchange"],
//     },
//     {
//       title: "Safety and Security",
//       items: [
//         "Fire Extinguishers",
//         "Security alarms",
//         "Safe",
//         "Electronic Keycard",
//         "CCTV",
//       ],
//     },
//     {
//       title: "Health and wellness",
//       items: ["First-aid Services", "Gym"],
//     },
//     {
//       title: "Media and technology",
//       items: ["TV"],
//     },
//     {
//       title: "General Services",
//       items: [
//         "Ticket/Tour Assistance",
//         "Wake-up Call",
//         "Multilingual Staff",
//         "Concierge",
//         "Facilities for Guests with Disabilities",
//         "Luggage Storage",
//         "Bellboy Service",
//         "Wheelchair",
//         "Pool/ Beach towels",
//         "Doctor on Call",
//         "Luggage Assistance",
//       ],
//     },
//     {
//       title: "Beauty and Spa",
//       items: ["Spa", "Steam and Sauna", "Massage"],
//     },
//     {
//       title: "Outdoor Activities",
//       items: ["Vehicle Rentals"],
//     },
//     {
//       title: "Common Area",
//       items: [
//         "Outdoor Furniture",
//         "Seating Area",
//         "Lounge",
//         "Reception",
//         "Jacuzzi",
//         "Sun Deck",
//         "Fireplace",
//       ],
//     },
//     {
//       title: "Business Center",
//       items: [
//         "Fax Service",
//         "Business Centre",
//         "Photocopying",
//         "Banquet",
//         "Conference Room",
//         "Printer",
//       ],
//     },
//     {
//       title: "Other Facilities",
//       items: [
//         "Valet parking",
//         "Breakfast",
//         "Security Guard",
//         "Sitout Area",
//         "Kid's Menu",
//       ],
//     },
//   ],
// };

// const SectionedAmenitiesDisplay: React.FC<SectionedAmenitiesDisplayProps> = ({
//   amenitiesData: propData
// }: SectionedAmenitiesDisplayProps) => {
//   // Use provided data or fallback to default data
//   const data: AmenitiesData = propData || defaultAmenitiesData;
//   const [expanded, setExpanded] = useState<boolean>(true);

//   // Function to arrange sections in columns
//   const organizeInColumns = (): Array<Array<FlattenedItem>> => {
//     // Create 5 empty columns
//     const columns: Array<Array<FlattenedItem>> = [[], [], [], [], []];

//     // Flatten all sections and items into a single array
//     const flattenedItems: Array<FlattenedItem> = [];

//     data.sections.forEach((section: AmenitiesSection) => {
//       // Add section title
//       flattenedItems.push({ isTitle: true, content: section.title });

//       // Add section items
//       section.items.forEach((item: string) => {
//         flattenedItems.push({ isTitle: false, content: item });
//       });
//     });

//     // Calculate items per column for equal distribution
//     const itemsPerColumn: number = Math.ceil(flattenedItems.length / 5);

//     // Distribute items among columns
//     for (let i = 0; i < flattenedItems.length; i++) {
//       const columnIndex = Math.floor(i / itemsPerColumn);
//       if (columnIndex < 5) {
//         columns[columnIndex].push(flattenedItems[i]);
//       }
//     }

//     return columns;
//   };

//   const columns: Array<Array<FlattenedItem>> = organizeInColumns();

//   const toggleExpanded = (): void => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg pt-[10px] pl-[22px]">
//       {/* <h1 className="text-2xl font-bold mb-6 text-center">{data.title}</h1> */}

//       {/* <div className="flex justify-center mb-4">
//         <button
//           onClick={toggleExpanded}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
//         >
//           {expanded ? "Show Less" : "Show All Amenities"}
//         </button>
//       </div> */}

//       {expanded ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-20 ">
//           {columns.map((column: Array<FlattenedItem>, colIndex: number) => (
//             <div key={colIndex} className="flex flex-col">
//               {column.map((item: FlattenedItem, itemIndex: number) => (
//                 <div
//                   key={`${colIndex}-${itemIndex}`}
//                   className={`mb-1 ${item.isTitle ? 'font-bold mt-3 text-blue-700' : 'pl-4'}`}
//                 >
//                   {item.isTitle ? (
//                     item.content
//                   ) : (
//                     <div className="flex items-start">
//                       <span className="mr-2 text-gray-600 flex-shrink-0">•</span>
//                       <span>{item.content}</span>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-[10px] pl-[22px]">
//           {data.sections.slice(0, 5).map((section: AmenitiesSection, sectionIndex: number) => (
//             <div key={sectionIndex} className="border p-4 rounded-lg">
//               <h3 className="font-bold mb-2">{section.title}</h3>
//               <ul>
//                 {section.items.slice(0, 5).map((item: string, itemIndex: number) => (
//                   <li key={itemIndex} className="flex items-start mb-1">
//                     <span className="mr-2 text-gray-600">•</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//                 {section.items.length > 5 && (
//                   <li className="text-gray-500 italic">+ {section.items.length - 5} more</li>
//                 )}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SectionedAmenitiesDisplay;