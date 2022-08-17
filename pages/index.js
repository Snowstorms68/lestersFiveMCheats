import Head from "next/head";
import dynamic from "next/dynamic";
import data from "../model/Model.json";
import { useState, useEffect } from "react";

const compList = [];
const MAX_RENDERED_ITEMS = 3;
const STORAGE_URL = data.main_config.storage_url;

for (var i = 0; i < data.pages[0].components.length; i++) {
  let compName = data.pages[0].components[i].name;
  if (i === 0) {
    compList["" + compName + ""] = {
      component: require("../components/" + compName).default,
    };
  } else {
    compList["" + compName + ""] = {
      component: dynamic(() => import("../components/" + compName)),
    };
  }
}

export default function Page() {
  const [load, loadContent] = useState(false);

  const handleScroll = function (event) {
    loadContent(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  //get Data
  let page = { components: [] };

  //set content
  for (var j = 0; j < data.pages[0].components.length; j++) {
    data.pages[0].components[j].render =
      compList["" + data.pages[0].components[j].name + ""].component;
  }
  page = data.pages[0];

  let metaArr = [{ key: "description", content: "initial" }];
  let linkArr = [];
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
      {page.components.map((item, index) => (
        <div key={index} className="relative z-10">
          {(load || index <= MAX_RENDERED_ITEMS) && (
            <item.render
              data={item.props}
              pos={index}
              STORAGE_URL={STORAGE_URL}
            />
          )}
        </div>
      ))}
    </div>
  );
}
