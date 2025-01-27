"use client";

import { use, useState } from "react";
import BoardView from "../BoardView";
import ListView from "../ListView";
import ProjectHeader from "../ProjectHeader";
import TimelineView from "../TimelineView";

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
      { 
        activeTab === "Board" && 
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      }
      {
        activeTab === "List" &&
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      }
       {
        activeTab === "Timeline" &&
        <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      }
    </div>
  )
}

export default Project