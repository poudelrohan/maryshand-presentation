# Mary's Hand — 5-Minute Pitch Script

> **Read line by line.** Each line is one sentence or beat. Pause briefly between them.

---

## Slide 1 — Title

- Hi everyone, my name is Rohan from Bethune-Cookman University.
- Today I'm presenting our app Mary's Hand, a community app we built for Daytona Beach.
- It connects people to food, events, and AI-powered meal planning.

---

## Slide 2 — The Problem

- So food insecurity is a real issue in our area.
- What that means is people not knowing where their next meal is coming from.
- Nearly 62,000 people in our county deal with that.
- There are neighborhoods right around our campus classified as food deserts, meaning there's no grocery store within a mile.
- Our campus sits right in the middle of this.
- So we wanted to do something about it.

---

## Slide 3 — Research Evidence

- We looked at six peer-reviewed studies and federal reports to understand the full picture.
- Neighborhoods near our campus have incomes 48% below the state average.
- So when families earn that little, they can't afford consistent meals.
- A study across four HBCUs showed that nearly 73% of students experienced food insecurity.
- And Johns Hopkins found that those students are 40% less likely to graduate.
- So this doesn't just affect health, it affects futures.
- Our university already responded by opening a food pantry called Mother Mary's Market for the students.
- But there's still no app or tool that connects the broader community to surplus food or local events.
- That's the gap we saw.

---

## Slide 4 — Mary McLeod Bethune

- And that brings me to why we named it Mary's Hand.
- For those who might not know, Dr. Mary McLeod Bethune founded our university back in 1904 with a dollar fifty and five students.
- She's one of the most influential civil rights leaders in American history.
- She dedicated her entire life to lifting her community through education and service.
- And this app carries that mission forward.

---

## Slide 5 — CBL Framework

- To build this, we followed Challenge-Based Learning.
- We started with a big idea which is community well-being.
- Our essential question was how can technology connect people to fight food insecurity together.
- And that challenge led us to build Mary's Hand.

---

## Slide 6 — What Mary's Hand Does

- So what does the app actually do.
- There is a food sharing system where anyone in the community can post surplus food and anyone nearby can pick it up.
- There is a community events section that brings together volunteer opportunities around Daytona Beach.
- And there's Mary's Kitchen AI, which helps people plan meals and store food with what they already have.
- Now let me actually show you how it all works.

---

## Slide 7 — Live Demo

> **[Switch to Xcode Simulator]**

- So I'm going to walk you through the actual app now.

**Home Page**

- This is the home page.
- You can see what's happening in the community at a glance, recent food posts, upcoming events, and quick access to everything.

**Food Sharing**

- Now this is the share tab.
- Let me show how claiming food works first.
- You see something available, tap claim, and this confirmation bar fills up to prevent accidental taps.
- Once confirmed, you get directions to the pickup.
- Posting food is similar. You fill in what you have, add a photo, set a location, and it goes live on the map.

**Events**

- Events work the same way.
- You can browse what's coming up, sign up for one, or post your own.

**Map**

- Here's the community map.
- Let me zoom into my location.
- You can see food posts and events pinned around my area.
- You can find what's closest to you and claim or sign up directly from here.

**Mary's Kitchen AI**

- And this is Mary's Kitchen AI.
- We used the OpenAI API for this.
- You can ask it anything about meal planning or food storage.
- There are some prewritten questions here too, let me pick one so you can see how it responds.
- And you'll notice this text-to-speech button right here, so the AI response can be read out loud.

> **[Switch back to slides]**

- Alright, let's go back to the slides.

---

## Slide 8 — Design and Tech

- lets take a quick look at the design and technology.
- We built everything in native SwiftUI with SwiftData, MapKit, and OpenAI API.
- The color palette is BCU's maroon and gold, carried throughout the entire app.
- The design uses glass morphism with an aurora background.
- We followed Apple's Human Interface Guidelines to keep everything feeling like a real iOS app.

---

## Slide 9 — Accessibility

- Since this app is meant for the whole community, accessibility was something we took seriously.
- We have full VoiceOver support on every screen.
- There's a dyslexic font option.
- We have dark mode, haptic feedback, and the AI reads responses out loud.
- These are just some of the 15 plus features we included.
- If this app is supposed to serve the whole community, it needs to actually work for the whole community.

---

## Slide 10 — Impact

- We're starting right here in Daytona Beach, serving the neighborhoods around us.
- From there, the goal is to expand across Volusia County.
- And eventually bring this to other HBCU communities facing the same challenges.

---

## Slide 11 — Close

- This is Mary's Hand.
- Your community, always within reach.
- Thank you, I'd love to take any questions.

---

## Panic Cheat Sheet

| Slide | If you blank, just say...                                                                           |
| ----- | --------------------------------------------------------------------------------------------------- |
| 1     | "I'm Rohan from BCU. This is Mary's Hand, a community app for Daytona Beach."                       |
| 2     | "Food insecurity affects 62,000 people in Volusia County. Our campus is right in the middle of it." |
| 3     | "We looked at six studies. The data is local, it's real, and there's a gap technology can fill."    |
| 4     | "Dr. Bethune founded BCU with a dollar fifty. This app carries her mission forward."                |
| 5     | "We used Challenge-Based Learning to go from community problem to product."                         |
| 6     | "Food sharing, community events, and AI meal help. Let me show you how it works."                   |
| 7     | _Just walk through the app. Home, share, map, AI._                                                  |
| 8     | "Native SwiftUI. BCU's colors. Glass design. Apple guidelines."                                     |
| 9     | "18 plus accessibility features. Built for the whole community."                                    |
| 10    | "Starting in Daytona Beach, growing outward."                                                       |
| 11    | "Mary's Hand. Your community, always within reach. Questions?"                                      |

---

## Timing Check

| Slide                  | Target | Cumulative |
| ---------------------- | ------ | ---------- |
| 1. Title               | 10s    | 0:10       |
| 2. Problem             | 30s    | 0:40       |
| 3. Research            | 40s    | 1:20       |
| 4. Mary McLeod Bethune | 25s    | 1:45       |
| 5. CBL                 | 20s    | 2:05       |
| 6. What it does        | 25s    | 2:30       |
| 7. Demo                | 120s   | 4:30       |
| 8. Design              | 20s    | 4:50       |
| 9. Accessibility       | 20s    | 5:10       |
| 10. Impact             | 15s    | 5:25       |
| 11. Close              | 5s     | 5:30       |
