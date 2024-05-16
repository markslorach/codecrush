"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const isPrevDisabled = pathname === "/quiz/beginner";
  const isNextDisabled = pathname === "/quiz/advanced";

  return (
    <div className="flex space-x-2">
      <Link href={prevNavigation}>
        <Button disabled={isPrevDisabled} variant="outline">
          Prev
        </Button>
      </Link>

      <Link href={nextNavigation}>
        <Button disabled={isNextDisabled} variant="outline">
          Next
        </Button>
      </Link>
    </div>
  );
};

export default QuestionPagination;
