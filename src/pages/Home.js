import { useEffect, useState } from "react";
import { Request } from "../Api/Conduit.api";
import apiRoutes from "../routes/apiRoute";
import { Pagination, Box } from "@mui/material";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const [articlesCount, setArticlesCount] = useState();
  const [allArticles, setAllArticle] = useState([]);
  const getAllArticles = async () => {
    let res = await Request(apiRoutes.articles);
    console.log(res);
    setArticlesCount(res.data.articlesCount);
    setAllArticle(res.data.articles);
  };

  useEffect(() => {
    getAllArticles();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          flexDirection: "column",
        }}
      >
        <Box>
          {allArticles &&
            allArticles.map((item, index) => (
              <ArticleCard
                key={index}
                title={item.title}
                description={item.description}
                author={item.author.username}
              />
            ))}
        </Box>
        <Pagination count={articlesCount && articlesCount} color="primary" />
      </Box>
    </>
  );
}

export default Home;
