import { IRepositories } from '../types/repository.type';

type TTypeFilter = {
  language: Function;
  name: Function;
};

type TValuesToFilter = {
  language: string;
  name: string;
};

export function useFilter(
  listRepositories: IRepositories[],
  configToFilter: TValuesToFilter
): IRepositories[] {
  const filters: TTypeFilter = {
    language: (language: string) => {
      if (language) {
        return language
          .toLowerCase()
          .includes(configToFilter.language.toLowerCase().trim());
      }
    },
    name: (name: string) => {
      return name
        .toLowerCase()
        .includes(configToFilter.name.toLowerCase().trim());
    },
  };

  function filteringRepositories(configFilter: TTypeFilter): IRepositories[] {
    const configFiltersKeys = Object.keys(configFilter);
    return listRepositories.filter(repo =>
      configFiltersKeys.every(item => {
        if (configFilter[item](repo[item])) {
          return configFilter[item](repo[item]);
        }
      })
    );
  }
  const repositoryList = filteringRepositories(filters);

  return repositoryList;
}
