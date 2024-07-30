import { directus } from "@/lib";
import { readManyCollection } from "@/lib/collection";
import { useQuery } from "react-query";

const collection = "event_order";

export const useEventOrders = (queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readByQuery(query),
    queryKey,
    ...options,
  });
};

export const useEventOrder = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readOne(id, query),
    queryKey,
    ...options,
  });
};
