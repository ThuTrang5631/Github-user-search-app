import SearchSection from "@/components/SearchSection/SearchSection";
import InfoCard from "@/components/InfoCard/InfoCard";

export default function Home() {
  return (
    <main>
      <div className="home__container">
        <section className="navbar">
          <h1 className="navbar__title">devfinder</h1>
          <button className="navbar__btn">LIGHT</button>
        </section>
        <SearchSection />
        <InfoCard />
      </div>
    </main>
  );
}
