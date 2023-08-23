import type { FC } from "react";

const CAUTIONS: string[] = [
  "PCでご覧ください。スマホ・タブレット非対応です。",
  "各ステージはそれ単体で解くことができます。大謎のようなものはありません。「Clear!」と表示されたらステージクリアです。",
  "ステージをクリアすると数字が手に入ります。それらの数字をすべて掛けた値を「Checker」で入力すると、クリア画像が手に入ります。",
  "ソースコードを見る必要はありません。",
  "基本的には数字の小さい順に解くことをオススメします。また、リトライする際は、F5キーを押すなどしてページをリロードしてください。",
];

interface Stage {
  url: string;
  text: string;
}

const STAGES: Stage[] = [
  { url: "/stages/stage1.html", text: "1" },
  { url: "/stages/stage2.html", text: "2" },
  { url: "/stages/stage3.html", text: "3" },
  { url: "/stages/stage4-1.html", text: "4-1" },
  { url: "/stages/stage4-2.html", text: "4-2" },
  { url: "/stages/stage5.html", text: "5" },
  { url: "/stages/stage6.html", text: "6" },
  { url: "/stages/stage7.html", text: "7" },
  { url: "/stages/stage8.html", text: "8" },
  { url: "/stages/stage9-1.html", text: "9-1" },
  { url: "/stages/stage9-2.html", text: "9-2" },
  { url: "/stages/stage10.html", text: "10" },
];

interface LinkButtonProps {
  href: string;
  children: string;
}
const LinkButton: FC<LinkButtonProps> = ({ href, children }) => (
  <a
    border="~ solid black"
    m="t-2"
    p="y-3"
    className="no-underline block w-full leading-none transition duration-500 cursor-pointer hover:bg-black hover:text-white text-2xl text-black text-center"
    href={href}
  >
    {children}
  </a>
);

export const Index: FC = () => {
  return (
    <>
      <div className="flex mb-4">
        <div className="w-1/2">
          <div text="center 8xl" w="full" m="y-12 x-auto">
            Haze
          </div>
          <div p="y-2 x-4">
            <div text="4xl" m="b-3" border="b-1 black b-solid">
              制作
            </div>
            <div text="3xl" m="t-3 b-5 x-auto">
              kaiiy
            </div>
            <div text="4xl" border="b-1 black b-solid">
              注意事項
            </div>
            <ul p="l-7">
              {CAUTIONS.map((text) => (
                <li text="2xl" m="y-2">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex flex-col pr-5">
          {STAGES.map((stage) => (
            <LinkButton href={stage.url}>{stage.text}</LinkButton>
          ))}
          <LinkButton href="/hint.html">Checker</LinkButton>
          <br />
          <LinkButton href="/hint.html">Hints</LinkButton>
        </div>
      </div>
    </>
  );
};