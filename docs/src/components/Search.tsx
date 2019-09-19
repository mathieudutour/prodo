import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import * as useFlexSearch from "react-use-flexsearch";

export interface Props {
  onSearchResults: (results: string[]) => void;
}

const StyledSearch = styled.div``;

const Input = styled.input`
  appearance: none;
  margin: 1rem 0;
  padding: 0.25rem 0.5rem;
  border: solid lightgrey 1px;
  border-radius: 2px;
`;

const Search: React.FC<{ store: any; index: any } & Props> = ({
  store,
  index,
  onSearchResults,
}) => {
  const [query, setQuery] = React.useState<string>("");

  const results = useFlexSearch.useFlexSearch(query, index, store);
  React.useEffect(() => {
    onSearchResults(results != null ? results.map(r => r.id) : null);
  }, [query]);

  return (
    <StyledSearch>
      <Input
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </StyledSearch>
  );
};

export default (props: Props) => {
  const { localSearchPages } = useStaticQuery(gqlQuery);

  return (
    <Search
      store={JSON.parse(localSearchPages.store)}
      index={localSearchPages.index}
      {...props}
    />
  );
};

const gqlQuery = graphql`
  query {
    localSearchPages {
      index
      store
    }
  }
`;
