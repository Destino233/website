import type { NextPage } from "next";

import ChattingIllustration from "@/assets/illustrations/undraw/chatting.svg";
import CodeReviewIllustration from "@/assets/illustrations/undraw/code-review.svg";
import KnowledgeIllustration from "@/assets/illustrations/undraw/knowledge.svg";
import SavingsIllustration from "@/assets/illustrations/undraw/savings.svg";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const Contribute: NextPage = () => (
  <>
    <SEO
      title="Contributing"
      description="Without contributors our projects wouldn't be possible. Find out how you can help."
      keywords={["leavesmc", "leaves", "minecraft", "sponsor", "contributing"]}
    />
    <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
      <div className="flex-1">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          You can contribute
        </h1>
        <p className="text-xl mt-4">
          {
            "Our projects are based on community contributions and wouldn't be possible without them. There are a lot of ways to contribute, even without programming knowledge."
          }
        </p>
        <div className="flex flex-row gap-4 mt-8"></div>
      </div>
      <div className="flex-1 lg:flex hidden justify-end"></div>
    </header>
    <section
      id="donate"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">...Financially</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          LeavesMC 使用 Pateron 和 AFDIAN 管理各种循环支出，主要涉及基础设施。
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="/sponsors" dense>
            了解更多
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <SavingsIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="code"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">...Code</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          我们项目中的大部分代码都是由社区成员编写的，我们欢迎你的贡献！
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/LeavesMC/Leaves/blob/master/CONTRIBUTING.md"
            external
            dense
          >
            了解更多
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <CodeReviewIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="support"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="lg:flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">...Support</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          大量用户意味着大量问题。每个人都可以在我们的 Discord 服务器或论坛上回答问题或提供支持。
        </p>
        <div className="flex flex-row gap-4 mt-8">
         <Button
            variant="filled"
            href="https://discord.gg/leaves"
            external
            dense
          >
            了解更多
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <ChattingIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="docs"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">...Docs</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          文档是维护项目的重要组成部分。如果你发现文档中的错误或有改进建议，请告诉我们！
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/LeavesMC/LeavesDocs/blob/master/CONTRIBUTING.md"
            external
            dense
          >
            了解更多
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <KnowledgeIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
  </>
);

export default Contribute;
