// components/AboutSection.js
import Image from "next/image";
import Road1 from "../../public/road_1.jpg"; // Adjust the path to your image

const AboutSection = () => {
  return (
    <section>
      <div className="mx-auto gap-10 max-w-3xl flex flex-col justify-center">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={Road1} className="rounded-xl" alt="Road Trip" />
          <h3 className="text-lg font-medium pt-8 pb-2">
            Bikes, Cars and Road Trips
          </h3>
          <p className="py-2">
            One of my absolute favorite things in the world is hitting the road,
            whether it’s on my trusty bike or behind the wheel of my car.
            There’s something magical about the open road.
          </p>
          <p className="py-2">
            In short, whether I'm revving up my bike for a quick coastal spin or
            packing the car for a long drive into the hills, road trips are my
            ultimate escape. The journey is always filled with incredible
            sights, good vibes, and a sense of freedom that’s hard to beat.
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={Road1} className="rounded-xl" alt="Sports" />
          <h3 className="text-lg font-medium pt-8 pb-2">
            Sports, Games and Physical Activities
          </h3>
          <p className="py-2">
            When I'm not coding or hitting the road, you'll probably find me on
            a court or a field, chasing after a shuttlecock, a ping pong ball,
            or a volleyball. Sports and games are my ultimate way to unwind and
            have fun.
          </p>
          <p className="py-2">
            In short, sports and games are a huge part of my life. They keep me
            active, help me unwind, and have introduced me to some amazing
            people. If you’re ever up for a game of badminton, a round of table
            tennis, or a volleyball match, I’m your guy. Let’s play and have
            some fun together!
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={Road1} className="rounded-xl" alt="Kundapura" />
          <h3 className="text-lg font-medium pt-8 pb-2">
            My Hometown, My Roots, Kundapuraaa
          </h3>
          <p className="py-2">
            Kundapur, my beloved hometown, holds a special place in my heart.
            Nestled along the picturesque coastline of Karnataka, Kundapur is
            more than just a place—it's where my roots are, and it's the
            backdrop of my most cherished memories.
          </p>
          <p className="py-2">
            Growing up in Kundapur was like living in a postcard. The town is
            surrounded by stunning natural beauty, from the serene beaches with
            their golden sands and turquoise waters to the lush greenery that
            makes every corner feel like a paradise. Watching the sunset over
            the Arabian Sea is a sight that never gets old and always reminds me
            of the beauty of home.
          </p>
          <p className="py-2">
            Kundapur is rich in culture and tradition. Festivals here are
            celebrated with great enthusiasm, bringing the entire town together
            in joyous harmony. From the vibrant colors of the local fairs to the
            rhythmic beats of traditional music, the cultural tapestry of
            Kundapur is as diverse as it is beautiful.
          </p>
          <p className="py-2">
            My emotional connection to Kundapur runs deep. It's where I learned
            to ride my first bike, where I played endless games with friends,
            and where every street holds a story from my childhood. The town has
            shaped who I am today, instilling in me a love for nature, a strong
            sense of community, and a deep appreciation for the simple joys of
            life.
          </p>
          <p className="py-2">
            In short, Kundapur is not just my hometown; it's my sanctuary. It's
            a place that has given me countless happy moments and continues to
            be a source of comfort and inspiration. No matter where life takes
            me, Kundapur will always be home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
