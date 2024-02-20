import GridPostList from '@/components/ui/shared/GridPostList';
import { Models } from 'appwrite';
import { Loader } from 'lucide-react';

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts } : SearchResultProps ) => {
  if (isSearchFetching) return <Loader />

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return (
      <GridPostList posts={searchedPosts.documents} />
    )
  }

  return (
	  <p className='text-light-4 mt-10 text-center w-full'>No Results Found</p>
  )
}

export default SearchResults
