import Layout from "_client/learn/layout";
import { FC } from "react";

type IndexProps = {};

export const Index: FC<IndexProps> = (props) => {
  return (
    <>
      <Layout
        Article={
          <>
            <div>Article</div>
          </>
        }
        ArticleNav={
          <>
            <div>ArticleNav</div>
          </>
        }
        MobileNav={
          <>
            <div>MobileNav</div>
          </>
        }
        PrimaryNav={
          <>
            <div>PrimaryNav</div>
          </>
        }
      />
    </>
  );
};

export default Index;
