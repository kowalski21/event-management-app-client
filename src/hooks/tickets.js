import { directus } from "@/lib";
import { readManyCollection } from "@/lib/collection";
import { useQuery } from "react-query";

const collection = "ticket_asset";

export const useTickets = (queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readByQuery(query),
    queryKey,
    ...options,
  });
};

export const useTicket = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readOne(id, query),
    queryKey,
    ...options,
  });
};
