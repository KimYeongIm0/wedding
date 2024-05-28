function useWedding() {
  useEffect(() => {
    setLoading(true);

    getWedding()
      .then((response) => {
        if (response.ok === false) {
          throw new Error("청접장 정보를 불러오지 못했습니다.");
        }

        return response.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
}

export default useWedding;
