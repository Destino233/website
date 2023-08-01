import type { NextPage } from "next";
import Image from "next/image";

import DiscordIcon from "@/assets/icons/fontawesome/discord-brands.svg";
import GitHubIcon from "@/assets/icons/fontawesome/github-brands.svg";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";
import { useGitHubContributors } from "@/lib/service/github";

const HIDDEN_USERS = [49699333]; // dependabot

const Team: NextPage = () => {
  const { data: contributors } = useGitHubContributors();

  return (
    <>
      <SEO
        title="团队"
        description="认识LeavesMC背后的团队成员，这是一个专注于通过更快、更安全的软件改善游戏生态系统的Minecraft软件组织。"
        keywords={["leavesmc", "leaves", "minecraft", "team"]}
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-26 lg:(pt-48 pb-46) gap-16">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            认识我们的团队成员
          </h1>
          <p className="text-xl mt-4">
            认识LeavesMC背后的团队成员，这是一个专注于通过更快、更安全的软件改善游戏生态系统的Minecraft软件组织。
          </p>
          <div className="flex flex-row gap-4 mt-8">
            <Button variant="filled" href="/sponsors">
              赞助
            </Button>
            <Button
              variant="outlined"
              href="https://github.com/Destino233"
              external
            >
              GitHub (所有者)
            </Button>
            <Button
              variant="outlined"
              href="https://github.com/YanVoid"
              external
            >
              GitHub (开发者)
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end"></div>
      </header>
      <section
        id="owners"
        key="owners"
        className="px-4 py-8 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl font-medium mb-2">所有者</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <article
            className="border border-gray-300 dark:border-gray-700 rounded-md hover:shadow-md transition-shadow p-4"
          >
            <div className="flex flex-row gap-6">
              <div className="w-20 h-20 relative bg-gray-600 rounded-md overflow-clip ">
                <Image
                  alt="Destino233的头像"
                  src="https://avatars.githubusercontent.com/u/80521145?v=4"
                  objectFit="cover"
                  layout="fill"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 break-all">
                <span className="font-semibold">Destino233</span>
                <a
                  href="https://github.com/Destino233"
                  className="flex flex-row items-center gap-2 mt-2 text-green-800 dark:text-green-300 text-sm font-medium"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHubIcon className="w-4 h-4 fill-gray-700 dark:fill-gray-300" />
                  Destino233
                </a>
              </div>
            </div>
          </article>
          <article
            className="border border-gray-300 dark:border-gray-700 rounded-md hover:shadow-md transition-shadow p-4"
          >
            <div className="flex flex-row gap-6">
              <div className="w-20 h-20 relative bg-gray-600 rounded-md overflow-clip ">
                <Image
                  alt="YanVoid的头像"
                  src="https://avatars.githubusercontent.com/u/56199199?v=4"
                  objectFit="cover"
                  layout="fill"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 break-all">
                <span className="font-semibold">YanVoid</span>
                <a
                  href="https://github.com/YanVoid"
                  className="flex flex-row items-center gap-2 mt-2 text-green-800 dark:text-green-300 text-sm                  font-medium"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHubIcon className="w-4 h-4 fill-gray-700 dark:fill-gray-300" />
                  YanVoid
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* 剩下的代码没有改变，但是请注意，现在页面只显示了两个团队成员：Destino233和YanVoid。如果您需要添加或删除其他团队成员，请修改JSON文件，并相应地更新页面代码。 */}
    </>
  );
};

export default Team;
