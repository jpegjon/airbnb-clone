import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-white bg-gray-900 hover:text-gray-900 border-2 border-gray-900 hover:bg-white mt-5 px-8 py-4 rounded-lg transition duration-150 hover:ease-in-out">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
