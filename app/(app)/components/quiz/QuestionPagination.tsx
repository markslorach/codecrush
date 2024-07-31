import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const QuestionPagination = () => {
  const pathname = usePathname();

  let prevNavigation = "";
  let nextNavigation = "";

  if (pathname === "/quiz/beginner") {
    prevNavigation = "/quiz/beginner";
    nextNavigation = "/quiz/intermediate";
  } else if (pathname === "/quiz/intermediate") {
    prevNavigation = "/quiz/beginner";
    nextNavigation = "/quiz/advanced";
  } else {
    prevNavigation = "/quiz/intermediate";
    nextNavigation = "/quiz/advanced";
  }

  const prevDisabled = pathname === "/quiz/beginner";
  const nextDisabled = pathname === "/quiz/advanced";

  return (
    <div className="flex space-x-2 justify-end">
      <Link href={prevNavigation}>
        <Button disabled={prevDisabled} variant="outline">
          Prev
        </Button>
      </Link>

      <Link href={nextNavigation}>
        <Button disabled={nextDisabled} variant="outline">
          Next
        </Button>
      </Link>
    </div>
  );
};

export default QuestionPagination;
