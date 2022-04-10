import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Russian forces seize huge Ukrainian nuclear plant, fire extinguished - Reuters",
      description:
        "Russian forces seized the largest nuclear power plant in Europe after a building at the complex was set ablaze during intense fighting with Ukrainian defenders, Ukrainian authorities said on Friday.",
      url: "https://www.reuters.com/markets/europe/top-wrap-1-europes-largest-nuclear-power-plant-fire-after-russian-attack-mayor-2022-03-04/",
      urlToImage:
        "https://www.reuters.com/resizer/sJJOXWLv05XSrd73YM-L14OM7p4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2EZK3MADVNN5XAAYYZXPTSFF7A.jpg",
      publishedAt: "2022-03-04T08:33:00Z",
      content:
        "LVIV, Ukraine, March 4 (Reuters) - Russian forces seized the largest nuclear power plant in Europe after a building at the complex was set ablaze during intense fighting with Ukrainian defenders, Ukr… [+6810 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Sam Byford",
      title:
        "Sony and Honda plan to make electric vehicles together - The Verge",
      description:
        "Sony and Honda are planning to form a new company to design and sell electric vehicles together. The as-yet unnamed new company is expected to be formed this year, with sales of the first EV model planned for 2025.",
      url: "https://www.theverge.com/2022/3/4/22961207/sony-honda-electric-car-new-company-2025-date",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/Z8tziUSo6_f3ot2VMa4enY35tZU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19585591/sony_vision_s_9852.jpg",
      publishedAt: "2022-03-04T06:38:46Z",
      content:
        "The first model is expected in 2025\r\nSony and Honda are planning to form a new company to design and sell electric vehicles together. The venture hasnt been finalized just yet, but the two companies … [+2303 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Fox News",
      title:
        "Russia-Ukraine: Zelenskyy says it's a 'pity' US support came 'after' Russian war began: LIVE UPDATES - Fox News",
      description:
        "Russia's military is claiming to have seized Kherson as the Black Sea port city of Odesa -- Ukraine's third largest -- could come under attack by President Vladimir Putin's army as early as Thursday, U.S. officials tell Fox News.",
      url: "https://www.foxnews.com/live-news/russia-ukraine-war-3-3-2022",
      urlToImage:
        "https://static.foxnews.com/static/orion/styles/img/fox-news/og/og-fox-news.png",
      publishedAt: "2022-03-04T05:37:26Z",
      content:
        "Europe needs to wake up. The biggest nuclear power plant in Europe is on fire right now. Russian tanks are shooting at the nuclear blocks. These are tanks equipped with thermal imagers, so they know … [+1989 chars]",
    },
    {
      source: {
        id: "5",
        name: "The Moscow Times",
      },
      author: "AFP",
      title: "Russian Tech Giant Yandex Says Might Default - The Moscow Times",
      description:
        '"The Yandex group as a whole does not currently have sufficient resources to redeem the notes in full," the company said.',
      url: "https://www.themoscowtimes.com/2022/03/04/russian-tech-giant-yandex-says-might-default-a76752",
      urlToImage:
        "https://static.themoscowtimes.com/image/1360/35/TASS_47412514.jpg",
      publishedAt: "2022-03-04T05:37:25Z",
      content:
        "Russian tech giant Yandex warned Thursday it may default on its debt after it was suspended from trading on New York's digital stock exchange.\r\nNasdaq and the New York Stock Exchange this week halted… [+1719 chars]",
    },
    {
      source: {
        id: "4",
        name: "Fox News",
      },
      author: "Brie Stimson",
      title:
        "Macron fears 'worst is yet to come' from Putin after tense phone call - Fox News",
      description:
        'French President Emmanuel Macron said he’s convinced the "worst is yet to come" from Russian President Vladimir Putin after a tense 90-minte call between the two leaders Thursday, according to reports.',
      url: "https://www.foxnews.com/world/macron-putin-phone-call-worst-yet-to-come-ukraine-war",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/03/AP22062441392022.jpg",
      publishedAt: "2022-03-04T05:21:04Z",
      content:
        'French President Emmanuel Macron said hes convinced the "worst is yet to come" from Russian President Vladimir Putin after a tense 90-minte call between the two leaders Thursday, according to reports… [+1141 chars]',
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Sam Byford",
      title:
        "Sony and Honda plan to make electric vehicles together - The Verge",
      description:
        "Sony and Honda are planning to form a new company to design and sell electric vehicles together. The as-yet unnamed new company is expected to be formed this year, with sales of the first EV model planned for 2025.",
      url: "https://www.theverge.com/2022/3/4/22961207/sony-honda-electric-car-new-company-2025-date",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/Z8tziUSo6_f3ot2VMa4enY35tZU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19585591/sony_vision_s_9852.jpg",
      publishedAt: "2022-03-04T06:38:46Z",
      content:
        "this is simulation game   … [+2303 chars]",
    }
  ];

  constructor() {
    super();
    console.log("this is component");

    this.state = {
      article: this.articles,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf6dfacc144745d781b46330677f4136";
    let data = await fetch(url);
    console.log(data);
    let parsaedata = await data.json();
    console.log(parsaedata);
    this.setState({ article: parsaedata.articles });
  }

  render() {
    return (
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold  text-gray-600 text-center mt-5">
          Tech News - Top Headlines
        </h2>
        <div className="lg:grid grid-cols-3 gap-2 ">
          {this.state.article.map((element) => {
            return (
              <div className="my-10" key={element.content}>
                <Newsitem
                  title={element.title.slice}
                  description={element.description}
                  urlToImage={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className=" mx-20 pb-10  my-2 flex justify-between">
          <button className="px-5 py-3  bg-black text-gray-200 shadow-lg rounded-lg   disabled hover:bg-slate-500 duration-300 border border-teal-400"> 	&#8592; Prev</button>
          <button className="px-5 py-3 bg-black text-gray-200 shadow-lg rounded-lg disabled  hover:bg-slate-500 duration-300 border border-teal-400">Next &#8594; </button>
        </div>
      </div>
    );
  }
}

export default News;
