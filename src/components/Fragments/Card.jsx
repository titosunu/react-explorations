import Button from "../Elements/Button/Index";

const Card = (props) => {
  const { children } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 flex flex-col justify-beetwen">
      {children}
    </div>
  );
};

const ImageCard = (props) => {
  const { images } = props;
  return <img className="rounded-t-lg" src={images} alt="" />;
};

const BodyCard = (props) => {
  const { children, title } = props;
  return (
    <div className="p-5 h-full">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {children}
      </p>
      <Button classname="bg-blue-600 hover:bg-blue-800">Read More</Button>
    </div>
  );
};

Card.BodyCard = BodyCard;
Card.ImageCard = ImageCard;

export default Card;
