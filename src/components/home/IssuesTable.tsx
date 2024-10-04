import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "lucide-react";
import { Button } from "../ui/button";

interface Issue {
  id: number;
  number: number;
  html_url: string;
  title: string;
  body: string;
  state: string;
  reward?: string;
}

interface IssueTableProps {
  issues: Issue[];
  onAllocatedReward: (issueId: number) => void;
  repoId?: number | null;
}
export default function IssuesTable({ issues, onAllocatedReward, repoId }: IssueTableProps) {
  const handleAllocateReward = async (issueId: number) => {
    await onAllocatedReward(issueId);
    console.log({issueId});
  };
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="bg-blue-500">
          <TableRow className="rounded-t-2xl">
            <TableHead className="w-[100px] text-white font-semibold">ID</TableHead>
            <TableHead className="text-white font-semibold">Title</TableHead>
            <TableHead className="w-[200px] text-white font-semibold">Status</TableHead>
            <TableHead className="text-right text-white font-semibold">Rewards </TableHead>
            <TableHead className="text-center text-white font-semibold">Description </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell className="font-medium">{issue.number}</TableCell>

              <TableCell className="underline cursor-pointer">
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer" className="font-semibold">
                  {issue.title}
                </a>
              </TableCell>
              <TableCell>
                <Badge className="bg-blue-300 text-white font-bold uppercase">{issue.state}</Badge>
              </TableCell>
              <TableCell className="text-center underline cursor-pointer">
                <Button variant="ghost" onClick={() => handleAllocateReward(issue.id)} className="text-red-500">
                  Allocate
                </Button>
              </TableCell>
              <TableCell className="line-clamp-3 overflow-hidden text-ellipsis">{issue.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
