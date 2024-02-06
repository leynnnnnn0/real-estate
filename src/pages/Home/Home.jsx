import "./Home.css";
import HomeBanner from "../../components/HomeBanner/HomeBanner.jsx"

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page-banner">
        <HomeBanner />
      </div>
    </div>
  );
}

export default Home