import React from "react";
import ImageGallery from "react-image-gallery";
import MainLayout from "../layout/MainLayout";

const images = [
  {
    original: "../assets/img/lol10.jpg",
    thumbnail: "../assets/img/lol10.jpg",
  },
  {
    original: "../assets/img/lol6.jpg",
    thumbnail: "../assets/img/lol6.jpg",
  },
  {
    original: "../assets/img/lol7.jpg",
    thumbnail: "../assets/img/lol7.jpg",
  },
  {
    original: "../assets/img/lol8.jpg",
    thumbnail: "../assets/img/lol8.jpg",
  },
  {
    original: "../assets/img/lol9.jpg",
    thumbnail: "../assets/img/lol9.jpg",
  },
];
const images2 = [
  {
    original: "../assets/img/lol5.jpg",
    thumbnail: "../assets/img/lol5.jpg",
  },
  {
    original: "../assets/img/lol4.jpg",
    thumbnail: "../assets/img/lol4.jpg",
  },
  {
    original: "../assets/img/lol3.jpg",
    thumbnail: "../assets/img/lol3.jpg",
  },
  {
    original: "../assets/img/lol1.jpg",
    thumbnail: "../assets/img/lol1.jpg",
  },
  {
    original: "../assets/img/lol2.jpg",
    thumbnail: "../assets/img/lol2.jpg",
  },
];
const myanmar = () => {
  return (
    <MainLayout>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat h-[16rem] md:h-[20rem] lg:h-[28rem]"
        style={{
          backgroundPosition: "50%",
          backgroundImage: 'url("/assets/img/yangon.jpg")',
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="flex h-full items-center justify-center text-center text-white">
            <h1 className="mb-6 text-2xl md:text-4xl font-bold">
              ミャンマープロジェクト
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-4 md:pl-10 col-span-1">
            <h1 className="font-bold text-2xl md:text-3xl text-gray-700 mt-8 text-center md:text-left">
              サクラタワー
            </h1>
            <div className="lg:flex block">
              <div className="flex text-justify">
                <div className="text-lg font-medium w-auto lg:h-auto md:py-4 pb-8 text-gray-500 max-w-4xl py-4 indent-4">
                  <p>
                    サクラタワーは（株）日本設計、（株）鴻池組と、日本企業の手で1999年に完成しました。ヤンゴンのビジネス及び政治のまさに中心地区に位置し、総貸室面積12,425㎡、高さは地上約100mの20階建て耐震設計オフィスビルです。
                  </p>
                  <br></br>
                  <p>
                    地上1階～3階は総貸室面積1,183㎡の小売業エリアと
                    なっており、主要航空会社のチケットオフィスや旅行代理店、歯医者、ショールームなどが入居しています
                  </p>
                  <br></br>
                  5階から19階にはJICA、三菱商事、日経、NHK等、グローバルに活躍する企業や団体が入居しています。
                  <br></br>
                  <br></br>
                  Address: 339 Bogyoke Aung San Road, Kyauktada Township,
                  Yangon, Myanmar<br></br>
                  Tel: (95 1) 255 255<br></br>
                  E-mail: stowersales@myanmar.com.mm<br></br> Website:
                  <a href="http://www.sakura-tower-yangon.com">
                    http://www.sakura-tower-yangon.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:mt-12 md:p-8 p-4">
            <ImageGallery items={images} className="gallery-thumb" />
          </div>
        </div>
        <div className="px-10">
          <div className="text-2xl md:text-3xl font-bold box-content w-auto p-8 border-0 bg-[#f6fafd] my-4 text-gray-700">
            設備
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="font-normal text-base mt-4 text-gray-500 col-span-1">
                - 24時間フルバックアップの自家発電システム<br></br>-
                24時間体制の監視カメラと警備員による24時間保守警備<br></br>-
                OA機器用床下配線<br></br>-
                高い国際基準に合わせて設計された耐震性
                <br></br>- 火災報知機、スプリンクラー、避難口を各階に設置
                <br></br>- 専用インターネットアクセス
              </div>
              <div className="font-normal text-base mt-4 text-gray-500 col-span-1">
                - 4基のハイスピードエレベーター（日立製、三菱電機製）<br></br>-
                貨物専用エレベーター<br></br>-
                44台収容可能な機械式パーキングシステム<br></br>- IDD電話
                <br></br>- 衛星テレビ、ケーブルテレビ<br></br>-
                電話回線：400回線
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-4 md:pl-10 col-span-1">
            <h1 className="font-bold text-2xl md:text-3xl text-gray-700 text-center md:text-left py-2">
              サクラレジデンス
            </h1>
            <div className="lg:flex block">
              <div className="flex text-justify">
                <div className="text-lg font-medium w-auto lg:h-auto md:py-4 text-gray-500 max-w-4xl py-4 pb-8 indent-4">
                  サクラレジデンスは、1998年にヤンゴンで最初に作られた海外駐在員向けの世界水準のサービスを備えた高級サービスアパートメントであり、1泊からもご利用いただける高級ホテルでもあります。閑静な住宅地やインヤ通りのヤシ並木に程近い場所に位置し、ヤンゴン国際空港やビジネス街からほんの数分という好立地にあります。
                  <br></br>
                  <br></br>
                  レジデンス内からは、黄金に輝くシュエダゴンパゴダの素晴らしい景色をご覧頂けます。
                  <br></br>
                  <br></br>
                  <p>
                    サクラレジデンスは、お客様が訪れた瞬間から「我が家」と呼ぶに相応しい、ワンルームから広々とした3ベッドルームまでの261室の家具付きのお部屋、広く開放的な庭園やプール、美味しい料理をいつでも味わうことのできるレストラン「カフェ・ティリピセヤ」等、リラックスして快適にお過ごしいただける各種サービスをご用意しています。
                  </p>
                  <br></br>
                  Address: 9 Inya Road, Block 10, Kamaryut Township, Yangon,
                  Myanmar
                  <br></br>
                  Tel: (95 1) 525 001<br></br>
                  E-mail:<br></br>rsvn@sakuraresidence.com.mm,
                  sales@sakuraresidence.com.mm
                  <br></br> Website:
                  <a href="http://www.sakura-residence-yangon.com/">
                    http://www.sakura-residence-yangon.com/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:mt-12 md:p-8 p-4">
            <ImageGallery items={images2} />
          </div>
        </div>
        <div className="px-10">
          <div className="text-3xl font-bold box-content w-auto p-10 border-0 bg-[#f6fafd] my-4 text-gray-700">
            <div className=" text-gray-500 grid grid-cols-1 md:grid-cols-2">
              <div className="col-span-1">
                設備
                <div className="font-normal text-base mt-8 sm:ml-5 block">
                  24時間体制のセキュリティとメンテナンス<br></br>-
                  コンシェルジュサービス<br></br>-
                  毎日のハウスキーピングサービス
                  <br></br>- スイミングプール、フィットネスセンター
                  <br></br>- レストラン、バー、バーベキューテラス<br></br>-
                  キッズルーム<br></br>- ルームサービス<br></br>- 小会議室
                  <br></br>- ビジネスセンター<br></br>
                  （各部屋からのインターネットアクセスも可能　※要契約）<br></br>
                  - 屋根付き駐車場完備<br></br>- 車での送迎サービス<br></br>-
                  コンビニエンスストア
                </div>
              </div>
              <div className="col-span-1">
                調度品
                <div className="font-normal text-base mt-8">
                  - 個別操作可能な空調設備<br></br>- IDD電話<br></br>-
                  専用インターネットアクセス<br></br>- 多チャンネル衛星放送
                  <br></br>- 金庫<br></br>- 4口調理台、電動湯沸かし器<br></br>-
                  各種家電（洗濯乾燥機、冷凍冷蔵庫、炊飯器、オーブ<br></br>
                  &nbsp;&nbsp;ン機能付き電子レンジ、トースター、電気ポット、コー
                  <br></br>
                  &nbsp;&nbsp;ヒーメーカー、アイロン、ヘア･ドライヤー、ビデオ、小型ステレオ）
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default myanmar;
