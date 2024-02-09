import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid grid-cols-2 gap-2 menu pl-0">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium flex flex-col justify-center items-center gap-4"
          >
            <h3>{drink.strDrink}</h3>
            <Image
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              width={300}
              height={300}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default DrinksList;
