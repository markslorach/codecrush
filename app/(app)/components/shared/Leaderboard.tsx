import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/lib/user";
import { User } from "@prisma/client";

const Leaderboard = async () => {
  const users = (await getAllUsers()) as User[];

  const filteredUsers = users.filter((user) => user.score > 0);

  return (
    <section className="rounded-md border border-white/40">
      <Table>
        <TableHeader className="h-20">
          <TableRow className="border-b-white/20 text-base">
            <TableHead>Rank</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.slice(0, 5).map((user, idx) => (
            <TableRow
              className={`${idx % 2 === 0 ? "bg-white/5" : ""} border-white/20`}
              key={user.id}
            >
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
