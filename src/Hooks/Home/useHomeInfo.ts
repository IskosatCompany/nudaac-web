import useSwr from "swr";

export const useHomeInfo = () => {
  const url = `/calendar`;

  const result = useSwr(url);
  return result;
};
