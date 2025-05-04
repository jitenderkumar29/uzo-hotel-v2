'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type HotelSearchState = {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  roomCount: number;
  guestCount: number;
  childCount: number;
  filters: string[];
};

type HotelSearchContextType = HotelSearchState & {
  setDestination: (destination: string) => void;
  setCheckIn: (date: Date) => void;
  setCheckOut: (date: Date) => void;
  setRoomCount: (count: number) => void;
  setGuestCount: (count: number) => void;
  setChildCount: (count: number) => void;
  setFilters: (filters: string[]) => void;
  submitSearch: (searchData: Partial<HotelSearchState>) => void;
};

const HotelSearchContext = createContext<HotelSearchContextType | undefined>(undefined);

export function HotelSearchProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  // Initialize state with default values
  const defaultState: HotelSearchState = {
    destination: "Delhi, India",
    checkIn: new Date(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
    roomCount: 1,
    guestCount: 1,
    childCount: 0,
    filters: []
  };

  // Load state from localStorage or use defaults
  const loadState = (): HotelSearchState => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hotelSearchState');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return {
            ...parsed,
            checkIn: new Date(parsed.checkIn),
            checkOut: new Date(parsed.checkOut)
          };
        } catch (e) {
          console.error("Failed to parse saved state", e);
        }
      }
    }
    return defaultState;
  };

  const [searchState, setSearchState] = useState<HotelSearchState>(loadState);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stateToSave = {
        ...searchState,
        checkIn: searchState.checkIn.toISOString(),
        checkOut: searchState.checkOut.toISOString()
      };
      localStorage.setItem('hotelSearchState', JSON.stringify(stateToSave));
    }
  }, [searchState]);

  const submitSearch = (searchData: Partial<HotelSearchState>) => {
    setSearchState(prev => ({
      ...prev,
      ...searchData
    }));

    // Client-side navigation without reload
    router.push('/hotelBooking', { scroll: false });
  };

  const value: HotelSearchContextType = {
    ...searchState,
    setDestination: (destination) => setSearchState(prev => ({ ...prev, destination })),
    setCheckIn: (checkIn) => setSearchState(prev => ({ ...prev, checkIn })),
    setCheckOut: (checkOut) => setSearchState(prev => ({ ...prev, checkOut })),
    setRoomCount: (roomCount) => setSearchState(prev => ({ ...prev, roomCount })),
    setGuestCount: (guestCount) => setSearchState(prev => ({ ...prev, guestCount })),
    setChildCount: (childCount) => setSearchState(prev => ({ ...prev, childCount })),
    setFilters: (filters) => setSearchState(prev => ({ ...prev, filters })),
    submitSearch
  };

  return (
    <HotelSearchContext.Provider value={value}>
      {children}
    </HotelSearchContext.Provider>
  );
}

export function useHotelSearch() {
  const context = useContext(HotelSearchContext);
  if (context === undefined) {
    throw new Error('useHotelSearch must be used within a HotelSearchProvider');
  }
  return context;
}