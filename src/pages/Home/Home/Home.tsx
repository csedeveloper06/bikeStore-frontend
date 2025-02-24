import HelmetTitle from "../../../components/HelmetTitle/HelmetTitle";
import { useGetProductsQuery } from "../../../redux/api/baseApi";
import Banner from "../Banner/Banner";
import ProductCard from "../card/ProductCard";

const Home = () => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);

  console.log({ data, isLoading, isError });

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <HelmetTitle subTitle="Home"></HelmetTitle>
      <Banner />
      {/* <ProductCard /> */}
      <div className="grid grid-cols-5 gap-4">
        {!isLoading &&
          data?.data?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
