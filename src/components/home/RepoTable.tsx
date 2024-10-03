import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Repository, RepositoryTableProps } from "@/types";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const organisations = [
  { name: "nwakaku", shortName: "Nwakaku", chipStyle: "bg-blue-500 text-white" },
  { name: "aptos-labs", shortName: "AptosLabs", chipStyle: "bg-red-500 text-white" },
  { name: "worldcoin", shortName: "Worldcoin", chipStyle: "bg-black text-white" },
];

const RepoTable: React.FC<RepositoryTableProps> = ({ onRepoSelect }) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [repoIds, setRepoIds] = useState<bigint[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // assume searchTerm is a state variable
  const [rewards, setRewards] = useState<any[]>([]);

  const fetchRepos = async () => {
    const allRepos: Repository[] = [];
    for (const org of organisations) {
      const res = await axios.get(`https://api.github.com/users/${org.name}/repos`);
      const orgRepo = res.data.map((repo: Repository) => ({ ...repo, organisation: org.name }));
      allRepos.push(...orgRepo);
    }
    return allRepos;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      setRepos(data);
      setRepoIds(data.map((repo) => BigInt(repo.id)));
      console.log({ data }, "ppe");
    }
  }, [data]);

  const sortedRepos = useMemo(() => {
    if (!repos || !rewards) return [];
    return repos
      .map((repo, index) => ({
        ...repo,
        reward: rewards && rewards[index] !== undefined ? ethers.formatEther(rewards[index]) : "0",
      }))
      .sort((a, b) => parseFloat(b.reward) - parseFloat(a.reward));
  }, [repos, rewards]);

  const filteredRepos = useMemo(() => {
    if (!sortedRepos) return [];
    return searchTerm
      ? sortedRepos.filter(
          (repo) =>
            repo.organisation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase())),
        )
      : sortedRepos;
  }, [sortedRepos, searchTerm]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text--lg text-blue-500">Loading Reposistories....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <p className="text--lg text-blue-500">An Error occured Fetching Reposistories....</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full md:w-1/2 pb-6">
        <Input
          type="text"
          placeholder="Search by name, org or description"
          className="max-w-xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <Table>
          <TableHeader className="bg-blue-500">
            <TableRow className="rounded-t-2xl">
              <TableHead className="w-[100px] text-white font-semibold">Sr.No.</TableHead>
              <TableHead className="text-white font-semibold">Organisation </TableHead>
              <TableHead className="w-[200px] text-white font-semibold">Repo Name</TableHead>
              <TableHead className="text-right text-white font-semibold">Total Rewards </TableHead>
              <TableHead className="text-center text-white font-semibold">Actions</TableHead>
              <TableHead className="text-center text-white font-semibold">Description </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRepos.map((repo, index) => {
              const org = organisations.find((x) => x.name === repo.organisation);
              return (
                <TableRow key={repo.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <Badge>{org?.shortName}</Badge>
                  </TableCell>
                  <TableCell className="underline cursor-pointer">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="font-semibold">
                      {repo.name}
                    </a>
                  </TableCell>
                  <TableCell className="text-right">
                    {repo.reward !== "0" ? `${repo.reward} ETH` : "Loading..."}
                  </TableCell>
                  <TableCell className="text-center underline cursor-pointer">
                    <Button variant="ghost" onClick={() => onRepoSelect(repo)} className="text-red-500">
                      View Issues
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">{repo.description}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default RepoTable;
