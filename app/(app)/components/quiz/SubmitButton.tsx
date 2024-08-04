import { Button } from "@/components/ui/button";
import { Code, LoaderCircle } from "lucide-react";

type Props = {
  disabled: boolean;
  pending: boolean;
  handleSubmit: () => void;
};

const SubmitButton = ({ disabled, pending, handleSubmit }: Props) => {
  return (
    <Button
      onClick={handleSubmit}
      disabled={disabled}
      variant="outline"
      type="submit"
      className="w-full border-none bg-blue-500/80 py-6 transition-colors hover:bg-blue-500"
    >
      Submit
      {pending ? (
        <LoaderCircle className="ml-1.5 h-5 w-5 animate-spin" />
      ) : (
        <Code className="ml-1.5 h-5 w-5" />
      )}
    </Button>
  );
};

export default SubmitButton;
