import Image from "next/image";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (drinkId) => {
  try {
    const response = await fetch(`${url}${drinkId}`);
    const data = await response.json();
    if (data.drinks === null) {
      throw new Error(`Failed to fetch drink with that id : ${drinkId}`);
    }
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch drink with that id : ${drinkId}`);
  }
};

const SingleDrink = async ({ params }) => {
  const data = await getSingleDrink(params.drinkId);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <h1 className="text-4xl mb-8">{title}</h1>
      <Image src={imgSrc} alt={title} width={300} height={300} />
    </div>
  );
};
export default SingleDrink;
