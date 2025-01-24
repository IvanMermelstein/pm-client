"use client";

import { use, useState } from "react";
import ProjectHeader from "../ProjectHeader";

type Props = {
  params: Promise<{id: string}>
}

const Project = ({ params }: Props) => {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default Project