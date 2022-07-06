import React from "react"
import LchannelsItem from "./LchannelsItem";
import Live1 from '../public/cosas/live1.jpeg';
import Live2 from '../public/cosas/live2.jpeg';
import Live3 from '../public/cosas/live3.jpeg';
import Live4 from '../public/cosas/live4.jpeg';
import Live5 from '../public/cosas/live5.jpeg';
import Live6 from '../public/cosas/live6.jpeg';
import Live7 from '../public/cosas/live7.jpeg';
import Live8 from '../public/cosas/live8.jpeg';
import Live9 from '../public/cosas/live9.jpeg';
import Live10 from '../public/cosas/live10.jpeg';


const Lchannels= () => {

    return (

        <div id='live' className='p-1 md:p-8 sm:items-center'>
      <h2 className='text-2xl font-bold ml-2'>
        <span className='text-[#eca850]'>Live Channels</span> we think you&apos;ll
        like
      </h2>
      {/* Container */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>
        <LchannelsItem 
          img={Live1}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/4c0adb78-f81c-4dd3-bca7-61146eb163b9-profile_image-70x70.png'
          title='CHARITY STREAM! Any support is ap...'
          user='Natt'
          game='Call of Duty: Warzone'
          views='59'
        />
        <LchannelsItem
          img={Live2}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/5d92c6c6-69f6-4d4e-8fc3-aeb9da5e6260-profile_image-70x70.png'
          title='Deployable shield commin in clutch'
          user='50ZINT'
          game='Apex Legends'
          views='21'
        />
        <LchannelsItem
          img={Live3}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/26fac640-e78a-49f4-8ab2-8d12b92574c6-profile_image-70x70.png'
          title='LOL WITH NIJI AND FRIENDS!...'
          user='baoo'
          game='League of Legends'
          views='210'
        />
        <LchannelsItem
          img={Live4}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/jerma985-profile_image-447425e773e6fd5c-70x70.jpeg'
          title='Local Streamer stuck in a cave: sings...'
          user='Jerma985'
          game='One Hand Clapping'
          views='63'
        />
        <LchannelsItem
          img={Live5}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/bed3ea39-265b-4632-b866-598bb8c045dd-profile_image-70x70.png'
          title='BIG Mario Kart session'
          user='Bigpuffer'
          game='Mario Kart 8 Deluxe'
          views='10'
        />
        <LchannelsItem
          img={Live6}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/b3c347ed-1a7a-40a2-8bee-8a7c4426eb33-profile_image-70x70.png'
          title='Tripod Man Gains RP | Code: MFAM | @...'
          user='NICKMERCS'
          game='Dota 2'
          views='100'
        />
        <LchannelsItem
          img={Live7}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/25911b2f-6077-4e46-b66e-25f1655f09f6-profile_image-70x70.png'
          title='JESUS LOVES YOU!!!'
          user='coletteleclair'
          game='Just Chatting'
          views='42'
        />
        <LchannelsItem
          img={Live8}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-70x70.png'
          title='Covert_Muffin teaching Star Wars...'
          user='JamesDoneQuick'
          game='Star Wars: Jedi Knight II - Jedi Outcast'
          views='88'
        />
        <LchannelsItem
          img={Live9}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
          title='Grinding'
          user='shroud'
          game='The Cycle: Frontier'
          views='60'
        />
        <LchannelsItem
          img={Live10}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/61f568bf-884b-4126-b17c-fc525c6d3bd4-profile_image-70x70.png'
          title='GRILLIN / CHILLEN! Steak / Burgers...'
          user='KennyGoodloe'
          game='Just Chatting'
          views='17'
        />
      </div>
    </div>
    )
}

export default Lchannels;