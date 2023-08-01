import { NextPage } from "next";
import LeavesIcon from "@/assets/brand/leaves.svg";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import SEO from "@/components/util/SEO";

const Downloads: NextPage = () => {
  return (
    <>
      <SEO
        title="下载"
        description="在这里找到我们的软件下载 - 包括 FAQ 服务器客户端 [基于 PCL2] 和 Leaves。"
        keywords={[
          "faqmc",
          "faq",
          "server",
          "minecraft",
          "paper",
          "pcl2",
          "leavesmc",
          "minecraft",
          "vanilla",
          "leaves",
          "downloads",
        ]}
      />
      <header className="max-w-7xl flex flex-col items-center mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-26) gap-2">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          下载
        </h1>
        <p className="text-xl text-center mb-6">
          {"选择您要下载的软件。"}
        </p>
        <div className="grid md:grid-cols-3 lg:mt-6 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="leaves"
            name="Leaves"
            icon={LeavesIcon}
            description="Leaves 是一个 Minecraft 游戏服务器，旨在修复损坏的 Vanilla 属性。"
            download
          />
        </div>
      </header>
    </>
  );
};

export default Downloads;
