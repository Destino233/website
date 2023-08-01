import type { NextPage } from "next";

import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import GlobeAmericasIcon from "@/assets/icons/heroicons/globe-americas.svg";
import HeartIcon from "@/assets/icons/heroicons/heart.svg";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const Sponsors: NextPage = () => {

  return (
    <>
      <SEO
        title="赞助商"
        description="没有赞助者，我们的项目将无法实现。了解如何帮助我们。"
        keywords={["leavesmc", "leaves", "minecraft", "赞助", "贡献"]}
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            赞助商
          </h1>
          <p className="text-xl mt-4">
            LeavesMC是一个开放的社区，管理社区需要支付服务、服务器和基础设施的费用。我们尽力保持成本的合理和可持续性，但仍然有一些不可避免的费用。
          </p>
          <div className="flex flex-row gap-4 mt-8">
            <Button
              variant="outlined"
              href="https://afdian.net/a/faqserver"
              external
            >
              爱发电
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end"></div>
      </header>
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-primary-200 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto py-2">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            为什么您应该捐赠
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={GlobeAmericasIcon}
              label="可持续性"
              description="捐款有助于保持LeavesMC的可持续性，使其对所有人开放。只有能够捐赠的人才应该这样做，如果不能捐赠，也不应该感到难过。"
            />
            <FeatureCard
              icon={BoltIcon}
              label="未来计划"
              description="我们需要升级我们的托管服务，以满足对我们的服务和API日益增长的需求。这将增加成本，我们希望通过爱发电的捐款来抵消这些成本。"
            />
            <FeatureCard
              icon={HeartIcon}
              label="回馈社区"
              description="如果我们收到的捐款超过我们的月度成本，我们可能会考虑以公平透明的方式向贡献者分配资金。"
            />
          </div>
        </div>
      </section>
    </>
  );
};

// TODO: 添加爱发电赞助商
export default Sponsors;
