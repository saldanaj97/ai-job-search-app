"use client";

import {type User} from "@supabase/supabase-js";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {createClient} from "~/utils/supabase/client";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";

export default function ProfileButton({user}: { user: User }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const ref = React.useRef<HTMLDivElement>(null);

  // close the modal if we click outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  if (!user) return null;
  return (
    <div ref={ref} className="hidden sm:block">
      <Avatar
        className="hover:cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <AvatarImage src="https://wallpapers.com/images/high/funny-profile-picture-7k1legjukiz1lju7.webp"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {menuOpen && (
        <div className="absolute right-5 top-16 z-50 flex w-72 flex-col rounded-lg bg-secondary bg-opacity-80 p-4">
          <div className="flex items-center">
            <div className="pr-4">
              <Avatar onClick={() => setMenuOpen(!menuOpen)}>
                <AvatarImage src="https://wallpapers.com/images/high/funny-profile-picture-7k1legjukiz1lju7.webp"/>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <p className="text-xl">Isaac Dyor</p>
              <p className="text-md text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <hr className="my-2 border-t-2 border-slate-600"/>
          <p className="py-2 text-lg text-muted-foreground">
            <Link
              onClick={() => setMenuOpen(false)}
              className="hover:text-muted-foreground/70"
              href="/profile"
            >
              Profile
            </Link>
          </p>
          <p className="py-2 text-lg text-muted-foreground">
            <Link
              onClick={() => setMenuOpen(false)}
              className="hover:text-muted-foreground/70"
              href="/settings"
            >
              Settings
            </Link>
          </p>

          <div className="py-2 text-lg text-muted-foreground">
            <button
              className="hover:text-muted-foreground/70"
              onClick={() =>
                signOut().then(() => {
                  setMenuOpen(false);
                  router.refresh();
                })
              }
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}