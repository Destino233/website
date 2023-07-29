import type { NextPage } from "next";
import Image from "next/image";

import HomeImage from "@/assets/images/home.png";
import Skeleton from "@/components/data/Skeleton";
import { Terminal } from "@/components/data/Terminal";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";
import { getProjectProps, type ProjectProps } from "@/lib/context/downloads";
import { useBstatsPlayers } from "@/lib/service/bstats";

const Home: NextPage<ProjectProps> = ({ project }) => {
  const { data: playerData } = useBstatsPlayers();

  return (
    <>
      <SEO
        title="主页"
        description="这是一个温馨和谐的服务器，有良好的社区氛围，自从2022开服以来我们努力创建一个环境良好的游戏社区，和玩家们度过了很多愉快的时光,在这里的日子将会是你值得回忆的美好时光"
        keywords={["FAQ服务器", "我的世界服务器", "minecraft", "vanilla","原版生存服务器"]}
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-26 lg:(pt-48 pb-46)">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            FAQ-花Q. <br />
            <span className="text-green-500">现代生存服务器.</span>
          </h1>
          <p className="text-xl mt-4">
            这是一个温馨和谐的服务器，有良好的社区氛围，自从2022开服以来我们努力创建一个环境良好的游戏社区，和玩家们度过了很多愉快的时光,在这里的日子将会是你值得回忆的美好时光
          </p>
          <div className="flex flex-row gap-4 mt-8">
            <Button variant="filled" href="/downloads">
              下载整合包
            </Button>
            <Button variant="outlined" href="https://docs.leavesmc.top" external>
              指令文档
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end">
          <Terminal project={project} />
        </div>
      </header>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              在线玩家&nbsp;
              {playerData ? (
                <span className="text-green-500">
                  {(playerData[0][1])}+
                </span>
              ) : (
                <Skeleton className="w-30 h-6 inline-block" />
              )}
              &nbsp;players
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              服务器开启白名单验证，需要填写问卷并审核通过后才可进服   审核通过后 请加入我们的QQ群：478171406
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps = getProjectProps("leaves");
