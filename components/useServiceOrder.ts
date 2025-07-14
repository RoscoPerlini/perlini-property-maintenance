"use client";
import { useEffect, useState } from "react";
import type { serviceType } from "@/types";

const useServiceOrder = (initialServices: serviceType[]) => {
  const [services, setServices] = useState<serviceType[]>(initialServices);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const storedServices = sessionStorage.getItem("servicesOrder");
      if (storedServices) {
        setServices(JSON.parse(storedServices));
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      sessionStorage.setItem("servicesOrder", JSON.stringify(services));
    }
  }, [services, isMounted]);

  const reorderService = (clickedIndex: number) => {
    setServices((currentServices) => {
      const updatedServices = [...currentServices];
      const itemToMove = updatedServices.splice(clickedIndex, 1)[0];
      updatedServices.push(itemToMove);
      return updatedServices;
    });
  };

  return { services, reorderService };
};

export default useServiceOrder;
