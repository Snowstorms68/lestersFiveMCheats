import Head from "next/head";
import dynamic from "next/dynamic";
import data from "../model/Model.json";
import { useRouter } from "next/router";
import { commerce } from "../lib/commerce";

const comps = data.componentList;
const compList = [];
const STORAGE_URL = data.main_config.storage_url;

for (var i = 0; i < comps.length; i++) {
  let compName = comps[i].name;
  compList["" + compName + ""] = {
    component: dynamic(() => import("../components/" + compName)),
  };
}

export default function Page({ dataServer }) {
  //get Data
  const router = useRouter();
  let productID = false;
  let pageName = "";
  let path = dataServer;
  for (let i = 0; i < path.path.length; i++) {
    pageName += "/" + path.path[i];
    if (path.path[i] === "product") {
      productID = path.path[i + 1];
    }
  }
  if (productID) pageName = "/product";
  if (dataServer.product.status === 404) pageName = "/seite-nicht-gefunden";
  let page = { components: [] };
  let pageStack = [];
  pageStack = data.pages;

  //set content
  for (var i = 0; i < pageStack.length; i++) {
    if (
      pageName === data.pages[i].href ||
      (pageName === undefined && data.pages[i].href === "/")
    ) {
      for (var j = 0; j < data.pages[i].components.length; j++) {
        data.pages[i].components[j].render =
          compList["" + data.pages[i].components[j].name + ""].component;
      }
      page = data.pages[i];
    }
  }

  let metaArr = [{ key: "description", content: "initial" }];
  let linkArr = [];
  if (page.meta) {
    for (var i = 0; i < page.meta.length; i++) {
      if (page.meta[i].content) {
        if (page.meta[i].meta_tag === "canonical") {
          let key = "rel";
          let val = page.meta[i].meta_tag;
          let content = page.meta[i].content;
          linkArr.push({ [key]: val, href: content });
        } else {
          let key = page.meta[i].type;
          let val = page.meta[i].meta_tag;
          let content = page.meta[i].content;

          metaArr.push({ [key]: val, content: content });
        }
      }
    }
  }

  return (
    <div className="App">
      <Head>
        <title>{page.page_title}</title>
        <link rel="icon" href="/favicon.ico" />
        {metaArr.map((tag, i) => (
          <meta key={i} {...tag} />
        ))}
        {linkArr.map((tag, i) => (
          <link key={i} {...tag} />
        ))}
      </Head>
      {/*<PasswordMask />*/}
      {page.components.map((item, index) => (
        <div key={index} className="relative z-10">
          <item.render
            data={item.props}
            product={dataServer.product}
            pos={index}
            STORAGE_URL={STORAGE_URL}
          />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  let productTmp = {};
  if (context.params.page[0] === "product") {
    await commerce.products
      .retrieve(context.params.page[1])
      .then((product) => {
        productTmp = product;
      })
      .catch((error) => {
        productTmp = { status: 404 };
      });
  }
  let dataServer = { path: context.params.page, product: productTmp };
  return {
    props: { dataServer },
  };
}
