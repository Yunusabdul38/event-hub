import { useContext } from "react";
import { CreateEventContext } from "../stateManagement/CreateEventContex";

export default function useEvent() {
  const {
    event: { date_Time:session},
    title,
    category,
    location,
    description,
    banner,
    ticket:{EventTicketType,SellingTicketType},
    dispatchFn,organizationDetails:{orgEmail,orgName,orgContact}
  } = useContext(CreateEventContext);


  return { session, dispatchFn,title,banner,category,location,description,EventTicketType,SellingTicketType,orgEmail,orgName,orgContact };
}
