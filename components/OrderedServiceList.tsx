"use client";
import { useState } from "react";
import type { serviceType } from "@/types";
import ServiceItem from "@/components/ServiceItem";

export default function OrderedServiceList({
  allServices,
}: {
  allServices: serviceType[];
}) {
  const [serviceOrder, setServiceOrder] = useState([...allServices]);

  // Function to handle click event when a link is clicked
  const handleServiceLinkClick = (clickedIndex: number) => {
    setServiceOrder((prevOrder) => {
      const updatedOrder = [
        ...prevOrder.slice(0, clickedIndex),
        ...prevOrder.slice(clickedIndex + 1),
        prevOrder[clickedIndex],
      ];
      return updatedOrder;
    });
  };

  return (
    <div>
      {/* {serviceOrder.map((service, index) => {
        return (
          <div key={service._id}>
            <ServiceItem
              key={service._id}
              title={service.serviceTitle}
              slug={service.slug}
              image={service.servicePageImage}
              heading={service.serviceSummary}
              headingListBody={service.serviceSummaryBodyVersion}
              text={service.description}
              index={index}
              onClick={() => handleServiceLinkClick(index)} // Pass the index to the click handler
            />
          </div>
        );
      })} */}
    </div>
  );
}
