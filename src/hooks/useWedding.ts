import { Wedding } from "@/components/models/wedding";
import { getWedding } from "@/api/wedding";
import { useQuery } from "react-query";

function useWedding() {
  const { data, isLoading, error } = useQuery<Wedding>(
    ["wedding"],
    () =>
      getWedding().then((response) => {
        if (response.ok === false) {
          throw new Error("청접장 정보를 불러오지 못했습니다.");
        }

        return response.json();
      }),
    {
      suspense: true,
    }
  );

  return { wedding: data, isLoading, error };
}

export default useWedding;
