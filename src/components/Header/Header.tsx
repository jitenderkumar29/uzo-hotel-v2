"use client"
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Header.module.css';

interface City {
  id: string;
  name: string;
}

const Header: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const cityList: Record<string, City> = {
    agra: { id: 'agra', name: 'Agra' },
    bareliy: { id: 'bareliy', name: 'Bareliy' },
    chemark: { id: 'chemark', name: 'Chemark' },
    hyderabad: { id: 'hyderabad', name: 'Hyderabad' },
    mumbai: { id: 'mumbai', name: 'Mumbai' },
    bangalore: { id: 'bangalore', name: 'Bangalore' },
    delhi: { id: 'delhi', name: 'Delhi' },
    gurgaon: { id: 'gurgaon', name: 'Gurgaon' },
    goa: { id: 'goa', name: 'Goa' },
    kolkata: { id: 'kolkata', name: 'Kolkata' },
    noida: { id: 'noida', name: 'Noida' },
    pune: { id: 'pune', name: 'Pune' },
    ghaziabad: { id: 'ghaziabad', name: 'Ghaziabad' },
    giles: { id: 'cities', name: 'Cities' },
  };

  const toggleDropdown = (cityName: string) => {
    setActiveDropdown(activeDropdown === cityName ? null : cityName);
  };

  return (
    <header>
      <section className={styles.find}>
        <div className={styles.container} style={{}}>
          <ul>
            {Object.keys(cityList).map((key, index) => {
              const city = cityList[key];
              return (
                <li key={index}>
                  <Link
                    href={`/`}
                    className={styles.cityLink}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown(city.name);
                    }}
                    ref={buttonRef}
                  >
                    {city.name}
                    <FaChevronDown className={styles.chevron} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

    </header>
  );
};

export default Header;