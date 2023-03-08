import React,{useEffect,useState} from 'react'

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/blog')
  const DataFromServer = await res.json()
  return {
    props: {
      DataFromServer,
    },
  }
}
const Blog = ({DataFromServer}) => {
 const MyReverse = DataFromServer.reverse();

//Dynamic Class For title
  const MyTitleClass = [
      "absolute top-[166px] left-[1081px] text-3xs leading-[69px] font-extrabold",
      "absolute top-[254px] left-[1081px] text-3xs leading-[69px] font-extrabold",
      "absolute top-[356px] left-[1081px] text-3xs leading-[69px] font-extrabold",
      "absolute top-[458px] left-[1081px] text-3xs leading-[69px] font-extrabold"
  ]

//Dynamic Class For title Content
const MyDescriptionClass=[
  "absolute top-[223px] left-[1081px] leading-[30px]",
  "absolute top-[311px] left-[1086px] leading-[30px]",
  "absolute top-[413px] left-[1086px] leading-[30px]",
  "absolute top-[515px] left-[1088px] leading-[30px]"
]

//Dynamic Class Of Full Post Content
const FullContent = [
  "absolute top-[810px] left-[229px] text-base leading-[36px] font-medium inline-block w-[696px] h-[194px]",
  "absolute top-[1284px] left-[229px] text-base leading-[36px] font-medium text-gray-300 inline-block w-[696px] h-[194px] opacity-[0.5]",
  "absolute top-[1758px] left-[220px] text-base leading-[36px] font-medium text-gray-300 inline-block w-[696px] h-[194px] opacity-[0.5]"
]

const Timing =[
  "absolute top-[757px] left-[878px] text-lg font-medium text-royalblue text-center inline-block w-32 h-[21px]",
  "absolute top-[1231px] left-[894px] text-lg font-medium text-royalblue text-center inline-block w-32 h-[21px]",
  "absolute top-[1705px] left-[894px] text-lg font-medium text-royalblue text-center inline-block w-32 h-[21px]"
]
  return (
    <div className="relative bg-text-white w-full h-[3720px] overflow-hidden text-left text-4xs text-text-white font-eudoxus-sans">
      <img
        className="absolute top-[1959px] left-[1390px] w-[530px] h-[609px] opacity-[0.76]"
        alt=""
        src="../ellipse-109.svg"
      />
      <div className="absolute top-[5253px] left-[685px] text-[72px] leading-[89px] font-extrabold text-black text-center hidden">
        We are in Media
      </div>
      <div className="absolute top-[4074px] left-[0px] bg-gray-500 shadow-[0px_1px_4px_rgba(255,_255,_255,_0.25)_inset] [backdrop-filter:blur(16px)] w-[1920px] h-[66px]" />
      <div className="absolute top-[4085px] left-[823px] leading-[30px] opacity-[0.6]">
        Copyrght 2022 all right reserved
      </div>
      <div className="absolute top-[7px] left-[255px] w-[1410px] h-[71px]">
        <div className="absolute top-[0px] left-[0px] w-[1410px] h-[71px]">
          <img
            className="absolute top-[0px] left-[0px] w-[158px] h-[70px] object-cover"
            alt=""
            src="../image-44@2x.png"
          />
          <b className="absolute top-[29px] left-[215px]">Who We Are</b>
          <b className="absolute top-[29px] left-[357px]">Services</b>
          <b className="absolute top-[29px] left-[468px]">Blog</b>
          <b className="absolute top-[29px] left-[544px]">Portfolio</b>
          <b className="absolute top-[29px] left-[657px]">Expertise</b>
          <div className="absolute top-[11px] left-[1206px] w-[204px] h-[60px]">
            <div className="absolute top-[18px] left-[43px] font-medium">
              Have an Idea?
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-[100px] box-border w-[204px] h-[60px] border-[1px] border-solid border-gray-400" />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[1920px] h-[621px]" />
      <div className="absolute top-[2859px] left-[0px] bg-black w-[1920px] h-[876px]" />
      <div className="absolute top-[3672px] left-[0px] bg-gray-500 shadow-[0px_1px_4px_rgba(255,_255,_255,_0.25)_inset] [backdrop-filter:blur(16px)] w-[1920px] h-[66px]" />
      <div className="absolute top-[3683px] left-[823px] leading-[30px] opacity-[0.6]">
        Copyrght 2022 all right reserved
      </div>
      <div className="absolute top-[3100px] left-[192px] w-[1535px] h-[477px] text-6xs">
        <div className="absolute top-[0px] left-[0px] rounded-small bg-gray-500 shadow-[0px_1px_4px_rgba(255,_255,_255,_0.25)_inset] [backdrop-filter:blur(16px)] w-[1535px] h-[477px]" />
        <div className="absolute top-[103px] left-[252px] text-4xs leading-[37px] font-extrabold">
          Address
        </div>
        <div className="absolute top-[167px] left-[252px] leading-[25px] font-medium">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            B-78, Near Saket Metro
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Station, Gate no, 2, New
          </p>
          <p className="m-0">Delhi, 110030, India</p>
        </div>
        <div className="absolute top-[166px] left-[799px] leading-[25px] font-medium">{`IOS / Andriod Development `}</div>
        <div className="absolute top-[166px] left-[1091px] leading-[25px] font-medium">
          React Framework
        </div>
        <div className="absolute top-[166px] left-[1311px] leading-[25px] font-medium">
          Healthtech
        </div>
        <div className="absolute top-[209px] left-[1311px] leading-[25px] font-medium">{`Media & Entertainment`}</div>
        <div className="absolute top-[252px] left-[1311px] leading-[25px] font-medium">
          Real Estate
        </div>
        <div className="absolute top-[295px] left-[1311px] leading-[25px] font-medium">
          Internet
        </div>
        <div className="absolute top-[209px] left-[1091px] leading-[25px] font-medium">
          Angular
        </div>
        <div className="absolute top-[252px] left-[1091px] leading-[25px] font-medium">
          Node JS
        </div>
        <div className="absolute top-[295px] left-[1091px] leading-[25px] font-medium">
          Java
        </div>
        <div className="absolute top-[338px] left-[1091px] leading-[25px] font-medium">
          Python
        </div>
        <div className="absolute top-[381px] left-[1089px] leading-[25px] font-medium">
          Altium PCB Design
        </div>
        <div className="absolute top-[167px] left-[538px] leading-[25px] font-medium">
          Software Development
        </div>
        <div className="absolute top-[209px] left-[799px] leading-[25px] font-medium">
          Ebedded System Design
        </div>
        <div className="absolute top-[252px] left-[799px] leading-[25px] font-medium">
          Internet of Things
        </div>
        <div className="absolute top-[295px] left-[799px] leading-[25px] font-medium">
          Chatboot / Machine learning
        </div>
        <div className="absolute top-[338px] left-[799px] leading-[25px] font-medium">{`web design & Web`}</div>
        <div className="absolute top-[381px] left-[799px] leading-[25px] font-medium">
          Development
        </div>
        <div className="absolute top-[210px] left-[538px] leading-[25px] font-medium">
          Hardware Development
        </div>
        <div className="absolute top-[253px] left-[538px] leading-[25px] font-medium">
          AI
        </div>
        <div className="absolute top-[296px] left-[538px] leading-[25px] font-medium">
          Design
        </div>
        <div className="absolute top-[249px] left-[252px] leading-[25px] font-medium">
          +91 813 093 7887
        </div>
        <div className="absolute top-[374px] left-[252px] leading-[25px] font-medium">
          +1 646 338 6179
        </div>
        <div className="absolute top-[292px] left-[252px] leading-[25px] font-medium">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            1216, Broadway, 2nd floor
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            New York Down, NY, 10001,
          </p>
          <p className="m-0">USA</p>
        </div>
        <div className="absolute top-[103px] left-[538px] text-4xs leading-[37px] font-extrabold">
          Services
        </div>
        <div className="absolute top-[96px] left-[799px] text-4xs leading-[37px] font-extrabold">
          Expertise
        </div>
        <div className="absolute top-[96px] left-[1089px] text-4xs leading-[37px] font-extrabold">
          Technologies
        </div>
        <div className="absolute top-[96px] left-[1311px] text-4xs leading-[37px] font-extrabold">
          Industries
        </div>
      </div>
      <div className="absolute top-[2481px] left-[0px] rounded-t-large rounded-b-none bg-black w-[1920px] h-[378px]" />
      <img
        className="absolute top-[2911.5px] left-[2.71px] w-[1689.29px] h-[123.54px]"
        alt=""
        src="../vector-142.svg"
      />
      <div className="absolute top-[69.56%] left-[13.59%] text-[30px] leading-[32px] font-extrabold whitespace-pre-wrap">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          “Be the viewer or be the changer it's your choice”
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">&nbsp;</p>
        <p className="m-0">
          Don't be just a daydreamer let’s do it and build something great
        </p>
      </div>
      <button className="cursor-pointer p-0 bg-gray-500 absolute top-[2654px] left-[1389px] rounded-small shadow-[0px_1px_4px_rgba(255,_255,_255,_0.25)_inset] [backdrop-filter:blur(16px)] box-border w-[273px] h-[75px] border-[1px] border-solid border-text-white" />
      <div className="absolute top-[69.23%] left-[72.14%] text-xl leading-[39px] font-extrabold text-center">
        Have an Idea ?
      </div>
      <div className="absolute top-[71.4%] left-[73.54%] text-xl leading-[39px] font-extrabold text-center">
        lets Connect
      </div>
      <img
        className="absolute top-[2674px] left-[1605px] w-[35px] h-[35px] overflow-hidden"
        alt=""
        src="../evaarrowiosforwardfill.svg"
      />
      <img
        className="absolute top-[2501px] left-[1727px] w-[228px] h-[228px] object-cover"
        alt=""
        src="../callmehandgesture-2@2x.png"
      />
      <div className="absolute top-[2944px] left-[1334px] w-[103px] h-[103px]">
        <div className="absolute top-[0px] left-[0px] rounded-large bg-midnightblue shadow-[0px_12px_5px_rgba(255,_255,_255,_0.25)_inset] [backdrop-filter:blur(16px)] w-[103px] h-[103px]" />
        <div className="absolute top-[17px] left-[34px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[34px] h-[70px] overflow-hidden" />
      </div>
      <div className="absolute top-[2918px] left-[97px] w-[103px] h-[103px]">
        <div className="absolute top-[0px] left-[0px] rounded-large bg-darkslateblue shadow-[0px_12px_5px_rgba(255,_255,_255,_0.25)_inset] [backdrop-filter:blur(16px)] w-[103px] h-[103px]" />
        <img
          className="absolute top-[17px] left-[34px] w-[34px] h-[70px] overflow-hidden"
          alt=""
          src="../brandicofacebook.svg"
        />
      </div>
      <img
        className="absolute top-[2816px] left-[880px] w-[192.3px] h-[192.3px]"
        alt=""
        src="../group-2255.svg"
      />
      <img
        className="absolute top-[2954px] left-[1347px] w-[77px] h-[77px] overflow-hidden"
        alt=""
        src="../akariconslinkedinfill.svg"
      />
      <img
        className="absolute top-[2844px] left-[455.73px] w-[1339.16px] h-[234.36px]"
        alt=""
        src="../group-2278.svg"
      />
      <img
        className="absolute top-[139px] left-[0px] w-[1920px] h-[482px] object-cover"
        alt=""
        src="../rectangle-801@2x.png"
      />
      <div className="absolute top-[137px] left-[0px] bg-gray-300 w-[1920px] h-[484px] opacity-[0.4]" />
      <div className="absolute top-[137px] left-[0px] [background:linear-gradient(-7.53deg,_#000103_38.54%,_rgba(0,_1,_3,_0))] w-[1920px] h-[484px]" />


{/* Dynamic Class For title */}
{
  MyReverse.map((el, i)=>
<div className={MyTitleClass[i]}>
{
el.title
}
</div>
  )
}

      <div className="absolute top-[235px] left-[192px] w-[720px] h-[184px] text-[50px]">
        <div className="absolute top-[0px] left-[0px] leading-[69px] font-extrabold">
          Our blog
        </div>
        <div className="absolute top-[90px] left-[2px] text-4xs leading-[30px] inline-block w-[718px] h-[94px]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            Creating a product using full-stack development helps in providing a
            comprehensive approach towards product development.it helps you
            deliver your idea at a one place
          </p>
          <p className="[margin-block-start:0] [margin-block-end:0px]">
            It also allows in making sure that the end product is highly
            efficient at the user end. Also, it helps in providing a better
            management approach towards the backend system processes.
          </p>
        </div>
      </div>


{
  MyReverse.map((el, i)=>
<div className={MyDescriptionClass[i]}>
{el.content.slice(0, 80)}...
</div>
  )
}


      {/* White Border After and Description Title */}
      <div className="absolute top-[242.5px] left-[1040.5px] box-border w-px h-[268px] border-r-[1px] border-solid border-text-white" />
      <div className="absolute top-[267.5px] left-[1085.5px] box-border w-[618px] h-px border-t-[1px] border-solid border-text-white" />
      <div className="absolute top-[355.5px] left-[1090.5px] box-border w-[618px] h-px border-t-[1px] border-solid border-text-white" />
      <div className="absolute top-[457.5px] left-[1090.5px] box-border w-[618px] h-px border-t-[1px] border-solid border-text-white" />
      <div className="absolute top-[559.5px] left-[1092.5px] box-border w-[618px] h-px border-t-[1px] border-solid border-text-white" />

      
      <div className="absolute top-[2233px] left-[697px] w-[401.21px] h-[69.78px] text-3xs text-dimgray-100 font-menu-16px-medium">
        <div className="absolute top-[19.94px] left-[358.84px] text-6xs leading-[150%] font-medium text-royalblue inline-block w-[42.36px] h-[29.9px]">
          Next
        </div>
        <div className="absolute top-[0px] left-[269.13px] rounded-lg bg-whitesmoke-100 w-[69.78px] h-[69.78px] text-6xs">
          <div className="absolute top-[16px] left-[27.89px] leading-[150%] font-medium">
            ...
          </div>
        </div>
        <div className="absolute top-[0px] left-[179.42px] rounded-lg bg-whitesmoke-100 w-[69.78px] h-[69.78px]">
          <div className="absolute top-[23px] left-[29.89px] leading-[150%] font-medium">
            3
          </div>
        </div>
        <div className="absolute top-[0px] left-[89.71px] rounded-lg bg-whitesmoke-100 w-[69.78px] h-[69.78px]">
          <div className="absolute top-[23px] left-[29.89px] leading-[150%] font-medium">
            2
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-royalblue w-[69.78px] h-[69.78px] text-text-white">
          <div className="absolute top-[23px] left-[29.89px] leading-[150%] font-medium">
            1
          </div>
        </div>
      </div>
      <div className="absolute top-[701px] left-[193px] rounded-small bg-gray-200 w-[1534px] h-[434px]" />
      <div className="absolute top-[1175px] left-[193px] rounded-small bg-whitesmoke-200 w-[1535px] h-[434px]" />
      <div className="absolute top-[1649px] left-[184px] rounded-small bg-whitesmoke-200 w-[1535px] h-[434px]" />

{/* Dynamic Time */}
 {
  MyReverse.map((el, i)=>
<div className={Timing[i]}>
{el.time}
</div>
  )
}

      <div className="absolute top-[721px] left-[229px] text-3xl leading-[89px] font-extrabold text-center">
        Our new design system
      </div>
      <div className="absolute top-[1195px] left-[229px] text-3xl leading-[89px] font-extrabold text-gray-300 text-center">
        Our new design system
      </div>
      <div className="absolute top-[1669px] left-[220px] text-3xl leading-[89px] font-extrabold text-gray-300 text-center">
        Our new design system
      </div>

{
  MyReverse.map((el, i)=>
<div className={FullContent[i]}>
{el.content.slice(0, 450)}
</div>
  )
}
      <input
        className="[border:none] bg-royalblue absolute top-[1031px] left-[229px] rounded-2xxl w-56 h-[62px]"
        type="text"
      />
      <div className="absolute top-[1979px] left-[220px] w-56 h-[62px]">
        <button className="cursor-pointer [border:none] p-0 bg-royalblue absolute top-[0px] left-[0px] rounded-2xxl w-56 h-[62px]" />
      </div>
      <b className="absolute top-[1047px] left-[263px] text-base">
        Read Full Post
      </b>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1505px] left-[229px] w-56 h-[62px]">
        <button className="cursor-pointer [border:none] p-0 bg-royalblue absolute top-[0px] left-[0px] rounded-2xxl w-56 h-[62px]" />
        <b className="absolute top-[16px] left-[35px] text-base font-eudoxus-sans text-text-white text-left">
          Read Full Post
        </b>
      </button>
      <b className="absolute top-[1995px] left-[254px] text-base">
        Read Full Post
      </b>
      <div className="absolute top-[716px] left-[1085px] w-[627px] h-[404px]">
        <div className="absolute top-[0px] left-[0px] w-[627px] h-[404px]">
          <div className="absolute top-[0px] left-[0px] rounded-small bg-royalblue shadow-[-2px_45px_37px_-7px_rgba(112,_118,_122,_0.19)] w-[627px] h-[404px]" />
        </div>
      </div>
      <div className="absolute top-[1190px] left-[1092px] w-[627px] h-[404px]">
        <div className="absolute top-[0px] left-[0px] w-[627px] h-[404px]">
          <div className="absolute top-[0px] left-[0px] rounded-small bg-royalblue shadow-[-2px_45px_37px_-7px_rgba(112,_118,_122,_0.19)] w-[627px] h-[404px]" />
        </div>
      </div>
      <div className="absolute top-[1664px] left-[1083px] w-[627px] h-[404px]">
        <div className="absolute top-[0px] left-[0px] w-[627px] h-[404px]">
          <div className="absolute top-[0px] left-[0px] rounded-small bg-royalblue shadow-[-2px_45px_37px_-7px_rgba(112,_118,_122,_0.19)] w-[627px] h-[404px]" />
        </div>
      </div>

        <img 
        className="absolute top-[731px] left-[1100px] rounded-small w-[597px] h-[374px] object-cover"
        alt=""
        src="../undefined-.jpg"
      />
      {/* <img
        className="absolute top-[731px] left-[1100px] rounded-small w-[597px] h-[374px] object-cover"
        alt=""
        src="../image-89@2x.png"
      /> */}
      <img
        className="absolute top-[1205px] left-[1107px] rounded-small w-[597px] h-[374px] object-cover"
        alt=""
        src="../image-90@2x.png"
      />
      <img
        className="absolute top-[1679px] left-[1098px] rounded-small w-[597px] h-[374px] object-cover"
        alt=""
        src="../image-91@2x.png"
      />
      <img
        className="absolute top-[1964px] left-[44px] w-[609px] h-[609px] opacity-[0.76]"
        alt=""
        src="../ellipse-108.svg"
      />
    </div>
  );
};

export default Blog;
