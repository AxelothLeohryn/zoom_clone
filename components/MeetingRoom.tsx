import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantListing,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  //Explanation of !! in the next line: 
  //The double exclamation mark (!!) is a way to convert any data type to a boolean.
  //It is a shorthand way of converting any data type to a boolean.
  const isPersonalRoom = !!searchParams.get("personal")
  const [layout, setLayout] = useState<CallLayoutType>("speaker-right");
  const [showParticipants, setShowParticipants] = useState(false);
  const {useCallCallingState} = useCallStateHooks();
  const callingState = useCallCallingState();
  const router = useRouter();

  if(callingState !== CallingState.JOINED) return <Loader />

  const CallLayout = () => {
    switch (layout) {
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="right" />;
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition="left" />;

      default:
        return <PaginatedGridLayout />;
    }
  };

  return (
    <section className="relative w-full overflow-hiddenpt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px) hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-4 md:bottom-0 lg:w-10/12 flex items-center justify-center gap-2 flex-wrap">
        <CallControls onLeave={() => router.push("/")}/>

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
            {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    setLayout(item.toLowerCase() as CallLayoutType);
                  }}
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-red-700" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <CallStatsButton />
        <button
          onClick={() => {
            setShowParticipants((prev) => !prev);
          }}
        >
          <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <User size={20} className="text-white"/>
          </div>
        </button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
