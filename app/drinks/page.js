import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const getDrinks = async () => {
  try {
    await new Promise((res) => setTimeout(res, 1000));
    const response = await fetch(url, {
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Faled to fetch drinks");
  }
};

const DrinksPage = async () => {
  const data = await getDrinks();
  return <div>Drinks Page</div>;
};

export default DrinksPage;
