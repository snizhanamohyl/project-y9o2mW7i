const handlePending = search => {
  search.isLoading = true;
};

const handleRejected = (search, { payload }) => {
  search.isLoading = false;
  search.error = payload;
};

const handleFulfilled = (search, { payload }) => {
  search.isLoading = false;
  if (payload.message) {
    search.error = payload.message;
    search.items = [];
  } else search.items = payload;
};

export { handlePending, handleFulfilled, handleRejected };
