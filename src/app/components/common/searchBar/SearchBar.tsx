import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import apiFetch from '@/lib/api/apiFetch';
import useDebounce from '@/lib/hook/useDebounce';

import SearchBarInput from '@/app/components/common/searchBar/SearchBarInput';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<any>(null);
  const debouncedSearchTerm = useDebounce(searchTerm?.trim() || '', 300);
  const { data, isLoading } = useQuery({
    queryKey: [debouncedSearchTerm],
    queryFn: async () => {
      try {
        return apiFetch<'demo', any, any>('demo', {});
      } catch (error) {
        return {
          categories: [],
        };
      }
    },
    enabled: searchTerm != null,
  });

  const handleSearchTermChange = (value: string) => {
    console.log('');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('');
  };
  const handleFocus = () => {
    console.log('');
  };

  return (
    <div className='relative w-full md:w-[492px]'>
      <SearchBarInput
        className='h-full w-[492px] pl-12 text-sm max-md:w-[200px]'
        onChange={handleSearchTermChange}
        onSubmit={handleSubmit}
        onFocus={handleFocus}
        value={searchTerm || ''}
        placeholder='search_header'
      />
    </div>
  );
};

export default SearchBar;
