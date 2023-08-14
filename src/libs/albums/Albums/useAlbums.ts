import { findAlbums } from "@apis";
import { useQuery } from "react-query";

type Album = {
  id: number;
  userId: number;
  title: string;
};

export const useAlbums = () => {
  const { data: albums } = useQuery<Album[]>(
    'allAlbums',
    findAlbums,
    {
      onSuccess: data => console.log('Success: findAlbums', data),
      suspense: true,
    }
  );

  return { albums };
};