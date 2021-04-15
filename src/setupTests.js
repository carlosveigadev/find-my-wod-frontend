global.matchMedia = global.matchMedia
  // eslint-disable-next-line func-names
  || function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };
