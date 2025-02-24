const ProductCard = ({ product }) => {
  const { name } = product;
  console.log(product);

  return (
    <div className="card card-compact bg-base-100 max-w-60 shadow-xl">
      <figure>
        <img
          className=" object-cover 
            h-full 
            w-full 
            group-hover:scale-110 
            transition"
          src="https://i.ibb.co.com/ynzrpFfM/cycl26.jpg"
          alt="bi-cycle"
        />
      </figure>
      <div className="card-body">
        <div
          className="
              absolute
              top-3
              right-3
            "
        ></div>
        <h2 className="card-title">{name}</h2>
        {/* <p>{brand}</p>
        <p>{price}</p>
        <p>{category}</p> */}
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">View Detail</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
