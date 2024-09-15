import { useGetDogBreedsQuery, useGetCatBreedsQuery } from '../store/api/petApi.js';

export const useBreedsData = () => {
  const {
    isLoading: isDogDataLoading,
    isError: isDogDataError,
    error: dogDataError,
    data: dogData
  } = useGetDogBreedsQuery();
  
  const {
    isLoading: isCatDataLoading,
    isError: isCatDataError,
    error: catDataError,
    data: catData
  } = useGetCatBreedsQuery();

  return {
    isDogDataLoading,
    isDogDataError,
    dogDataError,
    dogData,
    isCatDataLoading,
    isCatDataError,
    catDataError,
    catData
  };
}
