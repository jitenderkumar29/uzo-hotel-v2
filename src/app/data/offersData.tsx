import { OfferInterface } from '@/interfaces';
import { FilterCategoryInterface } from '@/interfaces';

export const mockOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "New User Offer",
    "description": "Register and Get Discount on First Bookings with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtfirst-3jan24-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFIRST",
    "categories": ["special_insrt", "flight_insrt"]
  },
  {
    "id": 2,
    "title": "Anniversary sale",
    "description": "Now Celebrate the Special Season With Up to INR 10,000 OFF* on Travel Bookings",
    "imageUrl": "https://images.emtcontent.com/offer-img/17th-anniversary-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 10th Jun, 2025",
    "promoCode": "EMT17",
    "categories": ["special_insrt"]
  },
  {
    "id": 3,
    "title": "Book With ₹0 Payment",
    "description": "Book Your Favorite Hotels INR 0 with EaseMyTrip",
    "imageUrl": "/images/bookNow.png",
    "link": "/offersUzo",
    "categories": ["hotel_insrt"]
  },
  {
    "id": 4,
    "title": "Pilgrimage Deal",
    "description": "Explore Holy Sites with Budget-Friendly Pilgrimage Packages!",
    "imageUrl": "https://images.emtcontent.com/offer-img/EMTDIVINE21-march-25-sm.webp",
    "link": "/offersUzo",
    "promoCode": "EMTDIVINE",
    "categories": ["special_insrt"]
  },
  {
    "id": 5,
    "title": "Flash Deal",
    "description": "Summer Flash Deal on Travel Bookings from 9 PM - 12 AM",
    "imageUrl": "https://images.emtcontent.com/offer-img/flash-deal-17jan24-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "FLASHDEALS",
    "categories": ["special_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 6,
    "title": "International Flight Offer",
    "description": "Book International Flights with EaseMyTrip & Get a Free Universal Travel Adapter",
    "imageUrl": "https://images.emtcontent.com/offer-img/international-flights-ticket-25feb25-sm.webp",
    "link": "/offersUzo",
    "promoCode": "EMTPOWER",
    "categories": ["flight_insrt"]
  },
  {
    "id": 7,
    "title": "Win Assured Vouchers",
    "description": "Travel with EaseMyTrip to Win Assured Vouchers Worth INR 4000",
    "imageUrl": "https://images.emtcontent.com/offer-img/delight-3feb23-sm3.png",
    "link": "/offersUzo",
    "bookingPeriod": "Till 31st Jul, 2025",
    "promoCode": "DELIGHT",
    "categories": ["special_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 8,
    "title": "Deal of the Day",
    "description": "Enjoy Different Deals Each Day with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/easeday14apr23-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EASEDAY",
    "categories": ["flight_insrt", "hotel_insrt", "bus_insrt", "cab_insrt", "special_insrt"]
  },
  {
    "id": 9,
    "title": "EaseMyTrip Co-Branded Cards",
    "description": "Apply for Co-Branded Cards Now & Unlock special benefits and privileges",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtcards-sm.webp",
    "link": "/offersUzo",
    "categories": []
  },
  {
    "id": 10,
    "title": "IIFA Awards",
    "description": "Enjoy the Best of IIFA With Exclusive Travel Discounts",
    "imageUrl": "https://images.emtcontent.com/offer-img/iffa25-sm.webp",
    "link": "/offersUzo",
    "promoCode": "EMTIIFA",
    "categories": []
  },
  {
    "id": 11,
    "title": "Duty Free Products",
    "description": "Shop for Duty Free Products on Selective Airports with Extra Discounts!",
    "imageUrl": "https://images.emtcontent.com/offer-img/airport-duty-free-sm.png",
    "link": "/offersUzo",
    "categories": ["flight_insrt"]
  },
  {
    "id": 12,
    "title": "Visa for UAE",
    "description": "Submit your details now and get your UAE visa online easily",
    "imageUrl": "https://images.emtcontent.com/offer-img/uae-visa-hp.webp",
    "link": "/offersUzo",
    "categories": ["flight_insrt"]
  },
  {
    "id": 13,
    "title": "Flybig Sale",
    "description": "Book Your Flybig Flight Tickets with EaseMyTrip & Enjoy Rs.500 off",
    "imageUrl": "https://images.emtcontent.com/offer-img/flybig-airlines-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTBIG",
    "categories": ["flight_insrt"]
  },
  {
    "id": 14,
    "title": "Free Cab offer",
    "description": "Enjoy Free Cab on Flight Bookings with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/free-cab-8jan24-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "FREECAB",
    "categories": ["flight_insrt", "cab_insrt"]
  },
  {
    "id": 15,
    "title": "BOB EMT Debit Cards",
    "description": "Enjoy Amazing Discounts on Flights, Hotels, Bus with BOB EMT Debit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/bob-bank-18mar25-sm3.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 31st Dec, 2025",
    "promoCode": "EMTBOBDC",
    "categories": ["bob_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 16,
    "title": "PNB EMT Credit Cards",
    "description": "Wander the world with Wonderful Deals with PNB EMT Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/pnb-emt-co-branded-credit-card-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 31st Dec, 2026",
    "promoCode": "PNBEMT",
    "categories": ["bnk_insrt"]
  },
  {
    "id": 17,
    "title": "Standard Chartered",
    "description": "Travel discounts on the Standard Chartered - EaseMyTrip Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtscb-16july-sm.png",
    "link": "/offersUzo",
    "promoCode": "EMTSCB",
    "categories": ["bnk_insrt"]
  },
  {
    "id": 18,
    "title": "Flight Deal",
    "description": "Get Discount up to 35% on Booking Flight Tickets",
    "imageUrl": "https://images.emtcontent.com/offer-img/easefly-4oct22-sm2.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EASEFLY",
    "categories": ["flight_insrt"]
  },
  {
    "id": 19,
    "title": "Special Flight Deal",
    "description": "Book your Travel with Us & Enjoy 7% off up to Rs.750*",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtnow-27jun22-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "FLYNOW",
    "categories": ["flight_insrt"]
  },
  {
    "id": 20,
    "title": "UPI Payment Offer",
    "description": "Enjoy Huge Discounts on Travel Booking by Paying Through UPI",
    "imageUrl": "https://images.emtcontent.com/offer-img/upi-9apr24-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "UPIPAY",
    "categories": ["bus_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 21,
    "title": "Special Discounts",
    "description": "Get Irresistible Discounts on Flight, Hotel and Bus Bookings with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/tripemt-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "TRIPEMT",
    "categories": ["bus_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 22,
    "title": "Hotel Offer",
    "description": "Upto 20% Discount on Selected Hotel Booking",
    "imageUrl": "https://images.emtcontent.com/hotel-img/grab20-28apr-sm2.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "GRAB20",
    "categories": ["hotel_insrt"]
  },
  {
    "id": 23,
    "title": "Flyers Deal",
    "description": "Flat 20% off on Hotel Booking for Flyers",
    "imageUrl": "https://images.emtcontent.com/hotel-img/hotel-deal-for-flyers-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFLY",
    "categories": ["hotel_insrt"]
  },
  {
    "id": 24,
    "title": "New User Offer",
    "description": "Register & Enjoy Great Discount on First Hotel Booking",
    "imageUrl": "https://images.emtcontent.com/hotel-img/hotel-new-8jan25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFIRST",
    "categories": ["hotel_insrt"]
  },
  {
    "id": 25,
    "title": "Bus Deal",
    "description": "Bus Tickets to Different Destinations At A Discount up to Rs. 500",
    "imageUrl": "https://images.emtcontent.com/bus-img/emtbus-7jan25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTBUS",
    "categories": ["bus_insrt"]
  },
  {
    "id": 26,
    "title": "Bus Offer",
    "description": "Book Bus Tickets for Your Preferred Route at 10% Discount",
    "imageUrl": "https://images.emtcontent.com/bus-img/bus10-7aug24-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "BUS10",
    "categories": ["bus_insrt"]
  },
  {
    "id": 27,
    "title": "Cab Offer",
    "description": "Get Up to INR 7% Off* on Airport transfer Hourly rental, One Way & Round Trip Cab Book",
    "imageUrl": "https://images.emtcontent.com/cab-img/cab-deal-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTCAB",
    "categories": ["cab_insrt"]
  },
  {
    "id": 28,
    "title": "Domestic Flight Sale",
    "description": "Book Your Domestic Flight Tickets with EaseMyTrip & Enjoy Rs.305 off",
    "imageUrl": "https://images.emtcontent.com/offer-img/domestic-flight-ticket-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "FLYBIG",
    "categories": ["flight_insrt"]
  },
  {
    "id": 29,
    "title": "Free Flight Cancellation Coverage",
    "description": "Get complimentary flight cancellation insurance on every flight booking",
    "imageUrl": "https://images.emtcontent.com/offer-img/toffee-insurance-sm.png",
    "link": "/offersUzo",
    "categories": ["flight_insrt"]
  },
  {
    "id": 30,
    "title": "Invite & Earn",
    "description": "Invite Your Friends & Earn Up to Rs. 2000",
    "imageUrl": "https://images.emtcontent.com/offer-img/inviteearn-sm.png",
    "link": "/offersUzo",
    "categories": []
  },
  {
    "id": 31,
    "title": "Medical Air Ambulance",
    "description": "Medical air ambulance for severe patients",
    "imageUrl": "https://images.emtcontent.com/offer-img/air-ambulance-sm.png",
    "link": "/offersUzo",
    "categories": []
  },
  {
    "id": 32,
    "title": "Chat with EaseMyTrip",
    "description": "Get instant solution for your queries on WhatsApp Chat",
    "imageUrl": "https://images.emtcontent.com/offer-img/whatsapp-sm.png",
    "link": "/offersUzo",
    "categories": []
  },
  {
    "id": 33,
    "title": "EMT Wallet",
    "description": "For Your Cancellation Refunds, Cashbacks, And New Booking",
    "imageUrl": "https://images.emtcontent.com/offer-img/wallet-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTCASH",
    "categories": ["special_insrt"]
  }
];

export const filterCategories: FilterCategoryInterface[] = [
  { value: 'special_insrt', label: 'Special Offers' },
  { value: 'bnk_insrt', label: 'Bank Offers' },
  { value: 'flight_insrt', label: 'Flight Offers' },
  { value: 'hotel_insrt', label: 'Hotel Offers' },
  { value: 'bus_insrt', label: 'Bus Offers' },
  { value: 'cab_insrt', label: 'Cab Offers' },
];

export const bankOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "Amazon Pay ICICI Bank Credit Card",
    "description": "Enjoy Exclusive Travel Discounts with Amazon Pay ICICI Bank Credit Card",
    "imageUrl": "https://images.emtcontent.com/offer-img/ICICIAMZ-09-may-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "ICICIAMZ",
    "categories": ["icici_insrt", "sat_insrt"]
  },
  {
    "id": 2,
    "title": "IDFC First Bank EMI",
    "description": "Enjoy Up to INR 7,500 OFF* on Flight & Hotel Bookings with IDFC First Bank No Cost EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/idfc-29-05-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "IDFC3EMI",
    "categories": ["idfc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 3,
    "title": "HDFC PIXEL Credit Card EMI",
    "description": "Enjoy Up to INR 7,500 OFF* on Flight & Hotels Bookings with HDFC PIXEL Credit Card EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/hdfc-pixel-credit-card-sm1.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTPIXEMI",
    "categories": ["hdfc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 4,
    "title": "RBL Credit Cards EMI",
    "description": "Enjoy Big Festive Discounts on Travel Bookings with RBL Credit Card EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/rbl-bank-card-30august24-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "RBLEMI",
    "categories": ["rbl_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 5,
    "title": "Airtel Payments Bank",
    "description": "Get Flat INR 500 OFF* on Travel with Airtel Payments Bank",
    "imageUrl": "https://images.emtcontent.com/offer-img/airtel-payment-bank-11mar25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTAIRTEL",
    "categories": ["mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 6,
    "title": "ICICI Bank Debit Cards",
    "description": "Avail Exclusive Travel Discounts with ICICI Bank Debit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/icicidc-25march25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "ICICIDC",
    "categories": ["icici_insrt", "sun_insrt"]
  },
  {
    "id": 7,
    "title": "HSBC TravelOne Credit Card",
    "description": "Enjoy Amazing Discounts on Travel Bookings with HSBC TravelOne Credit Cards only",
    "imageUrl": "https://images.emtcontent.com/offer-img/hsbc-20feb25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "EMTHSBCT1",
    "categories": ["hsbc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 8,
    "title": "ICICI Bank Credit Cards",
    "description": "Save huge on Flight, Hotel & Bus Bookings using ICICI Bank Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/ICICIEMT-10-04-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "ICICIEMT",
    "categories": ["icici_insrt"]
  },
  {
    "id": 9,
    "title": "Tide Card Offer",
    "description": "Save Huge on Travel Bookings with Tide Card",
    "imageUrl": "https://images.emtcontent.com/offer-img/tide-card-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "TIDEMT",
    "categories": ["tide_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 10,
    "title": "HSBC Bank",
    "description": "Grab Up to INR 5000 OFF* on Flight & Hotels Bookings with HSBC Bank Credit Card EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/hsbc-credit-card-emi-1apr25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "HSBCEMI",
    "categories": ["hsbc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 11,
    "title": "Federal Bank EMI",
    "description": "Save Huge and Avail Discounts on Flight Ticket Bookings with Federal Bank Credit Cards EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/federal-bank-credit-card-6mar25-mob.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFEDEMI",
    "categories": ["federal_insrt"]
  },
  {
    "id": 12,
    "title": "BOB EMT Debit Cards",
    "description": "Enjoy Amazing Discounts on Flights, Hotels, Bus with BOB EMT Debit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/bob-bank-18mar25-sm3.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "EMTBOBDC",
    "categories": ["bob_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 13,
    "title": "HDFC EasyEMI",
    "description": "Enjoy Massive Discounts on Flight Bookings with HDFC Bank EasyEMI & No Cost EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/hdfc-emi-29jun24-sm3.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "HDFCEMI",
    "categories": ["hdfc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 14,
    "title": "UPI Payment Offer",
    "description": "Enjoy Huge Discounts on Travel Booking by Paying Through UPI",
    "imageUrl": "https://images.emtcontent.com/offer-img/upi-9apr24-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "UPIPAY",
    "categories": ["bus_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 15,
    "title": "Yes Bank Credit Cards",
    "description": "Enjoy Up to INR 5,000 OFF* on Travel with Yes Bank Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtyes-26feb25-sm2.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTYES",
    "categories": ["yes_insrt", "wed_insrt"]
  },
  {
    "id": 16,
    "title": "DBS Bank Debit Cards",
    "description": "Enjoy Exclusive Discounts on International Travel with DBS Bank Debit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/dbs-bank-debit-card-20mar25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTDBSINT",
    "categories": ["dbs_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 17,
    "title": "MobiKwik UPI Offer",
    "description": "Make Your Travel Bookings with MobiKwik UPI and Enjoy Cashback",
    "imageUrl": "https://images.emtcontent.com/offer-img/MobiKwik-Offer-1-may-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "",
    "categories": ["mobiKwik_insrt"]
  },
  {
    "id": 18,
    "title": "PNB EMT Credit Cards",
    "description": "Wander the world with Wonderful Deals with PNB EMT Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/pnb-emt-co-branded-credit-card-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Dec, 2026",
    "promoCode": "PNBEMT",
    "categories": ["pnb_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 19,
    "title": "BOBCARD EMI",
    "description": "Save Huge on Travel Bookings using BOBCARD EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/bobemi-26feb25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "BOBEMI",
    "categories": ["bob_insrt", "wed_insrt", "thu_insrt"]
  },
  {
    "id": 20,
    "title": "MobiKwik Deal",
    "description": "Enjoy Up to INR 200 Cashback on Travel Bookings with Mobikwik Wallet",
    "imageUrl": "https://images.emtcontent.com/offer-img/EMTMBK-27-may-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTMBK",
    "categories": ["mobiKwik_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 21,
    "title": "Save huge using DBS Bank",
    "description": "Apply for DBS Bank saving account and save huge on travel",
    "imageUrl": "https://images.emtcontent.com/offer-img/digibank-21jan25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "DBSEMT",
    "categories": ["dbs_insrt"]
  },
  {
    "id": 22,
    "title": "Standard Chartered",
    "description": "Travel discounts on the Standard Chartered - EaseMyTrip Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtscb-16july-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "EMTSCB",
    "categories": ["standard_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  }
];

export const filterBankCategories: FilterCategoryInterface[] = [
  { "value": "amex_insrt", "label": "American Express" },
  { "value": "au_insrt", "label": "AU Small Finance Bank" },
  { "value": "bob_insrt", "label": "Bank of Baroda" },
  { "value": "bob_insrt-card", "label": "BOBCARD" },
  { "value": "bhim_insrt", "label": "Bhim UPI" },
  { "value": "canara_insrt", "label": "Canara Bank" },
  { "value": "dbs_insrt", "label": "DBS Bank" },
  { "value": "federal_insrt", "label": "Federal Bank" },
  { "value": "hdfc_insrt", "label": "HDFC Bank" },
  { "value": "hsbc_insrt", "label": "HSBC Bank" },
  { "value": "icici_insrt", "label": "ICICI Bank" },
  { "value": "idbi_insrt", "label": "IDBI Bank" },
  { "value": "mobikwik_insrt", "label": "MobiKwik" },
  { "value": "onecard_insrt", "label": "One Card" },
  { "value": "pnb_insrt", "label": "Punjab National Bank" },
  { "value": "rbl_insrt", "label": "RBL Bank" },
  { "value": "sbi_insrt", "label": "SBI Bank" },
  { "value": "standard_insrt", "label": "Standard Chartered" }
]
export const filterDaywiseCategories: FilterCategoryInterface[] = [
  { value: "mon_insrt", label: "Monday" },
  { value: "tue_insrt", label: "Tuesday" },
  { value: "wed_insrt", label: "Wednesday" },
  { value: "thu_insrt", label: "Thursday" }, // Note: corrected spelling from "Thrusday"
  { value: "fri_insrt", label: "Friday" },
  { value: "sat_insrt", label: "Saturday" },
  { value: "sun_insrt", label: "Sunday" }
]

export const flightOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "New User Offer",
    "description": "Get Discount on Booking First Flight with Us",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtfirst-3jan24-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFIRST",
    "categories": ["new_user"]
  },
  {
    "id": 2,
    "title": "Anniversary sale",
    "description": "Now Celebrate the Special Season With Up to INR 10,000 OFF* on Travel Bookings",
    "imageUrl": "https://images.emtcontent.com/offer-img/17th-anniversary-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 10th Jun, 2025",
    "promoCode": "EMT17",
    "categories": ["anniversary"]
  },
  {
    "id": 3,
    "title": "AirAsia",
    "description": "Book Flights from India with AirAsia & Enjoy Up to 15% OFF*",
    "imageUrl": "https://images.emtcontent.com/offer-img/airasia-02-jun-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 8th Jun, 2025",
    "categories": ["airAsia_insrt"]
  },
  {
    "id": 4,
    "title": "Qatar Airways",
    "description": "Now Fly to Wonderful Australia from India at Fares Starting from INR 35,404*",
    "imageUrl": "https://images.emtcontent.com/offer-img/qatar-airways-30-may-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid From: 1st Jun 2025",
    "categories": ["qatarairways_insrt"]
  },
  {
    "id": 5,
    "title": "Air Astana Offer",
    "description": "Book Flights Between Delhi & Kyrgyzstan at One-Way Fares Starting from INR 17,727*",
    "imageUrl": "https://images.emtcontent.com/offer-img/air-astana-5feb25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid From: 28th May 2025",
    "categories": ["airastana"]
  },
  {
    "id": 6,
    "title": "Akasa Air",
    "description": "Book Your Domestic Flight with Akasa Air and Save Big on Fares!",
    "imageUrl": "https://images.emtcontent.com/offer-img/akasa-4feb25-sm.webp",
    "link": "/offersUzo",
    "categories": ["akasaair_insrt"]
  },
  {
    "id": 7,
    "title": "Egypt Air Offer",
    "description": "Fly from Delhi to Egypt & MS Networks with Discounted Promotional Fares of EgyptAir",
    "imageUrl": "https://images.emtcontent.com/offer-img/egyptair-4sep24-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["egyptair_insrt"]
  },
  {
    "id": 8,
    "title": "Cathay Pacific",
    "description": "Now Fly Between Hong Kong & Yiwu Seamlessly with Cathay Pacific & HK Express",
    "imageUrl": "https://images.emtcontent.com/offer-img/Cathay-22-may-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid From : 29th May, 2025",
    "categories": ["cathaypacific"]
  },
  {
    "id": 9,
    "title": "IndiGo Offer",
    "description": "Grab Exclusive Discounts on IndiGo Airlines Flight Bookings",
    "imageUrl": "https://images.emtcontent.com/offer-img/indigo-3feb25-sm.webp",
    "link": "/offersUzo",
    "categories": ["indigo_insrt"]
  },
  {
    "id": 10,
    "title": "Malaysia Airlines",
    "description": "Now Fly from Trivadrum with Malaysia Airlines at Fares Starting from INR 14,799*",
    "imageUrl": "https://images.emtcontent.com/offer-img/malaysia-airlines-08-may25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 30th Jun, 2025",
    "categories": ["malaysiaair_insrt"]
  }
]

export const filterFlightCategories: FilterCategoryInterface[] = [
  { "value": "airindia", "label": "Air India" },
  { "value": "airAsia_insrt", "label": "AirAsia" },
  { "value": "akasaair_insrt", "label": "Akasa Air" },
  { "value": "airastana", "label": "Air Astana" },
  { "value": "indiaexp", "label": "Air India Express" },
  { "value": "batikair_insrt", "label": "Batik Air" },
  { "value": "indigo_insrt", "label": "Indigo" },
  { "value": "cathaypacific", "label": "Cathay Pacific" },
  { "value": "flybig_insrt", "label": "Flybig Airlines" },
  { "value": "qatarairways_insrt", "label": "Qatar Airways" },
  { "value": "thaiairways_insrt", "label": "Thai Airways" }
]

export const hotelOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "Hotel Deals",
    "description": "Save up to 45% OFF* on Your Favorite Hotel",
    "imageUrl": "https://images.emtcontent.com/hotel-img/emtstay-12may25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTHOTELS",
    "categories": ["hotel_deals"]
  },
  {
    "id": 2,
    "title": "Anniversary sale",
    "description": "Now Celebrate the Special Season With Up to INR 10,000 OFF* on Travel Bookings",
    "imageUrl": "https://images.emtcontent.com/offer-img/17th-anniversary-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 10th Jun, 2025",
    "promoCode": "EMT17",
    "categories": ["anniversary_sale"]
  },
  {
    "id": 3,
    "title": "New User Offer",
    "description": "Register & Enjoy Great Discount on First Hotel Booking",
    "imageUrl": "https://images.emtcontent.com/hotel-img/hotel-new-6feb25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFIRST",
    "categories": ["new_user", "hotel"]
  },
  {
    "id": 4,
    "title": "Book With ₹0 Payment",
    "description": "Book Your Favorite Hotels INR 0 with EaseMyTrip",
    "imageUrl": "/images/bookNow.png",
    "link": "/offersUzo",
    "bookingPeriod": "Book Now",
    "categories": ["zero_payment"]
  },
  {
    "id": 5,
    "title": "Lords Hotels & Resorts",
    "description": "Elevate Your Stay with Up to 35% Discount* on Lords Hotels & Resorts",
    "imageUrl": "https://images.emtcontent.com/hotel-img/lords-hotels-resorts-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 6,
    "title": "Treat Group of Hotels",
    "description": "Enjoy Up to 30% OFF* on Treat Group of Hotels",
    "imageUrl": "https://images.emtcontent.com/hotel-img/treat-group-htels-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 7,
    "title": "DLS Hotels",
    "description": "Get Up to 55% OFF* on Booking DLS Hotels & Resorts",
    "imageUrl": "https://images.emtcontent.com/hotel-img/dls-hotels-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st July 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 8,
    "title": "Hotel Sonar Bangla",
    "description": "Grab Up to 35% OFF* & Experience Rich Hospitality of Bengal",
    "imageUrl": "https://images.emtcontent.com/hotel-img/Hotel-Sonar-Bangla-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 9,
    "title": "Suba Group of Hotels",
    "description": "Book Suba Group of Hotels & Enjoy Up to 35% OFF*",
    "imageUrl": "https://images.emtcontent.com/hotel-img/Suba-Group-Hotels-27-03-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 10,
    "title": "Zone Hotels",
    "description": "Grab Incredible Deals on Zone By The Park Hotels",
    "imageUrl": "https://images.emtcontent.com/hotel-img/zone-the-park-04-04-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 11,
    "title": "Amritara Hotels",
    "description": "Unlock Up to 40% OFF* on Booking Amritara Hotels & Resorts with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/hotel-img/amritara-hotels-27feb25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 12,
    "title": "The Byke Hotels",
    "description": "Enjoy Massive Discount of Up to 30%* on The Byke Hotels & Resorts",
    "imageUrl": "https://images.emtcontent.com/hotel-img/the-byke-hotels-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 13,
    "title": "The Hosteller Hotels",
    "description": "Make Your Stay An Affordable Getaway With Up to 45% OFF* on the Hosteller",
    "imageUrl": "https://images.emtcontent.com/hotel-img/the-hosteller-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 14,
    "title": "Spree Hotels",
    "description": "Grab Amazing Offer On Hotel Like Never Before",
    "imageUrl": "https://images.emtcontent.com/hotel-img/Spree-31-mar-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "SPREE",
    "categories": ["hotel_chains"]
  },
  {
    "id": 15,
    "title": "Sterling Hotels",
    "description": "Book Sterling Hotels & Grab Unbeatable Discounts with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/hotel-img/sterling-hotels-17June24-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 16,
    "title": "Windflower Hotels",
    "description": "Plan Delightful Stays With Up to 40% OFF* on Windflower Hotel Bookings",
    "imageUrl": "https://images.emtcontent.com/hotel-img/windflower-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Sep, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 17,
    "title": "The Fern Hotels",
    "description": "Enjoy Massive Savings with Up to 30%* Discount on The Fern Hotels & Resorts",
    "imageUrl": "https://images.emtcontent.com/hotel-img/fern-hotels-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 18,
    "title": "Treehouse Hotels",
    "description": "Enjoy Special discount of Up to 40%* on Treehouse Hotels",
    "imageUrl": "https://images.emtcontent.com/hotel-img/tree-house-group-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 19,
    "title": "VITS Hotels",
    "description": "Enjoy Massive Discount of Up to 20%* on Booking VITS Hotels",
    "imageUrl": "https://images.emtcontent.com/hotel-img/vits-hotels-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 20,
    "title": "WelcomHeritage Hotel",
    "description": "Get Special Discount of Up to 35%* on WelcomHeritage Hotel Bookings",
    "imageUrl": "https://images.emtcontent.com/hotel-img/welcom-heritage-20may24-sm2.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "categories": ["hotel_chains"]
  },
  {
    "id": 21,
    "title": "Deal of the Day",
    "description": "Enjoy Different Deals Each Day with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/easeday14apr23-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EASEDAY",
    "categories": ["daily_deal"]
  },
  {
    "id": 22,
    "title": "Flyers Deal",
    "description": "Flat 20% off on Hotel Booking for Flyers",
    "imageUrl": "https://images.emtcontent.com/hotel-img/hotel-deal-for-flyers-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFLY",
    "categories": ["flyers_deal"]
  },
  {
    "id": 23,
    "title": "Zero cancellation fees on Hotel Bookings",
    "description": "Enjoy No Cancellation Fees on Domestic Hotel Bookings",
    "imageUrl": "https://images.emtcontent.com/hotel-img/zc-on-hotels-17jun19-sm.png",
    "link": "/offersUzo",
    "categories": ["zero_cancellation"]
  },
  {
    "id": 24,
    "title": "Couple Friendly Hotels",
    "description": "Stay in Couple Friendly Hotels to have unforgettable memories",
    "imageUrl": "https://images.emtcontent.com/hotel-img/hotel-couple-sm2.png",
    "link": "/offersUzo",
    "categories": ["couple_friendly"]
  },
  {
    "id": 25,
    "title": "Hotel Offer",
    "description": "Last Minute Hotel Booking with up to 30% Discount",
    "imageUrl": "https://images.emtcontent.com/hotel-img/emt30-7aug24-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMT30",
    "categories": ["last_minute"]
  },
  {
    "id": 26,
    "title": "Hotel Offer",
    "description": "Upto 20% Discount on Selected Hotel Booking",
    "imageUrl": "https://images.emtcontent.com/hotel-img/grab20-28apr-sm2.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "GRAB20",
    "categories": ["flash_sale"]
  }
]

export const filterHotelCategories: FilterCategoryInterface[] = []

export const busOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "New User Offer",
    "description": "Grab Discount Up to Rs. 250 on First Bus Booking with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/bus-img/bus-new-user-27dec24-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFIRST",
    "categories": ["bus", "new_user"]
  },
  {
    "id": 2,
    "title": "Bus Deal",
    "description": "Bus Tickets to Different Destinations At A Discount up to Rs. 500",
    "imageUrl": "https://images.emtcontent.com/bus-img/emtbus-7jan25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTBUS",
    "categories": ["bus", "discount"]
  },
  {
    "id": 3,
    "title": "Zing Bus Offer",
    "description": "Be Ready for the Road Trip, Get Flat 12.5% OFF* on Bus Tickets",
    "imageUrl": "https://images.emtcontent.com/bus-img/zingbus-23aug24-sm2.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTZING",
    "categories": ["bus", "zingbus"]
  },
  {
    "id": 4,
    "title": "Deal of the Day",
    "description": "Enjoy Different Deals Each Day with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/easeday14apr23-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EASEDAY",
    "categories": ["bus", "daily_deal"]
  },
  {
    "id": 5,
    "title": "VRL Travel Offer",
    "description": "Enjoy 12% Discount & Up to Rs.100 on VRL Travels Bus Tickets",
    "imageUrl": "https://images.emtcontent.com/bus-img/vrl-bus-29aug24-sm2.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTVRL",
    "categories": ["bus", "vrl_travel"]
  },
  {
    "id": 6,
    "title": "Bus Offer",
    "description": "Book Bus Tickets for Your Preferred Route at 10% Discount",
    "imageUrl": "https://images.emtcontent.com/bus-img/bus10-7aug24-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "BUS10",
    "categories": ["bus", "discount"]
  }
]

export const filterBusCategories: FilterCategoryInterface[] = []

export const cabOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "Deal of the Day",
    "description": "Enjoy Different Deals Each Day with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/easeday14apr23-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EASEDAY",
    "categories": ["cab", "daily_deal"]
  },
  {
    "id": 2,
    "title": "Hourly rental cab",
    "description": "Get up to Rs. 900 OFF on Cab Bookings with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/cab-img/rental-cabs-7aug24-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTHOURLY",
    "categories": ["cab", "rental", "discount"]
  },
  {
    "id": 3,
    "title": "Cab Offer",
    "description": "Get Up to 10% Off* on Airport transfer Hourly rental, One Way & Round Trip Cab Book",
    "imageUrl": "https://images.emtcontent.com/cab-img/cab-deal-sm2.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTCAB",
    "categories": ["cab", "discount"]
  },
  {
    "id": 4,
    "title": "Partial Payment",
    "description": "Enjoy Cab Booking by Paying 15% and Rest to Driver",
    "imageUrl": "https://images.emtcontent.com/offer-img/cab-partial-payment-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "",
    "promoCode": "",
    "categories": ["cab", "payment"]
  }
]

export const filterCabCategories: FilterCategoryInterface[] = []

export const hotOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "Hero Fincorp",
    "description": "Get an Instant Personal Loan of Up to Rs. 5,00,000",
    "imageUrl": "https://images.emtcontent.com/offer-img/hero-25-05-sm21.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Avail Now",
    "promoCode": "",
    "categories": ["finance", "loan"]
  },
  {
    "id": 2,
    "title": "TaxManager",
    "description": "Get Discounts on Expert-Assisted Tax Filing",
    "imageUrl": "https://images.emtcontent.com/offer-img/taxmanager-23-05-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Mar, 2026",
    "promoCode": "",
    "categories": ["finance", "tax"]
  },
  {
    "id": 3,
    "title": "Aero Essentials",
    "description": "Experience the Joy of Stress-Free Travel with Aero Essentials!",
    "imageUrl": "https://images.emtcontent.com/offer-img/Aero-essentials-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "",
    "categories": ["travel", "essentials"]
  },
  {
    "id": 4,
    "title": "Outdoor Goats",
    "description": "Get Travel Ready with Outdoor Goats!",
    "imageUrl": "https://images.emtcontent.com/offer-img/OG-08-may-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st July, 2025",
    "promoCode": "",
    "categories": ["travel", "gear"]
  },
  {
    "id": 5,
    "title": "One Percent Club",
    "description": "Address Your Finances with the One Percent Club!",
    "imageUrl": "https://images.emtcontent.com/offer-img/one-percent-offer-15-04-25-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "",
    "categories": ["finance", "investment"]
  },
  {
    "id": 6,
    "title": "abCoffee",
    "description": "abCoffee Welcomes You with a Free Cappuccino",
    "imageUrl": "https://images.emtcontent.com/offer-img/coffee-post-11-04-25-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "",
    "categories": ["food", "beverage"]
  },
  {
    "id": 7,
    "title": "McDelivery",
    "description": "A Korean Meal Could Be Your Ticket to Wanderlust!",
    "imageUrl": "https://images.emtcontent.com/offer-img/mcdelivery22-03-25-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "KOREAN100",
    "categories": ["food", "delivery"]
  },
  {
    "id": 8,
    "title": "FirstCry Offer",
    "description": "Bring Joy to Your Baby's Giggle with FirstCry",
    "imageUrl": "https://images.emtcontent.com/offer-img/first-cry-07march25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st March, 2026",
    "promoCode": "FCEMT40",
    "categories": ["shopping", "baby"]
  },
  {
    "id": 9,
    "title": "Salty Offer",
    "description": "Glam Up with Timeless Accessories from Salty!",
    "imageUrl": "https://images.emtcontent.com/offer-img/salty-27feb27-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st July, 2025",
    "promoCode": "EMT333",
    "categories": ["fashion", "accessories"]
  },
  {
    "id": 10,
    "title": "Isak Fragrances Offer",
    "description": "Turn Heads, Capture Hearts with Isak Fragrances",
    "imageUrl": "https://images.emtcontent.com/offer-img/isak-fragrances-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTXISAK",
    "categories": ["beauty", "fragrance"]
  },
  {
    "id": 11,
    "title": "M&S SPARKS Offer",
    "description": "Take-Off with FLAT INR 500 OFF* on Flight Bookings",
    "imageUrl": "https://images.emtcontent.com/offer-img/m-and-s-deal-sm2.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Book Now",
    "promoCode": "",
    "categories": ["travel", "fashion"]
  },
  {
    "id": 12,
    "title": "Kedia Capital Offer",
    "description": "Enjoy Exclusive Benefits on your Demat Account",
    "imageUrl": "https://images.emtcontent.com/offer-img/kedia-19jul24-sm.png",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st July, 2025",
    "promoCode": "EMT",
    "categories": ["finance", "investment"]
  },
  {
    "id": 13,
    "title": "EatSure Offer",
    "description": "Devour the Flavours You Love with EatSure",
    "imageUrl": "https://images.emtcontent.com/offer-img/eat-sure-24jan25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "EMTES120",
    "categories": ["food", "delivery"]
  },
  {
    "id": 14,
    "title": "Commbitz x True dtac Offer",
    "description": "Get Your Free Sim Card for Your Thailand Trip",
    "imageUrl": "https://images.emtcontent.com/offer-img/commbitz-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Book Now",
    "promoCode": "",
    "categories": ["travel", "sim"]
  },
  {
    "id": 15,
    "title": "Acko Technology",
    "description": "Book your new car with Acko Drive today at unbeatable discounts",
    "imageUrl": "https://images.emtcontent.com/offer-img/acko-sm5.png",
    "link": "/offersUzo",
    "bookingPeriod": "",
    "promoCode": "",
    "categories": ["automobile", "finance"]
  }
]

export const filterHotCategories: FilterCategoryInterface[] = []

export const expiredOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "AirAsia Flight",
    "description": "Book Flights to Thailand with AirAsia & Grab Up to 20% OFF*",
    "imageUrl": "https://images.emtcontent.com/offer-img/airasia-flight-route-1feb25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 1st Jun 2025",
    "promoCode": "",
    "categories": ["airAsia_insrt"]
  },
  {
    "id": 2,
    "title": "Yolo Bus",
    "description": "Take the Savings Route with FLAT INR 100 Discount on Yolo Bus",
    "imageUrl": "https://images.emtcontent.com/bus-img/yolo-bus-31may25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Till 31st May, 2025",
    "promoCode": "EMT100",
    "categories": ["bus"]
  },
  {
    "id": 3,
    "title": "Starbucks Offer",
    "description": "Slurp the Sun Away With Special Starbucks Offer",
    "imageUrl": "https://images.emtcontent.com/offer-img/starbucks06-05-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 31st May, 2025",
    "promoCode": "",
    "categories": ["food"]
  },
  {
    "id": 4,
    "title": "Fab Hotels",
    "description": "Kickstart Your Dream Getaway With Up to 55% OFF* on Fab Hotels",
    "imageUrl": "https://images.emtcontent.com/hotel-img/FAB-hotel-29-04-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 30th May 2025",
    "promoCode": "",
    "categories": ["hotel"]
  },
  {
    "id": 5,
    "title": "MP Tourism Hotels",
    "description": "Experience the Best of Madhya Pradesh with Best Discounts on MP Tourism Hotels",
    "imageUrl": "https://images.emtcontent.com/hotel-img/mp-tourism-hotel-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 31st May, 2025",
    "promoCode": "",
    "categories": ["hotel"]
  },
  {
    "id": 6,
    "title": "Ramee Hotels & Resorts",
    "description": "Grab Up to 35% OFF* on Booking Ramee Group of Hotels",
    "imageUrl": "https://images.emtcontent.com/hotel-img/ramee-group-hotels-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till :31st May 2025",
    "promoCode": "",
    "categories": ["hotel"]
  },
  {
    "id": 7,
    "title": "Indigo Flight Deal",
    "description": "Get Up to 10% OFF* on Domestic & International Flights with IndiGo Airlines",
    "imageUrl": "https://images.emtcontent.com/offer-img/Indigo-29-04-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 30th May 2025",
    "promoCode": "",
    "categories": ["indigo_insrt"]
  },
  {
    "id": 8,
    "title": "Egypt Air",
    "description": "Enjoy Up to 50% OFF* on Flights Between Egypt & Mumbai",
    "imageUrl": "https://images.emtcontent.com/offer-img/Egyptair-22-may-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid Till : 30th May, 2025",
    "promoCode": "",
    "categories": ["flight"]
  },
  {
    "id": 9,
    "title": "Royal Jordanian",
    "description": "Enjoy Flights from India to UK & Europe at Fares Starting from INR 37,455*",
    "imageUrl": "https://images.emtcontent.com/offer-img/royal-jordanian-may-25-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till : 28th May, 2025",
    "promoCode": "",
    "categories": ["flight"]
  },
  {
    "id": 10,
    "title": "Gulf Air Offer",
    "description": "Book Flights from India with Gulf Air & Enjoy Promotional Fares",
    "imageUrl": "https://images.emtcontent.com/offer-img/GulfAirlines-17-may-sm.webp",
    "link": "/offersUzo",
    "bookingPeriod": "Valid till: 28th May, 2025",
    "promoCode": "",
    "categories": ["gulfair_insrt"]
  }
]

export const filterExpiredCategories: FilterCategoryInterface[] = []
