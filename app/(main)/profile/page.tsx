"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div>
      Profile
      <Link href="/dashboard">Dashboard</Link>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
};

export default Profile;
