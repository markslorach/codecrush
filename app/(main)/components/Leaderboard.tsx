import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/prisma/client";

const Leaderboard = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      score: "desc",
    },
  });

  return (
    <section className="border border-white/40 rounded-lg bg-white/5">
      <Table>
        <TableHeader className="h-20">
          <TableRow className="border-b-white/40">
            <TableHead className="text-white">Rank</TableHead>
            <TableHead className="text-white">Username</TableHead>
            <TableHead className="text-right text-white">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.slice(0, 10).map((user, idx) => (
            <TableRow className="border-white/20" key={user.id}>
              <TableCell>#{idx + 1}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell className="text-right">{user.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Leaderboard;
