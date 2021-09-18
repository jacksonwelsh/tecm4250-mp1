<template>
  <div class="h-screen p-4 w-full bg-gray-900 text-gray-100">
    <div class="h-full border-8 border-green-500 flex items-center">
      <div class="container ml-8">
        <h1 class="text-6xl font-bold">
          How to use Twitter on an iPhone X or Above
        </h1>
        <subtitle class="text-xl font-light">Jackson Welsh – jcw0351</subtitle>
      </div>
    </div>
  </div>
  <div class="h-12 bg-gray-900"></div>
  <div class="container mx-auto mt-12">
    <div class="h-screen flex content-center flex-wrap">
      <h2 class="text-3xl font-bold mt-4 w-full">Introduction</h2>
      <p class="my-2">
        Have you wanted to connect with friends and family, even when they’re
        hundreds of miles away? Read about important events all around the
        world?
      </p>
      <p class="my-2">
        Twitter is a social network constructed around Tweets, short messages of
        280 characters or less, almost like short bulletin board postings. It’s
        focused around connecting people, allowing you to follow other users to
        see their Tweets and reply to them to join the conversation. While most
        of the people on Twitter will be strangers, you can follow friends and
        family to stay connected with what’s going on in their lives.
      </p>
      <p class="my-2">
        This manual is intended for seniors, age 70+, who have an iPhone X or
        later. If your iPhone has a "notch" at the top of the screen and no
        buttons on the front, your phone falls within these guidelines. You
        should be comfortable with basic usage of your phone- making calls,
        sending texts, and using apps.
      </p>
      <p class="my-2">
        Twitter is a public app on the Internet, so following Internet safety
        rules is critical. In general, don’t trust what people tell you (if you
        think it’s a family member, call them to verify if they are asking for
        money/personal information), don’t click on links you don’t trust, and
        don’t share anything you wouldn’t tell a stranger.
      </p>
      <p class="self-end">Let's get started.</p>
    </div>

    <h2 class="text-2xl font-semibold mt-4">1. Download the Twitter app</h2>

    <step>
      <template v-slot:step
        ><p>a. Touch the App Store icon on your phone.</p></template
      >
      <template v-slot:image
        ><img class="h-24" src="./assets/appstore.png"
      /></template>
    </step>

    <step
      ><template v-slot:step
        >b. Touch the search icon at the bottom of the screen.</template
      >
      <template v-slot:image
        ><img class="h-24" src="./assets/search.png"
      /></template>
    </step>

    <step>
      <template v-slot:step
        >c. Type "Twitter" into the search bar at the top of the
        screen.</template
      >
      <template v-slot:image>
        <img class="max-h-128" src="./assets/searchbar.png" />
      </template>
    </step>

    <step
      note="Make sure you're selecting the official Twiter app! It should look exactly like the screenshot to the right."
    >
      <template v-slot:step> d. Touch "Get" next to the Twitter app. </template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/gettwitter.png" />
      </template>
    </step>

    <step
      ><template v-slot:step
        >e. Double-click the side button to confirm the download.</template
      >
      <template v-slot:image
        ><img class="max-h-128" src="./assets/confirmdownload.png"
      /></template>
    </step>

    <step
      note="You'll have to wait for Twitter to download before this button appears. Depending on your internet speed, this could take a few seconds but can sometimes take up to ten minutes."
    >
      <template v-slot:step
        >f. Touch the "Open" button to open the Twitter app.</template
      >
      <template v-slot:image>
        <img class="max-h-128" src="./assets/opentwitter.jpg" />
      </template>
    </step>

    <h2 class="text-2xl font-semibold mt-4">2. Create an account</h2>

    <step
      ><template v-slot:step>a. Touch the "Create account" button.</template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/createacctbtn.png" />
      </template>
    </step>

    <step
      note="If you'd like, you can use your phone number in the second field."
    >
      <template v-slot:step
        >b. Fill in the name, email and birthdate fields with your
        information.</template
      >
      <template v-slot:image>
        <img class="max-h-128" src="./assets/personalinfo_unfilled.png" />
      </template>
    </step>

    <step
      warn="While you don't need to do this, disabling tracking protects your privacy on the web."
    >
      <template v-slot:step
        >c. Touch the switch on this page to disable tracking.</template
      >
      <template v-slot:image>
        <img class="max-h-128" src="./assets/tracking.png" />
      </template>
      /></step
    >

    <step
      ><template v-slot:step
        >d. Confirm all your personal information is correct and press "Next" at
        the bottom of the screen.</template
      >
      <template v-slot:image>
        <img class="max-h-128" src="./assets/personalinfo_filled.png" />
      </template>
    </step>

    <step
      note="If you used your phone number to register, check your text messages instead of your email."
    >
      <template v-slot:step>
        e. Check your email and enter the code sent to you by Twitter.
      </template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/verifyemail.png" />
      </template>
    </step>

    <step
      note="For maximum security, make sure your password is at least 12 characters and isn't used for any of your other accounts. The easiest way to make up a memorable password is to use a combination of three random words."
    >
      <template v-slot:step>f. Create a secure password.</template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/createpassword.png" />
      </template>
    </step>

    <h2 class="text-2xl font-semibold mt-4">3. Set up your profile.</h2>

    <div class="ml-4 mt-2">
      <p>a. Add a profile picture.</p>
      <step
        ><template v-slot:step
          >i. Touch the plus button in the middle of the screen.</template
        >
        <template v-slot:image>
          <img class="h-24" src="./assets/addpfp.png" />
        </template>
      </step>
      <step>
        <template v-slot:step>
          ii. Touch "allow access to all photos" on the popup that appears.
        </template>
      </step>
      <step>
        <template v-slot:step>
          iii. Select a picture from your photo library to use as your Twitter
          profile picture.
        </template>
        <template v-slot:image>
          <img class="max-h-128" src="./assets/picphoto.png" />
        </template>
      </step>
      <step>
        <template v-slot:step>
          iv. Touch "apply" on the photo editing screen.
        </template>
        <template v-slot:image>
          <img class="max-h-128" src="./assets/cropphoto.png" />
        </template>
      </step>
      <step>
        <template v-slot:step>
          v. Touch "done" to confirm your profile picture selection.
        </template>
        <template v-slot:image>
          <img class="max-h-128" src="./assets/savephoto.png" />
        </template>
      </step>
    </div>

    <step
      note="Your bio is something everyone can see at the top of your Twitter profile."
    >
      <template v-slot:step>
        b. Write something about yourself for your bio.
      </template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/bio.png" />
      </template>
    </step>

    <step>
      <template v-slot:step>
        c. When asked to allow notifications, touch "Skip for now."
      </template>
    </step>

    <step>
      <template v-slot:step>
        d. When asked to allow access to contacts, touch "Skip for now."
      </template>
    </step>

    <step note="These help Twitter make your feed more interesting.">
      <template v-slot:step>
        e. Pick topics you're interested in on the next screen.
      </template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/topics.png" />
      </template>
    </step>

    <step note="Following accounts adds their tweets to your feed.">
      <template v-slot:step>
        f. Touch "Follow" next to any accounts on the next two pages you think
        are interesting.
      </template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/followsuggestions.png" />
      </template>
    </step>
    <step
      note="Your username can be changed and is how people follow you on Twitter. Make it memorable!"
    >
      <template v-slot:step> g. Pick a username. </template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/username.png" />
      </template>
    </step>
    <step
      ><template v-slot:step>
        h. Select &quot;Don't allow&quot; when you're asked to allow
        notifications again.
      </template></step
    >

    <h2 class="text-2xl font-semibold mt-4">4. Follow your friends</h2>

    <step
      ><template v-slot:step
        >a. Touch the search icon at the bottom of the screen.</template
      >
      <img class="h-24" src="./assets/twsearch.png" />
    </step>

    <step note="For example, you can use @_jacksonwelsh to find mine."
      ><template v-slot:step>
        b. In the searchbar at the top of the page, type a friend's Twitter
        @username.
      </template></step
    >

    <step>
      <template v-slot:step>
        c. Touch the row that matches your friend's profile.
      </template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/profilerow.png" />
      </template>
    </step>

    <step
      ><template v-slot:step
        >d. On your friend&apos;s profile, touch the "Follow" button.</template
      >
      <template v-slot:image>
        <img src="./assets/followfriend.png" />
      </template>
    </step>

    <h2 class="text-2xl font-semibold mt-4">5. Send a Tweet</h2>

    <step>
      <template v-slot:step>
        a. Touch the button in the bottom right of your screen that looks like a
        quill.
      </template>
      <template v-slot:image>
        <img class="h-24" src="./assets/compose.png" />
      </template>
    </step>

    <step
      warn="Be careful what you post, since anyone in the world can see it!"
    >
      <template v-slot:step>
        b. Type something in the screen that appears, up to 280 characters.
      </template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/sendtweet.png" />
      </template>
    </step>

    <step
      ><template v-slot:step>
        c. Press the "Tweet" button at the top of the screen to send your Tweet.
      </template></step
    >

    <h2 class="text-2xl font-semibold mt-4">6. Like a Tweet</h2>

    <step
      ><template v-slot:step>a. Find a tweet that you'd like to like.</template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/unliked.png" />
      </template>
    </step>

    <step
      warn="Be mindful of what you like, as anyone can see the tweets you've liked."
    >
      <template v-slot:step>
        b. Touch the heart-shaped button. This is the Like button. </template
      ><template v-slot:image>
        <img class="max-h-128" src="./assets/liked.png" />
      </template>
    </step>

    <h2 class="text-2xl font-semibold mt-4">7. Retweet a Tweet</h2>

    <step
      ><template v-slot:step>a. Find a tweet you'd like to Retweet.</template>
      <template v-slot:image>
        <img class="max-h-128" src="./assets/unrt.png" />
      </template>
    </step>

    <step note="This adds the tweet to your profile.">
      <template v-slot:step>
        b. Touch the arrow button below the tweet. This is the Retweet button. </template
      ><template v-slot:image>
        <img class="max-h-128" src="./assets/rt.png" />
      </template>
    </step>

    <h2 class="text-2xl font-semibold mt-4">8. Reply to a Tweet</h2>
    <step>
      <template v-slot:step> a. Find a tweet you'd like to reply to. </template>
    </step>
    <step
      ><template v-slot:step
        >b. Touch the speech bubble icon below the Tweet.</template
      >
      <template v-slot:image>
        <img class="h-24" src="./assets/reply.png" />
      </template>
    </step>
    <step
      ><template v-slot:step
        >c. Type your reply in the screen that follows.</template
      >
      <template v-slot:image>
        <img class="max-h-128" src="./assets/sendreply.jpeg" />
      </template>
    </step>

    <step
      ><template v-slot:step>
        d. Touch "Reply" to send your reply.
      </template></step
    >

    <div class="container mx-auto mt-12">
      <div class="h-screen/2 flex content-center flex-wrap">
        <h2 class="text-3xl font-bold mt-4 w-full">Conclusion</h2>
        <p class="my-2">
          With this information, you should be able to navigate and participate
          on Twitter with ease! Once you follow your friends and family, you'll
          see their tweets and likes populating your home page and be able to
          interact with them whenever you want.
        </p>
        <p class="my-2">
          Now that you understand the basics of Twitter usage, you might be
          interested in learning some more advanced topics like Direct Messages,
          polls, and hashtags- those are all covered in our <a href="#" class="text-blue-600 underline">Advanced Twitter Guide.</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Step from "./components/Step.vue";
</script>
