"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import Header from "@/components/Header/Header";
import SearchBarMultiple from "@/components/SearchBarMultiple/SearchBarMultiple";
import FooterUzo from "@/components/FooterUzo/FooterUzo";
import HeaderTop from "@/components/HeaderTop/HeaderTop";
import "./Book.module.css"

const Book: React.FC = () => {
  const searchParams = useSearchParams();
  const searchMode = searchParams?.get("searchMode") ?? undefined; console.log("searchMode in book");
  console.log(searchMode);

  return (
    <>
      <Header />
      <HeaderTop />
      <div className="searchBarBody">
        <SearchBarMultiple searchMode={searchMode} />
      </div>

      <FooterUzo />
    </>
  );
};

export default Book;