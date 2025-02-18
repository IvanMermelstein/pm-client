"use client";

import ModalNewTask from "@/app/(components)/ModalNewTask";
import { use, useState } from "react";
import BoardView from "../BoardView";
import ListView from "../ListView";
import ProjectHeader from "../ProjectHeader";
import TableView from "../TableView";
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
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
      />
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
      {
        activeTab === "Timeline" &&
        <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      }
      {
      activeTab === "Table" &&
        <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      }
    </div>
  )
}

export default Project