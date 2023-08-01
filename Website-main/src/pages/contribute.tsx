import type { NextPage } from "next";

import ChattingIllustration from "@/assets/illustrations/undraw/chatting.svg";
import CodeReviewIllustration from "@/assets/illustrations/undraw/code-review.svg";
import KnowledgeIllustration from "@/assets/illustrations/undraw/knowledge.svg";
import SavingsIllustration from "@/assets/illustrations/undraw/savings.svg";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const MinecraftServerFAQ: NextPage = () => (
  <>
    <SEO
      title="Frequently Asked Questions"
      description="Find answers to frequently asked questions about our Minecraft server."
      keywords={["minecraft", "faq", "server"]}
    />
    <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
      <div className="flex-1">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          Minecraft 服务器常见问题解答
        </h1>
        <p className="text-xl mt-4">
          {
            "在这里，您可以了解到有关我们的 Minecraft 服务器的常见问题及其解答。"
          }
        </p>
        <div className="flex flex-row gap-4 mt-8"></div>
      </div>
      <div className="flex-1 lg:flex hidden justify-end"></div>
    </header>
    <section
      id="rules"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">服务器规则</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          请确保您已阅读并了解我们的服务器规则，以确保服务器中的良好游戏体验。
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="/rules" dense>
            查看规则
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <SavingsIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="connect"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">如何连接服务器</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          以下是连接我们的 Minecraft 服务器所需的步骤和信息。
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://docs.destino.top/minecraft/connect"
            external
            dense
          >
            查看教程
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
        <h2 className="font-medium text-2xl md:text-4xl">技术支持</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          如果您在 Minecraft 服务器上遇到问题，请参考以下技术支持信息。
        </p>
        <div className="flex flex-row gap-4 mt-8">
         <Button
            variant="filled"
            href="https://docs.destino.top/minecraft/support"
            external
            dense
          >
            查看文档
          </Button       </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <KnowledgeIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="chat"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="lg:flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">聊天规则</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          请阅读我们的聊天规则，以确保在服务器上保持尊重和秩序。
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="/rules#chat" dense>
            查看规则
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <ChattingIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
  </>
);
