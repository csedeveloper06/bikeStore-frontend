import { useParams } from "react-router-dom";
import ReactSlickExample from "../../../components/ReactSlick";
import "../../../styles/examples.css";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../redux/api/baseApi";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { data } = useGetProductsQuery(undefined);

  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${productId}`
        );
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);
  console.log(product);

  const {
    name,
    brand,
    price,
    images,
    category,
    description,
    quantity,
    inStock,
  } = product || {};

  const relatedProducts = data?.data?.filter(
    (relatedProduct) => relatedProduct.category === category
  );
  console.log("Related Products are :", relatedProducts);

  return (
    <div>
      <div className="fluid react-slick">
        <div className="fluid__image-container">
          <ReactSlickExample
            rsProps={undefined}
            {...{ images }}
            {...{
              rimProps: {
                isEnlargedImagePortalEnabledForTouch: false,
                enlargedImagePortalId: "portal",
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "100%",
                },
              },
            }}
          />
        </div>
        <div className="fluid__instructions" style={{ position: "relative" }}>
          <div id="portal" className="portal" />
          <h1>Product Detailed Information</h1>
          <h3>Name : {name}</h3>
          <h3>Brand : {brand}</h3>
          <h3>Price : {price}</h3>
          <p>Product Description{description}</p>
          <h3>Category : {category}</h3>
          <h3>Quantity : {quantity}</h3>
          <h3>InStock : {inStock ? "Available" : "Not Available"}</h3>
          <button className="btn btn-soft btn-outline btn-success">
            Buy Now
          </button>
        </div>
        <div style={{ height: "400px" }} />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {relatedProducts?.map((relatedProduct) => (
          <ProductCard product={relatedProduct} key={relatedProduct.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
