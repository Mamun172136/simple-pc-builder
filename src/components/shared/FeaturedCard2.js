import Link from "next/link";

const FeaturedCard2 = ({ service }) => {
  // const { products } = useSelector((state) => state.cart);
  return (
    <div className="card md:w-46 lg:w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>

        {/* {products && products.length > 0 && (
          <div>
            <p>Selected Items:</p>
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.productName}</li>
              ))}
            </ul>
          </div>
        )} */}

        <div className="card-actions justify-end">
          <Link href={`/${service.link}/${service.link}`}>
            <button className="btn">SELECT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard2;
