import Card from "../components/Fragments/Card";

const products = [
  {
    id: 1,
    title: "Course Frontend Dev",
    price: "6.000.000",
    image: "/images/images2.jpg",
    desc: "Here are the biggest enterprise technology.",
  },
  {
    id: 2,
    title: "Course Backend Dev",
    price: "10.000.000",
    image: "/images/images3.jpg",
    desc: "Here are the biggest enterprise technology.",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-6">
      {products.map((product) => (
        <Card key={product.id}>
          <Card.ImageCard images={product.image}></Card.ImageCard>
          <Card.BodyCard title={product.title}>
            {product.desc} {product.price}
          </Card.BodyCard>
        </Card>
      ))}
    </div>
  );
};

export default ProductPage;
