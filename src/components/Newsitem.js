import React, { Component } from "react";
import Image from "../Images/background.jpg";

export class Newsitem extends Component {
  render() {
    let { title, description, urlToImage, url } = this.props;

    return (
      <div className=" md:w-auto md:h-auto w-auto h-[5rem]  p-10 mx-5 ">
        <div className="py-5   border  rounded shadow-lg">
          <img
            className="w-auto h-[15rem] rounded-t-none"
            src={!urlToImage ?'https://miro.medium.com/max/498/1*5gJzummAqpBDGATo0fjU6Q.jpeg' : urlToImage}
            alt="CardGirl"
          />
          <h1 className="text-xl px-2  text-left font-semibold my-2">{title}...</h1>
          <p className=" text-left mb-5  px-2  text-gray-900">
            {description}
          </p>
          <a
            href={url}
            target="_blank"
            className=" px-3 py-2 ring-1 rounded-2xl mt-5 border border-blue-300  hover:bg-pink-400 text-sm shadow-lg font-semibold bg-blue-200"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
