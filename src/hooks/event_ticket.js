import { directus } from "@/lib";
import { readManyCollection } from "@/lib/collection";
import { useQuery } from "react-query";

const collection = "event_ticket";

export const useEventTickets = (queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readByQuery(query),
    queryKey,
    ...options,
  });
};

export const useEventTicket = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readOne(id, query),
    queryKey,
    ...options,
  });
};
