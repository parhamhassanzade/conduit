import { useEffect, useState } from "react";
import { Request } from "../Api/Conduit.api";
import apiRoutes from "../routes/apiRoute";
import { Pagination, Box, List } from "@mui/material";
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
    <Box
      sx={{
        margin: 5,
      }}
    >
      <Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          {allArticles &&
            allArticles.map((item, index) => (
              <ArticleCard
                key={index}
                title={item.title}
                description={item.description}
                author={item.author.username}
              />
            ))}
        </List>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination count={articlesCount && articlesCount} color="primary" />
      </Box>
    </Box>
  );
}

export default Home;
