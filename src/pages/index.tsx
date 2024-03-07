import SearchSection from "@/components/SearchSection/SearchSection";
import InfoCard from "@/components/InfoCard/InfoCard";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [result, setResult] = useState({});
  const [displayInfoCard, setDisplayInfoCard] = useState<boolean>(false);
  const [isClear, setIsClear] = useState<boolean>(false);
  const ref = useRef(null);

  const handleSearch = () => {
    setUsername(ref.current.value);
  };

  const getData = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.status === 200) {
        const data = await res.json();
        setResult(data);
        console.log("data", data);
        setDisplayInfoCard(true);
      } else {
        setDisplayInfoCard(false);
      }
    } catch (error) {
      setDisplayInfoCard(false);
    }
  };

  const handleChange = (e: any) => {
    if (e.target.value) setIsClear(true);
  };

  const handleClear = () => {
    ref.current.value = "";
    setIsClear(false);
  };



  useEffect(() => {
    if (username !== "") {
      console.log("username", username);
      getData();
    }
  }, [username]);

  return (
    <main>
      <div className="home__container">
        <section className="navbar">
          <h1 className="navbar__title">devfinder</h1>
          <button className="navbar__btn">LIGHT</button>
        </section>
        <SearchSection
          onChange={handleChange}
          onClick={handleSearch}
          inputRef={ref}
          clearSearch={isClear}
          onClear={handleClear}
        />
        {displayInfoCard && (
          <InfoCard
            src={result?.avatar_url}
            name={result?.name}
            href={result?.html_url}
            date={result?.created_at}
            bio={result?.bio}
            repos={result?.public_repos}
            follower={result?.followers}
            following={result?.following}
            location={result?.location}
            blog={result?.blog}
            twitter={result?.twitter_username}
            company={result?.company}
            username={result?.login}
          />
        )}
        {username !== "" && !displayInfoCard && (
          <div className="error">User not found</div>
        )}
      </div>
    </main>
  );
}
