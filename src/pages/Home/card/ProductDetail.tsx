import { useParams } from "react-router-dom";
import ReactSlickExample from "../../../components/ReactSlick";
import "../../../styles/examples.css";
import { useEffect, useState } from "react";

const ProductDetail = () => {
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
  const { images } = product || {};
  // const { images } = product;
  // console.log(images);

  return (
    <div className="fluid react-slick">
      <div className="fluid__image-container">
        <ReactSlickExample
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
        <h3>External Enlarged Image Example</h3>
        <p>Render enlarged image into an HTML element of your choosing.</p>
        <p>
          Ignored for touch input by default but will be honored if
          isEnlargedImagePortalEnabledForTouch is implemented.
        </p>
        <p>
          Use cases include a scenario where an ancestor element of
          react-image-magnify implements overflow hidden.
        </p>
        <p>Requires React v16.</p>
        <p>Please see for details.</p>
      </div>
      <div style={{ height: "1000px" }} />
    </div>
  );
};

export default ProductDetail;
