"use client";

import { serviceType } from "@/types";
import { createContext, useContext, useState, ReactNode } from "react";

interface ServiceOrderContextType {
  serviceOrder: serviceType[];
  handleServiceLinkClick: (
    allServices: serviceType[],
    clickedIndex: number
  ) => void;
}

const ServiceOrderContext = createContext<ServiceOrderContextType | undefined>(
  undefined
);

export function useServiceOrder(): ServiceOrderContextType {
  const context = useContext(ServiceOrderContext);
  if (!context) {
    throw new Error(
      "useServiceOrder must be used within a ServiceOrderProvider"
    );
  }
  return context;
}

export const ServiceOrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [serviceOrder, setServiceOrder] = useState<serviceType[]>([]);

  const handleServiceLinkClick = (
    allServices: serviceType[],
    clickedIndex: number
  ) => {
    setServiceOrder((prevOrder) => {
      const newOrder = prevOrder.length ? prevOrder : [...allServices];
      const updatedOrder = [
        ...newOrder.slice(0, clickedIndex),
        ...newOrder.slice(clickedIndex + 1),
        newOrder[clickedIndex],
      ];
      return updatedOrder;
    });
  };

  return (
    <ServiceOrderContext.Provider
      value={{ serviceOrder, handleServiceLinkClick }}
    >
      {children}
    </ServiceOrderContext.Provider>
  );
};
