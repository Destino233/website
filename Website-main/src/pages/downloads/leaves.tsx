import { ReactElement } from "react";
import LeavesIcon from "@/assets/brand/leaves.svg";
import SoftwareDownload from "@/components/layout/SoftwareDownload";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const LeavesDownloads = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="Leaves 下载"
        description="下载 Leaves，我们的 Minecraft 服务器软件，提供无与伦比的性能和稳定性。"
        keywords={[
          "leavesmc",
          "Minecraft",
          "vanilla",
          "leaves",
          "downloads",
          "jar",
        ]}
      />
      <SoftwareDownload
        id="leaves"
        project={project}
        icon={LeavesIcon}
        description="下载 Leaves，我们的 Minecraft 服务器软件，提供无与伦比的性能和稳定性。"
        experimentalWarning="下载 Leaves 的实验版本，我们的 Minecraft 服务器软件，提供无与伦比的性能和稳定性。请谨慎操作！"
      />
    </>
  );
};

export default LeavesDownloads;

export const getStaticProps = getProjectProps("leaves");
