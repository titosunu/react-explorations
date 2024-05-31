import Card from "../components/Fragments/Card";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-6">
      <Card>
        <Card.ImageCard images="/images/images2.jpg"></Card.ImageCard>
        <Card.BodyCard title="Noteworthy technology acquisitions 2021">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </Card.BodyCard>
      </Card>
      <Card>
        <Card.ImageCard images="/images/images3.jpg"></Card.ImageCard>
        <Card.BodyCard title="Noteworthy technology acquisitions 2021">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </Card.BodyCard>
      </Card>
    </div>
  );
};

export default ProductPage;
