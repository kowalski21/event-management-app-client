import { directus } from "@/lib";
import { readManyCollection } from "@/lib/collection";
import { useQuery } from "react-query";

const collection = "event_category";

export const useEventCategories = (queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readByQuery(query),
    queryKey,
    ...options,
  });
};

export const useEventCategory = (id, queryKey, query, options = {}) => {
  return useQuery({
    queryFn: async () => directus.items(collection).readOne(id, query),
    queryKey,
    ...options,
  });
};
