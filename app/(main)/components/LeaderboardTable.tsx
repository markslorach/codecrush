import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma/client";

import { revalidatePath } from 'next/cache'

const LeaderboardTable = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      score: "desc",
    },
  });

  

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Rank</TableHead>
          <TableHead>Username</TableHead>
          <TableHead className="text-right">Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.slice(0, 10).map((user, idx) => (
          <TableRow key={user.id}>
            <TableCell>#{idx + 1}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell className="text-right">{user.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LeaderboardTable;
