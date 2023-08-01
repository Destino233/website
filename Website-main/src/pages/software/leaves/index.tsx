import Image from "next/image";
import type { ReactElement } from "react";
import FAQIcon from "@/assets/brand/faq.svg";
import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import ChatBubbleLeftRightIcon from "@/assets/icons/heroicons/chat-bubble-left-right.svg";
import CodeBracketIcon from "@/assets/icons/heroicons/code-bracket.svg";
import CommunityImage from "@/assets/images/community.png";
import HomeImage from "@/assets/images/home.png";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SoftwareHeader from "@/components/layout/SoftwareHeader";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const FAQHome = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="FAQ 服务器客户端 [基于 PCL2]"
        description="FAQ 服务器客户端 [基于 PCL2] 是一个基于 Paper 的 Minecraft 游戏服务器客户端，旨在提供更好的性能和稳定性。"
        keywords={[
          "faqmc",
          "faq",
          "server",
          "minecraft",
          "paper",
          "pcl2",
        ]}
      />
      <SoftwareHeader
        id="faq"
        name="FAQ 服务器客户端 [基于 PCL2]"
        versionGroup={project.latestVersionGroup}
        icon={FAQIcon}
        header={
          <>
            更好的性能和稳定性
            <br />
            <span className="text-green-500">Minecraft 服务器客户端</span>
          </>
        }
        description="FAQ 服务器客户端 [基于 PCL2] 是一个基于 Paper 的 Minecraft 游戏服务器客户端，旨在提供更好的性能和稳定性。"
      />
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-primary-200 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            为什么选择 FAQ 服务器客户端 [基于 PCL2]？
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={BoltIcon}
              label="更快的性能"
              description="FAQ 服务器客户端 [基于 PCL2] 包含了许多改进和优化，大大提高了性能。这包括异步区块加载，以及对光照引擎、漏斗、实体等方面的主要优化。"
            />
            <FeatureCard
              icon={ChatBubbleLeftRightIcon}
              label="活跃的社区"
              description="FAQ 服务器客户端 [基于 PCL2] 拥有一个活跃的和不断壮大的社区，如果您遇到任何问题，可以在 Discord 上与我们交流，并获得实时支持。"
            />
            <FeatureCard
              icon={CodeBracketIcon}
              label="更好的稳定性"
              description="FAQ 服务器客户端 [基于 PCL2] 修复了许多 Paper 中存在的 Bug，提供了更好的稳定性和用户体验。"
            />
          </div>
        </div>
      </section>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row-reverse gap-8) xl:gap-24 items-center">
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
              入门指南
            </div>
            <p className="mt-2 text-lg md:text-xl">
              想要开始使用 FAQ 服务器客户端 [基于 PCL2]？请查看我们的入门指南，了解如何下载、安装和配置服务器客户端，并开始享受更好的 Minecraft 游戏体验。
            </p>
            <Button
              href="https://faqmc.com/docs/getting-started"
              className="mt-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看入门指南
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              社区支持
            </h2>
            <p className="mt-2 text-lg md:text-xl">
              FAQ 服务器客户端 [基于 PCL2] 拥有一个活跃的社区，您可以在 Discord 上和其他用户交流，并获得实时支持。
            </p>
            <Button
              href="https://discord.gg/faqmc"
              className="mt-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              加入 Discord 社区
            </Button>
          </div>
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={CommunityImage}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    project: await getProjectProps("faq"),
  },
});

export default FAQHome;
