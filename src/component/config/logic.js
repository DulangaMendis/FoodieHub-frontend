// Function to check if the restaurant is already in the favorites list
export const isPresentInFavorties = (favorites, restaurant) => {
    return favorites.some(item => item.id === restaurant.id);
  };
  