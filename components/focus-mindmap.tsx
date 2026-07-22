"use client";

import { useEffect, useRef } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useNodesState,
  type Node,
  type Edge,
  type ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

/**
 * Interactive mind map: what other agencies spread across vs the one thing
 * NXT Remote does. Nodes are draggable for play; positions reset on reload
 * because they come from these initial arrays only (no persistence).
 */

const nodeBase = {
  borderRadius: 12,
  fontWeight: 700,
  fontSize: 13,
  padding: "10px 16px",
  boxShadow: "0 6px 0 -2px rgba(15,15,20,0.85), 0 10px 22px rgba(15,15,20,0.25)",
  border: "2px solid #16161d",
  color: "#16161d",
};

const others = (label: string): React.CSSProperties => ({
  ...nodeBase,
  background: "#F1F2F6",
});

const nxt = (): React.CSSProperties => ({
  ...nodeBase,
  background: "linear-gradient(135deg, #DCD4FF, #C9E9FB)",
});

const INITIAL_NODES: Node[] = [
  {
    id: "root",
    position: { x: 380, y: 10 },
    data: { label: "Your Agency Needs Talent" },
    style: {
      ...nodeBase,
      background: "linear-gradient(135deg, #4F2FE5, #09B4E4)",
      color: "#fff",
      border: "2px solid #16161d",
      fontSize: 15,
      padding: "12px 20px",
    },
    draggable: true,
  },
  {
    id: "others",
    position: { x: 120, y: 130 },
    data: { label: "Other Agencies: do everything" },
    style: { ...others(""), background: "#FFE3E0" },
  },
  { id: "o1", position: { x: 0, y: 240 }, data: { label: "Account Management" }, style: others("") },
  { id: "o2", position: { x: 205, y: 240 }, data: { label: "Virtual Assistants" }, style: others("") },
  { id: "o3", position: { x: 10, y: 320 }, data: { label: "Virtual Admin" }, style: others("") },
  { id: "o4", position: { x: 190, y: 320 }, data: { label: "Data Entry" }, style: others("") },
  { id: "o5", position: { x: 40, y: 400 }, data: { label: "Bookkeeping & Cold Calling" }, style: others("") },
  {
    id: "nxt",
    position: { x: 640, y: 130 },
    data: { label: "NXT Remote: 100% Digital Marketing" },
    style: {
      ...nodeBase,
      background: "linear-gradient(135deg, #4F2FE5, #09B4E4)",
      color: "#fff",
      fontSize: 14,
    },
  },
  { id: "n1", position: { x: 555, y: 240 }, data: { label: "SEO & Content" }, style: nxt() },
  { id: "n2", position: { x: 745, y: 240 }, data: { label: "Paid Advertising" }, style: nxt() },
  { id: "n3", position: { x: 545, y: 320 }, data: { label: "Social Media Ads" }, style: nxt() },
  { id: "n4", position: { x: 755, y: 320 }, data: { label: "Analytics" }, style: nxt() },
  { id: "n5", position: { x: 640, y: 400 }, data: { label: "AI Automation" }, style: nxt() },
];

const EDGES: Edge[] = [
  { id: "r-o", source: "root", target: "others", style: { stroke: "#9aa0ae", strokeWidth: 2.5, strokeDasharray: "6 4" } },
  { id: "r-n", source: "root", target: "nxt", animated: true, style: { stroke: "#4F2FE5", strokeWidth: 3 } },
  { id: "o-1", source: "others", target: "o1", style: { stroke: "#c3c7d1", strokeWidth: 2, strokeDasharray: "5 4" } },
  { id: "o-2", source: "others", target: "o2", style: { stroke: "#c3c7d1", strokeWidth: 2, strokeDasharray: "5 4" } },
  { id: "o-3", source: "others", target: "o3", style: { stroke: "#c3c7d1", strokeWidth: 2, strokeDasharray: "5 4" } },
  { id: "o-4", source: "others", target: "o4", style: { stroke: "#c3c7d1", strokeWidth: 2, strokeDasharray: "5 4" } },
  { id: "o-5", source: "others", target: "o5", style: { stroke: "#c3c7d1", strokeWidth: 2, strokeDasharray: "5 4" } },
  { id: "n-1", source: "nxt", target: "n1", animated: true, style: { stroke: "#4F2FE5", strokeWidth: 2.5 } },
  { id: "n-2", source: "nxt", target: "n2", animated: true, style: { stroke: "#2A7EE9", strokeWidth: 2.5 } },
  { id: "n-3", source: "nxt", target: "n3", animated: true, style: { stroke: "#09B4E4", strokeWidth: 2.5 } },
  { id: "n-4", source: "nxt", target: "n4", animated: true, style: { stroke: "#2A7EE9", strokeWidth: 2.5 } },
  { id: "n-5", source: "nxt", target: "n5", animated: true, style: { stroke: "#09B4E4", strokeWidth: 2.5 } },
];

export function FocusMindMap() {
  const [nodes, , onNodesChange] = useNodesState(INITIAL_NODES);
  const rfRef = useRef<ReactFlowInstance | null>(null);

  // Keep the whole map in view on phones and after orientation changes.
  useEffect(() => {
    const refit = () => rfRef.current?.fitView({ padding: 0.1 });
    window.addEventListener("resize", refit);
    return () => window.removeEventListener("resize", refit);
  }, []);

  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#F6F7FB] shadow-[0_24px_60px_rgba(10,10,26,0.45)] sm:h-[440px] md:h-[500px]">
      <ReactFlow
        nodes={nodes}
        edges={EDGES}
        onNodesChange={onNodesChange}
        onInit={(inst) => {
          rfRef.current = inst;
          requestAnimationFrame(() => inst.fitView({ padding: 0.1 }));
        }}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        minZoom={0.15}
        nodesConnectable={false}
        nodesDraggable
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        panOnScroll={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} color="#c9cdd8" gap={22} size={2} />
      </ReactFlow>
      <p className="pointer-events-none absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold text-neutral-500 shadow-sm">
        Drag the nodes around. They snap back on reload.
      </p>
    </div>
  );
}
