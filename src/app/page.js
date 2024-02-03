'use client'

import { useContext } from "react";
import Hero from "@/component/Hero"
import Content from "@/component/Content";
import WhoWeAre from "@/component/WhoWeAre";
import Contact from "@/component/Contact";
import OurTeam from "@/component/OurTeam";
import Notification from "@/component/Notification";
import { NotificationContext } from "@/component/NotificationContext";

export default function Home() {
  const { success } = useContext(NotificationContext);
   const showNoti=success.success;

  
  return (

    <>
    <main>
       <Hero/>
       <Content/>
       <WhoWeAre/>
       <Contact/>
       <OurTeam/>
{
  showNoti &&  <Notification message={success.message} success={success.success}/>
}
    </main>
    </>
  );
}
