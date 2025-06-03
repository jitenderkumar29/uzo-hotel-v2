import { OfferInterface } from '@/interfaces';
import { FilterCategoryInterface } from '@/interfaces';

export const mockOffers: OfferInterface[] = [
  {
    "id": 1,
    "title": "New User Offer",
    "description": "Register and Get Discount on First Bookings with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtfirst-3jan24-sm.webp",
    "link": "https://www.easemytrip.com/offers/new-user.html?CouponCode=emtfirst",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFIRST",
    "categories": ["special_insrt", "flight_insrt"]
  },
  {
    "id": 2,
    "title": "Anniversary sale",
    "description": "Now Celebrate the Special Season With Up to INR 10,000 OFF* on Travel Bookings",
    "imageUrl": "https://images.emtcontent.com/offer-img/17th-anniversary-sm.webp",
    "link": "https://www.easemytrip.com/deals/anniversary-sale/",
    "bookingPeriod": "Valid till: 10th Jun, 2025",
    "promoCode": "EMT17",
    "categories": ["special_insrt"]
  },
  {
    "id": 3,
    "title": "Book With ₹0 Payment",
    "description": "Book Your Favorite Hotels INR 0 with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/bookwith-25-04-25-sm.webp",
    "link": "https://www.easemytrip.com/offers/book-now-pay-later.html",
    "categories": ["hotel_insrt"]
  },
  {
    "id": 4,
    "title": "Pilgrimage Deal",
    "description": "Explore Holy Sites with Budget-Friendly Pilgrimage Packages!",
    "imageUrl": "https://images.emtcontent.com/offer-img/EMTDIVINE21-march-25-sm.webp",
    "link": "https://www.easemytrip.com/offers/pilgrimage.html",
    "promoCode": "EMTDIVINE",
    "categories": ["special_insrt"]
  },
  {
    "id": 5,
    "title": "Flash Deal",
    "description": "Summer Flash Deal on Travel Bookings from 9 PM - 12 AM",
    "imageUrl": "https://images.emtcontent.com/offer-img/flash-deal-17jan24-sm.webp",
    "link": "https://www.easemytrip.com/offers/flash-deals.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "FLASHDEALS",
    "categories": ["special_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 6,
    "title": "International Flight Offer",
    "description": "Book International Flights with EaseMyTrip & Get a Free Universal Travel Adapter",
    "imageUrl": "https://images.emtcontent.com/offer-img/international-flights-ticket-25feb25-sm.webp",
    "link": "https://www.easemytrip.com/offers/international-flights-ticket.html",
    "promoCode": "EMTPOWER",
    "categories": ["flight_insrt"]
  },
  {
    "id": 7,
    "title": "Win Assured Vouchers",
    "description": "Travel with EaseMyTrip to Win Assured Vouchers Worth INR 4000",
    "imageUrl": "https://images.emtcontent.com/offer-img/delight-3feb23-sm3.png",
    "link": "https://www.easemytrip.com/offers/delight.html",
    "bookingPeriod": "Till 31st Jul, 2025",
    "promoCode": "DELIGHT",
    "categories": ["special_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 8,
    "title": "Deal of the Day",
    "description": "Enjoy Different Deals Each Day with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/easeday14apr23-sm.png",
    "link": "https://www.easemytrip.com/offers/easeday.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EASEDAY",
    "categories": ["flight_insrt", "hotel_insrt", "bus_insrt", "cab_insrt", "special_insrt"]
  },
  {
    "id": 9,
    "title": "EaseMyTrip Co-Branded Cards",
    "description": "Apply for Co-Branded Cards Now & Unlock special benefits and privileges",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtcards-sm.webp",
    "link": "https://www.emtcards.in/",
    "categories": []
  },
  {
    "id": 10,
    "title": "IIFA Awards",
    "description": "Enjoy the Best of IIFA With Exclusive Travel Discounts",
    "imageUrl": "https://images.emtcontent.com/offer-img/iffa25-sm.webp",
    "link": "https://www.easemytrip.com/offers/iifa-awards.html",
    "promoCode": "EMTIIFA",
    "categories": []
  },
  {
    "id": 11,
    "title": "Duty Free Products",
    "description": "Shop for Duty Free Products on Selective Airports with Extra Discounts!",
    "imageUrl": "https://images.emtcontent.com/offer-img/airport-duty-free-sm.png",
    "link": "https://easemytrip.adanione.com/duty-free/",
    "categories": ["flight_insrt"]
  },
  {
    "id": 12,
    "title": "Visa for UAE",
    "description": "Submit your details now and get your UAE visa online easily",
    "imageUrl": "https://images.emtcontent.com/offer-img/uae-visa-hp.webp",
    "link": "https://www.easemytrip.com/visa-info",
    "categories": ["flight_insrt"]
  },
  {
    "id": 13,
    "title": "Flybig Sale",
    "description": "Book Your Flybig Flight Tickets with EaseMyTrip & Enjoy Rs.500 off",
    "imageUrl": "https://images.emtcontent.com/offer-img/flybig-airlines-sm.png",
    "link": "https://www.easemytrip.com/offers/flybig-airlines.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTBIG",
    "categories": ["flight_insrt"]
  },
  {
    "id": 14,
    "title": "Free Cab offer",
    "description": "Enjoy Free Cab on Flight Bookings with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/free-cab-8jan24-sm.webp",
    "link": "https://www.easemytrip.com/offers/free-cab.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "FREECAB",
    "categories": ["flight_insrt", "cab_insrt"]
  },
  {
    "id": 15,
    "title": "BOB EMT Debit Cards",
    "description": "Enjoy Amazing Discounts on Flights, Hotels, Bus with BOB EMT Debit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/bob-bank-18mar25-sm3.webp",
    "link": "https://www.easemytrip.com/offers/bob-bank.html",
    "bookingPeriod": "Valid till : 31st Dec, 2025",
    "promoCode": "EMTBOBDC",
    "categories": ["bob_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 16,
    "title": "PNB EMT Credit Cards",
    "description": "Wander the world with Wonderful Deals with PNB EMT Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/pnb-emt-co-branded-credit-card-sm.png",
    "link": "https://www.easemytrip.com/offers/pnb-emt-co-branded-credit-card.html",
    "bookingPeriod": "Valid till : 31st Dec, 2026",
    "promoCode": "PNBEMT",
    "categories": ["bnk_insrt"]
  },
  {
    "id": 17,
    "title": "Standard Chartered",
    "description": "Travel discounts on the Standard Chartered - EaseMyTrip Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtscb-16july-sm.png",
    "link": "https://www.easemytrip.com/offers/standard-charted-bank.html",
    "promoCode": "EMTSCB",
    "categories": ["bnk_insrt"]
  },
  {
    "id": 18,
    "title": "Flight Deal",
    "description": "Get Discount up to 35% on Booking Flight Tickets",
    "imageUrl": "https://images.emtcontent.com/offer-img/easefly-4oct22-sm2.png",
    "link": "https://www.easemytrip.com/offers/easefly.html?CouponCode=easefly",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EASEFLY",
    "categories": ["flight_insrt"]
  },
  {
    "id": 19,
    "title": "Special Flight Deal",
    "description": "Book your Travel with Us & Enjoy 7% off up to Rs.750*",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtnow-27jun22-sm.webp",
    "link": "https://www.easemytrip.com/offers/domestic-flight-sale.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "FLYNOW",
    "categories": ["flight_insrt"]
  },
  {
    "id": 20,
    "title": "UPI Payment Offer",
    "description": "Enjoy Huge Discounts on Travel Booking by Paying Through UPI",
    "imageUrl": "https://images.emtcontent.com/offer-img/upi-9apr24-sm.webp",
    "link": "https://www.easemytrip.com/offers/upi-payment.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "UPIPAY",
    "categories": ["bus_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 21,
    "title": "Special Discounts",
    "description": "Get Irresistible Discounts on Flight, Hotel and Bus Bookings with EaseMyTrip",
    "imageUrl": "https://images.emtcontent.com/offer-img/tripemt-sm.png",
    "link": "https://www.easemytrip.com/offers/tripemt.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "TRIPEMT",
    "categories": ["bus_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 22,
    "title": "Hotel Offer",
    "description": "Upto 20% Discount on Selected Hotel Booking",
    "imageUrl": "https://images.emtcontent.com/hotel-img/grab20-28apr-sm2.png",
    "link": "https://www.easemytrip.com/offers/flash-sale-on-hotel.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "GRAB20",
    "categories": ["hotel_insrt"]
  },
  {
    "id": 23,
    "title": "Flyers Deal",
    "description": "Flat 20% off on Hotel Booking for Flyers",
    "imageUrl": "https://images.emtcontent.com/hotel-img/hotel-deal-for-flyers-sm.png",
    "link": "https://www.easemytrip.com/offers/hotel-deal-for-flyers.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFLY",
    "categories": ["hotel_insrt"]
  },
  {
    "id": 24,
    "title": "New User Offer",
    "description": "Register & Enjoy Great Discount on First Hotel Booking",
    "imageUrl": "https://images.emtcontent.com/hotel-img/hotel-new-8jan25-sm.webp",
    "link": "https://www.easemytrip.com/offers/hotel-new-user.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFIRST",
    "categories": ["hotel_insrt"]
  },
  {
    "id": 25,
    "title": "Bus Deal",
    "description": "Bus Tickets to Different Destinations At A Discount up to Rs. 500",
    "imageUrl": "https://images.emtcontent.com/bus-img/emtbus-7jan25-sm.webp",
    "link": "https://www.easemytrip.com/offers/emt-bus.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTBUS",
    "categories": ["bus_insrt"]
  },
  {
    "id": 26,
    "title": "Bus Offer",
    "description": "Book Bus Tickets for Your Preferred Route at 10% Discount",
    "imageUrl": "https://images.emtcontent.com/bus-img/bus10-7aug24-sm.png",
    "link": "https://www.easemytrip.com/offers/bus10.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "BUS10",
    "categories": ["bus_insrt"]
  },
  {
    "id": 27,
    "title": "Cab Offer",
    "description": "Get Up to INR 7% Off* on Airport transfer Hourly rental, One Way & Round Trip Cab Book",
    "imageUrl": "https://images.emtcontent.com/cab-img/cab-deal-sm.png",
    "link": "https://www.easemytrip.com/offers/cab-deal.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTCAB",
    "categories": ["cab_insrt"]
  },
  {
    "id": 28,
    "title": "Domestic Flight Sale",
    "description": "Book Your Domestic Flight Tickets with EaseMyTrip & Enjoy Rs.305 off",
    "imageUrl": "https://images.emtcontent.com/offer-img/domestic-flight-ticket-sm.png",
    "link": "https://www.easemytrip.com/offers/domestic-flight-ticket.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "FLYBIG",
    "categories": ["flight_insrt"]
  },
  {
    "id": 29,
    "title": "Free Flight Cancellation Coverage",
    "description": "Get complimentary flight cancellation insurance on every flight booking",
    "imageUrl": "https://images.emtcontent.com/offer-img/toffee-insurance-sm.png",
    "link": "https://www.easemytrip.com/offers/free-flight-cancellation.html",
    "categories": ["flight_insrt"]
  },
  {
    "id": 30,
    "title": "Invite & Earn",
    "description": "Invite Your Friends & Earn Up to Rs. 2000",
    "imageUrl": "https://images.emtcontent.com/offer-img/inviteearn-sm.png",
    "link": "https://www.easemytrip.com/refer",
    "categories": []
  },
  {
    "id": 31,
    "title": "Medical Air Ambulance",
    "description": "Medical air ambulance for severe patients",
    "imageUrl": "https://images.emtcontent.com/offer-img/air-ambulance-sm.png",
    "link": "https://www.easemytrip.com/air-ambulance.html",
    "categories": []
  },
  {
    "id": 32,
    "title": "Chat with EaseMyTrip",
    "description": "Get instant solution for your queries on WhatsApp Chat",
    "imageUrl": "https://images.emtcontent.com/offer-img/whatsapp-sm.png",
    "link": "https://www.easemytrip.com/whtsapp.html",
    "categories": []
  },
  {
    "id": 33,
    "title": "EMT Wallet",
    "description": "For Your Cancellation Refunds, Cashbacks, And New Booking",
    "imageUrl": "https://images.emtcontent.com/offer-img/wallet-sm.png",
    "link": "https://www.easemytrip.com/emt-wallet/offer.html",
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
    "link": "https://www.easemytrip.com/offers/icici-bank.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "ICICIAMZ",
    "categories": ["icici_insrt", "sat_insrt"]
  },
  {
    "id": 2,
    "title": "IDFC First Bank EMI",
    "description": "Enjoy Up to INR 7,500 OFF* on Flight & Hotel Bookings with IDFC First Bank No Cost EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/idfc-29-05-sm.webp",
    "link": "https://www.easemytrip.com/offers/idfc-bank-emi.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "IDFC3EMI",
    "categories": ["idfc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 3,
    "title": "HDFC PIXEL Credit Card EMI",
    "description": "Enjoy Up to INR 7,500 OFF* on Flight & Hotels Bookings with HDFC PIXEL Credit Card EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/hdfc-pixel-credit-card-sm1.webp",
    "link": "https://www.easemytrip.com/offers/hdfc-pixel-credit-card.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTPIXEMI",
    "categories": ["hdfc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 4,
    "title": "RBL Credit Cards EMI",
    "description": "Enjoy Big Festive Discounts on Travel Bookings with RBL Credit Card EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/rbl-bank-card-30august24-sm.png",
    "link": "https://www.easemytrip.com/offers/rbl-bank-card.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "RBLEMI",
    "categories": ["rbl_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 5,
    "title": "Airtel Payments Bank",
    "description": "Get Flat INR 500 OFF* on Travel with Airtel Payments Bank",
    "imageUrl": "https://images.emtcontent.com/offer-img/airtel-payment-bank-11mar25-sm.webp",
    "link": "https://www.easemytrip.com/offers/airtel-payment-bank.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTAIRTEL",
    "categories": ["mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 6,
    "title": "ICICI Bank Debit Cards",
    "description": "Avail Exclusive Travel Discounts with ICICI Bank Debit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/icicidc-25march25-sm.webp",
    "link": "https://www.easemytrip.com/offers/icici-bank-debit-card.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "ICICIDC",
    "categories": ["icici_insrt", "sun_insrt"]
  },
  {
    "id": 7,
    "title": "HSBC TravelOne Credit Card",
    "description": "Enjoy Amazing Discounts on Travel Bookings with HSBC TravelOne Credit Cards only",
    "imageUrl": "https://images.emtcontent.com/offer-img/hsbc-20feb25-sm.webp",
    "link": "https://www.easemytrip.com/offers/hsbc-bank-card.html",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "EMTHSBCT1",
    "categories": ["hsbc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 8,
    "title": "ICICI Bank Credit Cards",
    "description": "Save huge on Flight, Hotel & Bus Bookings using ICICI Bank Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/ICICIEMT-10-04-25-sm.webp",
    "link": "https://www.easemytrip.com/offers/icici-bank-credit-card.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "ICICIEMT",
    "categories": ["icici_insrt"]
  },
  {
    "id": 9,
    "title": "Tide Card Offer",
    "description": "Save Huge on Travel Bookings with Tide Card",
    "imageUrl": "https://images.emtcontent.com/offer-img/tide-card-sm.webp",
    "link": "https://www.easemytrip.com/offers/tide-card.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "TIDEMT",
    "categories": ["tide_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 10,
    "title": "HSBC Bank",
    "description": "Grab Up to INR 5000 OFF* on Flight & Hotels Bookings with HSBC Bank Credit Card EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/hsbc-credit-card-emi-1apr25-sm.webp",
    "link": "https://www.easemytrip.com/offers/hsbc-credit-card-emi.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "HSBCEMI",
    "categories": ["hsbc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 11,
    "title": "Federal Bank EMI",
    "description": "Save Huge and Avail Discounts on Flight Ticket Bookings with Federal Bank Credit Cards EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/federal-bank-credit-card-6mar25-mob.webp",
    "link": "https://www.easemytrip.com/offers/federal-bank-credit-card.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTFEDEMI",
    "categories": ["federal_insrt"]
  },
  {
    "id": 12,
    "title": "BOB EMT Debit Cards",
    "description": "Enjoy Amazing Discounts on Flights, Hotels, Bus with BOB EMT Debit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/bob-bank-18mar25-sm3.webp",
    "link": "https://www.easemytrip.com/offers/bob-bank.html",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "EMTBOBDC",
    "categories": ["bob_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 13,
    "title": "HDFC EasyEMI",
    "description": "Enjoy Massive Discounts on Flight Bookings with HDFC Bank EasyEMI & No Cost EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/hdfc-emi-29jun24-sm3.webp",
    "link": "https://www.easemytrip.com/offers/hdfc-bank-easy-emi.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "HDFCEMI",
    "categories": ["hdfc_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 14,
    "title": "UPI Payment Offer",
    "description": "Enjoy Huge Discounts on Travel Booking by Paying Through UPI",
    "imageUrl": "https://images.emtcontent.com/offer-img/upi-9apr24-sm.webp",
    "link": "https://www.easemytrip.com/offers/upi-payment.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "UPIPAY",
    "categories": ["bus_insrt", "flight_insrt", "hotel_insrt"]
  },
  {
    "id": 15,
    "title": "Yes Bank Credit Cards",
    "description": "Enjoy Up to INR 5,000 OFF* on Travel with Yes Bank Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtyes-26feb25-sm2.webp",
    "link": "https://www.easemytrip.com/offers/yes-bank-credit-card.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTYES",
    "categories": ["yes_insrt", "wed_insrt"]
  },
  {
    "id": 16,
    "title": "DBS Bank Debit Cards",
    "description": "Enjoy Exclusive Discounts on International Travel with DBS Bank Debit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/dbs-bank-debit-card-20mar25-sm.webp",
    "link": "https://www.easemytrip.com/offers/dbs-bank-debit-card.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTDBSINT",
    "categories": ["dbs_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 17,
    "title": "MobiKwik UPI Offer",
    "description": "Make Your Travel Bookings with MobiKwik UPI and Enjoy Cashback",
    "imageUrl": "https://images.emtcontent.com/offer-img/MobiKwik-Offer-1-may-25-sm.webp",
    "link": "https://www.easemytrip.com/offers/mobikwik.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "",
    "categories": ["mobiKwik_insrt"]
  },
  {
    "id": 18,
    "title": "PNB EMT Credit Cards",
    "description": "Wander the world with Wonderful Deals with PNB EMT Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/pnb-emt-co-branded-credit-card-sm.png",
    "link": "https://www.easemytrip.com/offers/pnb-emt-co-branded-credit-card.html",
    "bookingPeriod": "Valid till: 31st Dec, 2026",
    "promoCode": "PNBEMT",
    "categories": ["pnb_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 19,
    "title": "BOBCARD EMI",
    "description": "Save Huge on Travel Bookings using BOBCARD EMI",
    "imageUrl": "https://images.emtcontent.com/offer-img/bobemi-26feb25-sm.webp",
    "link": "https://www.easemytrip.com/offers/bank-of-baroda.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "BOBEMI",
    "categories": ["bob_insrt", "wed_insrt", "thu_insrt"]
  },
  {
    "id": 20,
    "title": "MobiKwik Deal",
    "description": "Enjoy Up to INR 200 Cashback on Travel Bookings with Mobikwik Wallet",
    "imageUrl": "https://images.emtcontent.com/offer-img/EMTMBK-27-may-25-sm.webp",
    "link": "https://www.easemytrip.com/offers/mobikwik-deal.html",
    "bookingPeriod": "Valid till: 30th Jun, 2025",
    "promoCode": "EMTMBK",
    "categories": ["mobiKwik_insrt", "mon_insrt", "tue_insrt", "wed_insrt", "thu_insrt", "fri_insrt", "sat_insrt", "sun_insrt"]
  },
  {
    "id": 21,
    "title": "Save huge using DBS Bank",
    "description": "Apply for DBS Bank saving account and save huge on travel",
    "imageUrl": "https://images.emtcontent.com/offer-img/digibank-21jan25-sm.webp",
    "link": "https://www.easemytrip.com/offers/digibank.html",
    "bookingPeriod": "Valid till: 31st Dec, 2025",
    "promoCode": "DBSEMT",
    "categories": ["dbs_insrt"]
  },
  {
    "id": 22,
    "title": "Standard Chartered",
    "description": "Travel discounts on the Standard Chartered - EaseMyTrip Credit Cards",
    "imageUrl": "https://images.emtcontent.com/offer-img/emtscb-16july-sm.png",
    "link": "https://www.easemytrip.com/offers/standard-charted-bank.html",
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

export const flightOffers: OfferInterface[] = [
  {
      "id": 1,
      "title": "New User Offer",
      "description": "Get Discount on Booking First Flight with Us",
      "imageUrl": "https://images.emtcontent.com/offer-img/emtfirst-3jan24-sm.webp",
      "link": "https://www.easemytrip.com/offers/new-user.html?CouponCode=emtfirst",
      "bookingPeriod": "Valid till: 30th Jun, 2025",
      "promoCode": "EMTFIRST",
      "categories": ["new_user"]
    },
    {
      "id": 2,
      "title": "Anniversary sale",
      "description": "Now Celebrate the Special Season With Up to INR 10,000 OFF* on Travel Bookings",
      "imageUrl": "https://images.emtcontent.com/offer-img/17th-anniversary-sm.webp",
      "link": "https://www.easemytrip.com/deals/anniversary-sale/",
      "bookingPeriod": "Valid till: 10th Jun, 2025",
      "promoCode": "EMT17",
      "categories": ["anniversary"]
    },
    {
      "id": 3,
      "title": "AirAsia",
      "description": "Book Flights from India with AirAsia & Enjoy Up to 15% OFF*",
      "imageUrl": "https://images.emtcontent.com/offer-img/airasia-02-jun-25-sm.webp",
      "link": "https://www.easemytrip.com/offers/airasia.html",
      "bookingPeriod": "Valid till: 8th Jun, 2025",
      "categories": ["airAsia_insrt"]
    },
    {
      "id": 4,
      "title": "Qatar Airways",
      "description": "Now Fly to Wonderful Australia from India at Fares Starting from INR 35,404*",
      "imageUrl": "https://images.emtcontent.com/offer-img/qatar-airways-30-may-25-sm.webp",
      "link": "https://www.easemytrip.com/offers/qatar-airways.html",
      "bookingPeriod": "Valid From: 1st Jun 2025",
      "categories": ["qatarairways_insrt"]
    },
    {
      "id": 5,
      "title": "Air Astana Offer",
      "description": "Book Flights Between Delhi & Kyrgyzstan at One-Way Fares Starting from INR 17,727*",
      "imageUrl": "https://images.emtcontent.com/offer-img/air-astana-5feb25-sm.webp",
      "link": "https://www.easemytrip.com/offers/air-astana-discount.html",
      "bookingPeriod": "Valid From: 28th May 2025",
      "categories": ["airastana"]
    },
    {
      "id": 6,
      "title": "Akasa Air",
      "description": "Book Your Domestic Flight with Akasa Air and Save Big on Fares!",
      "imageUrl": "https://images.emtcontent.com/offer-img/akasa-4feb25-sm.webp",
      "link": "https://www.easemytrip.com/offers/akasa-air.html",
      "categories": ["akasaair_insrt"]
    },
    {
      "id": 7,
      "title": "Egypt Air Offer",
      "description": "Fly from Delhi to Egypt & MS Networks with Discounted Promotional Fares of EgyptAir",
      "imageUrl": "https://images.emtcontent.com/offer-img/egyptair-4sep24-sm.png",
      "link": "https://www.easemytrip.com/offers/egyptair.html",
      "bookingPeriod": "Valid till: 30th Jun, 2025",
      "categories": ["egyptair_insrt"]
    },
    {
      "id": 8,
      "title": "Cathay Pacific",
      "description": "Now Fly Between Hong Kong & Yiwu Seamlessly with Cathay Pacific & HK Express",
      "imageUrl": "https://images.emtcontent.com/offer-img/Cathay-22-may-25-sm.webp",
      "link": "https://www.easemytrip.com/offers/cathay-pacific-flight.html",
      "bookingPeriod": "Valid From : 29th May, 2025",
      "categories": ["cathaypacific"]
    },
    {
      "id": 9,
      "title": "IndiGo Offer",
      "description": "Grab Exclusive Discounts on IndiGo Airlines Flight Bookings",
      "imageUrl": "https://images.emtcontent.com/offer-img/indigo-3feb25-sm.webp",
      "link": "https://www.easemytrip.com/offers/indigo.html",
      "categories": ["indigo_insrt"]
    },
    {
      "id": 10,
      "title": "Malaysia Airlines",
      "description": "Now Fly from Trivadrum with Malaysia Airlines at Fares Starting from INR 14,799*",
      "imageUrl": "https://images.emtcontent.com/offer-img/malaysia-airlines-08-may25-sm.webp",
      "link": "https://www.easemytrip.com/offers/malaysia-airlines.html",
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