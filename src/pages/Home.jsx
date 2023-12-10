import MyCarousel from "../components/Carousel/MyCarousel";

const Home = () => {
  return (
    <div
      style={{
        paddingTop: "6rem",
      }}
    >
      <h1 className="mb-5">Home Page</h1>
      <MyCarousel />
    </div>
  );
};

export default Home;
