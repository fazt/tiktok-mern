import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import TiktokFeed from "../components/TiktokFeed";

function HomePage() {
  const [tiktoks, setTiktoks] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTiktoks() {
      const res = await axios.get("http://localhost:3000/videos");
      setTiktoks(res.data);
    }
    loadTiktoks();
  }, []);

  if (tiktoks.length === 0) {
    return <h1>No videos yet</h1>;
  }

  return (
    <Layout>
      <TiktokFeed tiktoks={tiktoks} />;
    </Layout>
  );
}

export default HomePage;
