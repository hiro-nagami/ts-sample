import { useContext } from "react";
import { ArticleContext } from "./provider/articles";

export default function useArticle() {
    const { 
        createArticle,
        loadArticles,
    } = useContext(ArticleContext);

    return {
        createArticle,
        loadArticles,
    };
}