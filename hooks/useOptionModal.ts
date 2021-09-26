import React from 'react';
export function useOptionModal() {
  const [isShowOptions, setShowOptions] = React.useState<boolean>(false);
  const [isShowLanguages, setShowLanguages] = React.useState<boolean>(false);
  const [isShowSort, setShowSort] = React.useState<boolean>(false);

  function handleShowModal(modal: string) {
    switch (modal) {
      case 'type':
        setShowOptions(!isShowOptions);
        setShowLanguages(false);
        setShowSort(false);
        console.log('press type');
        break;
      case 'language':
        setShowOptions(false);
        setShowSort(false);
        setShowLanguages(!isShowLanguages);
        break;
      case 'sort':
        setShowLanguages(false);
        setShowOptions(false);
        setShowSort(!isShowSort);
      default:
        return;
    }
  }

  return {
    isShowLanguages,
    isShowOptions,
    isShowSort,
    setShowLanguages,
    setShowOptions,
    setShowSort,
    handleShowModal,
  };
}
