'use client';
import RoomCard from "./RoomCard";
import RoomHeaderSticky from "./RoomHeaderSticky/RoomHeaderSticky";
import RoomTypes from "./RoomTypes/RoomTypes";
import styles from './RoomCard.module.css'

const sampleRooms = [
  {
    id: 1,
    name: 'Day Use Room, 6 hrs stay (10 am to 4 pm), Check-in and Check-out on same day',
    type: '(344 sq.ft (32 sq.mt))',
    imageUrl:
      'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201309021636532583-7b2d56fc-3cd3-462f-9391-ce0a23470d70.jpg',
    amenities: [
      'Mineral Water',
      'Air Conditioning',
      'Bathroom',
      'Iron/Ironing Board',
      'Telephone',
      'Closet',
      'Wifi',
    ],
    ratePlans: [
      {
        roomId: 1,
        title: 'Room Only',
        discount: '10',
        originalPrice: '₹4,200',
        currentPrice: '₹3,700',
        taxes: '+ ₹444 taxes & fees per night',
        features: [
          'No meals included',
          'Complimentary welcome drinks on arrival',
          'Day Use Rate',
          'Non-Refundable',
        ],
      },
      {
        roomId: 2,
        title: 'Room with Breakfast/Lunch',
        discount: '15',
        originalPrice: '₹5,500',
        currentPrice: '₹5,100',
        taxes: '+ ₹612 taxes & fees per night',
        features: [
          'Complimentary Welcome Drink on arrival',
          'Signature Activities & Experiences',
          'Lunch included',
          'Non-Refundable',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Deluxe King Room',
    type: '(400 sq.ft (37 sq.mt))',
    imageUrl:
      'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201309021636532583-7b2d56fc-3cd3-462f-9391-ce0a23470d70.jpg',
    amenities: [
      'Mineral Water',
      'Air Conditioning',
      'Bathroom',
      'Iron/Ironing Board',
      'Telephone',
      'Closet',
      'Mini Bar',
      'Safe',
    ],
    ratePlans: [
      {
        roomId: 1,
        title: 'Room Only',
        discount: '10',
        originalPrice: '₹6,200',
        currentPrice: '₹5,700',
        taxes: '+ ₹684 taxes & fees per night',
        features: [
          'No meals included',
          'Flexible Rate',
          'Days of Joy',
          'Non-Refundable',
        ],
      },
      {
        roomId: 2,
        title: 'Room with Breakfast',
        discount: '15',
        originalPrice: '₹7,500',
        currentPrice: '₹6,800',
        taxes: '+ ₹816 taxes & fees per night',
        features: [
          '20% off on Food & Beverage services',
          'Complimentary Breakfast',
          'Days of Joy',
          'Non-Refundable',
        ],
      },
      {
        roomId: 3,
        title: 'Room with Breakfast + Lunch/Dinner',
        discount: '20',
        originalPrice: '₹8,500',
        currentPrice: '₹7,900',
        taxes: '+ ₹948 taxes & fees per night',
        features: [
          '20% off on Food & Beverages',
          '20% Off on Laundry service',
          'Free Breakfast',
          'Free Lunch Or Dinner',
          // 'Short Break',
          // 'Non-Refundable',
        ],
      },
      {
        roomId: 4,
        title: 'Room with All Meal (Breakfast, Lunch & Dinner)',
        discount: '25',
        originalPrice: '₹15,700',
        currentPrice: '₹12,319',
        taxes: '+ ₹1,517 taxes & fees per night',
        features: [
          '25% Discount on F&B services',
          '20% Off on Laundry service',
          'Complimentary Breakfast',
          'Complimentary Lunch Or Dinner',
          // 'Short Break',
          // 'Non-Refundable',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Superior Room Double',
    type: '(344 sq.ft (32 sq.mt) | Double Bed)',
    imageUrl:
      'https://r1imghtlak.mmtcdn.com/5206b86c-9b0f-454d-8c6f-119dc8eb3bf4.jpeg?downsize=377:200&crop=377:200',
    amenities: [
      'Mineral Water',
      'Air Conditioning',
      'Bathroom',
      'Iron/Ironing Board',
      'Telephone',
      'Closet',
      'Mini Bar',
      'Safe',
    ],
    ratePlans: [
      {
        roomId: 1,
        title: 'Room Only',
        discount: '10',
        originalPrice: '₹10,125',
        currentPrice: '₹9,821',
        taxes: '+ ₹1768 taxes & fees per night',
        features: [
          'No meals included',
          'Flexible Rate',
          'Days of Joy',
          'Non-Refundable',
        ],
      },
      {
        roomId: 2,
        title: 'Room with Breakfast',
        discount: '15',
        originalPrice: '₹7,500',
        currentPrice: '₹6,800',
        taxes: '+ ₹816 taxes & fees per night',
        features: [
          '20% off on Food & Beverage services',
          'Breakfast included ',
          'Days of Joy',
          'Non-Refundable',
        ],
      },
      {
        roomId: 3,
        title: 'Room with Breakfast + Lunch/Dinner',
        discount: '20',
        originalPrice: '₹12,700',
        currentPrice: '₹12,319',
        taxes: '+ ₹2,217 taxes & fees per night',
        features: [
          '20% Discount on F&B services',
          '20% Off on Laundry service',
          'Complimentary Breakfast',
          'Complimentary Lunch Or Dinner',
          // 'Short Break',
          // 'Non-Refundable',
        ],
      },
      {
        roomId: 4,
        title: 'Room with All Meal (Breakfast, Lunch & Dinner)',
        discount: '25',
        originalPrice: '₹15,700',
        currentPrice: '₹12,319',
        taxes: '+ ₹1,517 taxes & fees per night',
        features: [
          '25% Discount on F&B services',
          '20% Off on Laundry service',
          'Complimentary Breakfast',
          'Complimentary Lunch Or Dinner',
          // 'Short Break',
          // 'Non-Refundable',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Premium Room',
    type: '344 sq.ft (32 sq.mt) | Double Bed)',
    imageUrl:
      'https://r1imghtlak.ibcdn.com/b29afe406ad011eba4640242ac110002.jpg?downsize=428:230',
    amenities: [
      'Mineral Water',
      'Air Conditioning',
      'Bathroom',
      'Iron/Ironing Board',
      'Telephone',
      'Closet',
      'Mini Bar',
      'Safe',
    ],
    ratePlans: [
      {
        roomId: 1,
        title: 'Room Only',
        discount: '10',
        originalPrice: '₹11,125',
        currentPrice: '₹9,921',
        taxes: '+ ₹1768 taxes & fees per night',
        features: [
          'No meals included',
          'Flexible Rate',
          'Days of Joy',
          'Non-Refundable',
        ],
      },
      {
        roomId: 2,
        title: 'Room with Breakfast',
        discount: '15',
        originalPrice: '₹8,500',
        currentPrice: '₹7,800',
        taxes: '+ ₹916 taxes & fees per night',
        features: [
          '25% off on Food & Beverage services',
          'Breakfast included ',
          'Days of Joy',
          'Non-Refundable',
        ],
      },
      {
        roomId: 3,
        title: 'Room with Breakfast + Lunch/Dinner',
        discount: '20',
        originalPrice: '₹11,700',
        currentPrice: '₹9,319',
        taxes: '+ ₹1,217 taxes & fees per night',
        features: [
          '25% Discount on F&B services',
          '20% Off on Laundry service',
          'Complimentary Breakfast',
          'Complimentary Lunch Or Dinner',
          // 'Short Break',
          // 'Non-Refundable',
        ],
      },
      {
        roomId: 4,
        title: 'Room with All Meal (Breakfast, Lunch & Dinner)',
        discount: '25',
        originalPrice: '₹15,700',
        currentPrice: '₹12,319',
        taxes: '+ ₹1,517 taxes & fees per night',
        features: [
          '25% Discount on F&B services',
          '20% Off on Laundry service',
          'Complimentary Breakfast',
          'Complimentary Lunch Or Dinner',
          // 'Short Break',
          // 'Non-Refundable',
        ],
      },
    ],
  },
];

export default function RoomsPage() {
  return (
    <div className="rooms-container">
      {/* Room types filter component */}
      <RoomTypes />
      <div className={styles.roomHeaderStickyBody}>
        <RoomHeaderSticky />
      </div>
      {/* Room cards listing */}
      <div className="rooms-list">
        {/* {sampleRooms.map((room, index) => ( */}
        <RoomCard

          roomData={sampleRooms}
        />
        {/* ))} */}
      </div>

      {/* You can add more sections or components here */}
    </div>
  );
}