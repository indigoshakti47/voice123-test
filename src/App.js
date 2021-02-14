import React, { useEffect, useState } from "react";

// Components
import SearchBar from "./components/SearchBar";
import VoiceActorCard from "./components/VoiceActorCard";
import Pagination from "./components/Pagination";


// Utils
import { getVoiceActors } from "./api/Voice123";

function App() {
  useEffect(() => {
    handleVoiceActorsSearch();
  }, []);

  const [keywords, setKeywords] = useState("");
  const [currentKeywords, setCurrentKeywords] = useState("");
  const [loading, setLoading] = useState(false);
  const [voiceActors, setVoiceActors] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const handleChangeKeywords = (e) => setKeywords(e.target.value);

  const handleVoiceActorsSearch = async (page = 1) => {
    setLoading(true);
    try {
      const { data, pagination } = await getVoiceActors(keywords, page);
      setVoiceActors(data);
      setPagination(pagination);
      setCurrentKeywords(keywords);
    } catch (error) {
      console.error(error);
      alert("Ops, something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <header>
        <p style={{fontFamily:' Noto Color Emoji'}} className="flex justify-center w-full mt-10 text-4xl">GUESS WHO </p>
        <p className="flex justify-center w-full text-xl">your next voice actor will be ? </p>
       
        <SearchBar
          onChange={handleChangeKeywords}
          onSearch={handleVoiceActorsSearch}
          value={keywords}
        />
      </header>
      <section className="flex flex-wrap -mx-1 lg:-mx-4 mt-5">
        {voiceActors.map((voiceActor) => (
          <VoiceActorCard voiceActor={voiceActor} key={voiceActor.id} keywords={currentKeywords} />
        ))}
      </section>
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        onClickPage={handleVoiceActorsSearch}
      />
    </div>
  );
}

export default App;
