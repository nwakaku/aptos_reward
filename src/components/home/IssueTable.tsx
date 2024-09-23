import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const invoices = [
  {
    index: "1",
    companyName: "Krane",
    totalAmount: "$250.00",
    actions: "View Issues",
    desc: "We audited the sepc256r1 ecdsa verify in FreshCryptoLib. This repo contains the test files we used to conduct it.",
  },
  {
    index: "2",
    companyName: "Github",
    totalAmount: "$150.00",
    actions: "View Issues",
    desc: "We audited the sepc256r1 ecdsa verify in FreshCryptoLib. This repo contains the test files we used to conduct it.",
  },
  {
    index: "3",
    companyName: "Meta",
    totalAmount: "$350.00",
    actions: "View Issues",
    desc: "We audited the sepc256r1 ecdsa verify in FreshCryptoLib. This repo contains the test files we used to conduct it.",
  },
  {
    index: "4",
    companyName: "Google",
    totalAmount: "$450.00",
    actions: "View Issues",
    desc: "We audited the sepc256r1 ecdsa verify in FreshCryptoLib. This repo contains the test files we used to conduct it.",
  },
  {
    index: "5",
    companyName: "Tesla",
    totalAmount: "$550.00",
    actions: "View Issues",
    desc: "We audited the sepc256r1 ecdsa verify in FreshCryptoLib. This repo contains the test files we used to conduct it.",
  },
];

export function IssueTable() {
  return (
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
          {invoices.map((invoice) => (
            <TableRow key={invoice.index}>
              <TableCell className="font-medium">{invoice.index}</TableCell>
              <TableCell>
                <Badge>{invoice.companyName}</Badge>
              </TableCell>
              <TableCell className="underline cursor-pointer">{invoice.companyName}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              <TableCell className="text-center underline cursor-pointer">{invoice.actions}</TableCell>
              <TableCell className="text-center">{invoice.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
