import React, { useEffect, useState } from 'react'
import PropertyHotelInfo from './PropertyHotelInfo/PropertyHotelInfo'
import styles from './PropertyHotelInfoPage.module.css'
import PropertyHotelInfoPrice from './PropertyHotelInfoPrice/PropertyHotelInfoPrice'
import HeaderTop from '../HeaderTop/HeaderTop'
import { useSearchParams } from 'next/navigation'
import PropertyHotelGuestDetails from './PropertyHotelGuestDetails/PropertyHotelGuestDetails'
import PropertyHotelTripSecure from './PropertyHotelTripSecure/PropertyHotelTripSecure'
import PropertyHotelPaymentOptions from './PropertyHotelPaymentOptions/PropertyHotelPaymentOptions'
import PropertyHotelAddons from './PropertyHotelAddons/PropertyHotelAddons'
import PropertyHotelBankOffers from './PropertyHotelBankOffers/PropertyHotelBankOffers'


// First, define a type for your room data
type Room = {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  amenities: string[];
  ratePlans: {
    roomId: number;
    title: string;
    discount: string;
    originalPrice: string;
    currentPrice: string;
    taxes: string;
    features: string[];
  }[];
};


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
const PropertyHotelInfoPage = () => {
  const searchParams = useSearchParams();
  // const [sampleRoomsData, setSampleRoomsData] = useState<Room[]>([]);
  const [foundRoom, setFoundRoom] = useState<Room | null>(null);
  const [foundRoomId, setFoundRoomId] = useState<string>();
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const id = searchParams?.get("id") ?? undefined;
  const roomId = searchParams?.get("roomId") ?? undefined;

  useEffect(() => {
    console.log("PropertyHotelInfoPage id and roomId");
    console.log(id);
    console.log(roomId);
    setFoundRoomId(roomId); // <-- moved into useEffect
  }, [roomId, id]);

  useEffect(() => {
    // Only proceed if we have a valid ID that's different from current state
    if (!id || id === foundRoomId) return;

    const room = sampleRooms.find(room => room.id === Number(id));

    // Only update state if we found a different room
    if (room && room.id.toString() !== foundRoomId) {
      setFoundRoom(room);
      setFoundRoomId(roomId);
    } else if (!room && foundRoomId) {
      // Clear if no room found but we had a previous ID
      setFoundRoom(null);
      setFoundRoomId('');
    }
  }, [id, foundRoomId]);

  if (!foundRoom) {
    return <div>Loading or no room found...</div>;
  }

  return (
    <>
      <HeaderTop />
      <div className={styles.layoutCont}>
        <div className={styles.layout}>
          <main className={styles.mainContent}>
            <PropertyHotelInfo foundRoom={foundRoom} roomId={foundRoomId} />
            <PropertyHotelGuestDetails />
            <PropertyHotelTripSecure />
            <PropertyHotelPaymentOptions />
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>
                Proceed To Payment Options
              </button>
            </div>
            <div className={styles.container}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={isChecked}
                onChange={handleCheckboxChange}
                aria-label="Agree to terms and conditions"
              />
              <p className={styles.text}>
                By proceeding, I agree to Uzo &apos s{' '}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Privacy Policy
                </a>
                ,{' '}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  User Agreement
                </a>{' '}
                &{' '}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </main>
          <aside className={styles.sidebar}>
            <PropertyHotelInfoPrice />
            <PropertyHotelAddons />
            <PropertyHotelBankOffers />
          </aside>
        </div>
      </div>
    </>
  );
};

export default PropertyHotelInfoPage;
