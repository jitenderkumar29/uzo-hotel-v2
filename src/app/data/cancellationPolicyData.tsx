export const policy1 = {
  planType: "Room Only | Free Cancellation",
  roomType: "Deluxe Room",
  freeCancellationDeadline: "17 May, 11:59 AM",
  checkInTime: "17 May 11:59 AM",
  policies: [
    { date: "Before 17 May, 11:59 AM", fee: "0.0% of booking amount" },
    { date: "After 17 May, 12:00 PM", fee: "100.0% of booking amount" },
    { date: "After 18 May, 12:00 PM", fee: "100.0% of booking amount" }
  ],
  amenities: [
    "10% Off on Laundry service for upto 4 clothing item(s)",
    "Early Check-In upto 2 hours (subject to availability)",
    "Late Check-Out upto 2 hours (subject to availability)"
  ]
};

// Example 2: Free Breakfast | Free Cancellation
export const policy2 = {
  planType: "Free Breakfast | Free Cancellation",
  roomType: "Deluxe Twin Room",
  freeCancellationDeadline: "11 May, 1:59 PM",
  checkInTime: "12 May 1:59 PM",
  policies: [
    { date: "Before 14 May, 1:59 PM", fee: "0.0% of booking amount" },
    { date: "After 14 May, 2:00 PM", fee: "100.0% of booking amount" },
    { date: "After 14 May, 2:00 PM", fee: "100.0% of booking amount" }
  ],
  amenities: [
    "10% Off on Laundry service for upto 4 clothing item(s)"
  ]
};
// Example 2: Free Breakfast | Free Cancellation
export const policy3 = {
  planType: "Free Breakfast | Free Cancellation",
  roomType: "Must read",
  freeCancellationDeadline: "11 May, 1:59 PM",
  checkInTime: "12 May 1:59 PM",
  policies: [
    { date: "Before 14 May, 1:59 PM", fee: "0.0% of booking amount" },
    { date: "After 14 May, 2:00 PM", fee: "100.0% of booking amount" },
    { date: "After 14 May, 2:00 PM", fee: "100.0% of booking amount" }
  ],
  amenities: [
    "Primary guest should be atleast 18 years of age",
    "Passport, Aadhar and Driving License are accepted as ID proof(s)",
    "Pets are not allowed",
    "Outside food is not allowed",
    "Smoking within the premises is not allowed"
  ]
};
