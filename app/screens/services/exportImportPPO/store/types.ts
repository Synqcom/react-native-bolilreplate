// ---- типы описывающие store ------ //
export type TExportImportPPOStore = {
  exportImportPPO: {
    stands: TExportImportPPOStands;
    repositories: TExportImportPPORepositories;
    exportPPO: TExportImportPPOExportPPO;
  };
};

export type TExportImportPPOStands = {
  standsList: TStandListElement[];
  standInfo: TStandListElement;
};

export type TExportImportPPORepositories = {
  repositoriesList: TRepositoryListElement[];
  repositoryInfo: TRepositoryListElement;
};

export type TExportImportPPOExportPPO = {
  namespaces: TNameSpaces;
  dependenciesNameSpaces: string[];
};

export type TNameSpaces = {
  title: string;
  key: string;
  children?: [
    {
      title: string;
      key: string;
    },
  ];
}[];

export type TRepositoryListElement = {
  id: string;
  name: string;
  token: string;
  type: string;
  url: string;
  username: string;
};

export type TStandListElement = {
  id: string;
  name: string;
  token: string;
  type: string;
  url: string;
  username: string;
};

export type TNewStandDataType = {
  name: string;
  url: string;
  token: string;
};

export type TSetNewStandPayload = {
  values: TNewStandDataType;
  endpointType: string;
};

export type TDeleteStandPayload = {
  id: string;
  endpointType: string;
};

export type TExportPPOPayload = {
  namespaceIds: string[];
  gitEndpointId?: string;
  withDependentObjects: boolean;
  infoServiceEndpointId: string;
};

export type TSetTreeKeysPayload = { checkedKeys: string[]; infoServiceEndpointId: string };

export type TImportPPOPayload = {
  file?: typeof Blob;
  gitEndpointId?: string;
  infoServiceEndpointId: string;
};
