import SearchSection from "@/components/SearchSection/SearchSection";
import InfoCard from "@/components/InfoCard/InfoCard";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [result, setResult] = useState({});
  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      // console.log(res);
      const data = await res.json();
      console.log(data);
      setResult(data);
    } catch (error) {}
  };
  return (
    <main>
      <div className="home__container">
        <section className="navbar">
          <h1 className="navbar__title">devfinder</h1>
          <button className="navbar__btn">LIGHT</button>
        </section>
        <SearchSection
          onChange={(e) => setUsername(e.target.value)}
          onClick={handleSearch}
        />
        <InfoCard
          src={result?.avatar_url}
          name={result?.name}
          href={result?.html_url}
          date={result?.updated_at}
          bio={result?.bio}
          repo={result?.public_repos}
          followers={result?.followers}
          following={result?.following}
          location={result?.location}
          blog={result?.blog}
          twitter={result?.twitter_username}
          company={result?.company}
          userName={result?.login}
        />
      </div>
    </main>
  );
}
