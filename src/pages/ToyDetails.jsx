import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    sellerEmail,
    sellerName,
    toyName,
    description,
    price,
    availableQuantity,
    category,
    subCategory,
    brand,
    material,
    color,
    weight,
    countryOfOrigin,
    pictureUrl,
    ageRange,
    detailDescription,
    date,
  } = toy;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://babystreet.althemist.com/wp-content/uploads/2019/01/baby-prod15-1.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{toyName}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
