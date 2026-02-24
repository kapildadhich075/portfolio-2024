/**
 * messages.js
 * -----------
 * A curated collection of cricket × life motivational messages.
 * Each entry has a multi-line `quote` and a one-line `action`.
 */

export const messages = [
  {
    quote: `Sometimes while setting the field for others,\nwe forget to set our own direction.\nThe game isn't over.\nYou're just repositioning.`,
    action: "Do one thing your future self will thank you for.",
  },
  {
    quote: `The pitch doesn't care about your past innings.\nEvery ball is a fresh chance.\nStop replaying old dismissals\nand start building a new partnership — with yourself.`,
    action: "Let go of one thing that no longer serves you.",
  },
  {
    quote: `A great fielder doesn't chase every ball blindly.\nThey read the game, anticipate, and move.\nYour life works the same way.\nPosition yourself where the opportunity will land.`,
    action: "Identify one opportunity you've been ignoring.",
  },
  {
    quote: `Not every over will be a maiden.\nSome will go for runs.\nThe bowler who keeps coming back\nis the one who eventually breaks through.`,
    action: "Retry something you gave up on too early.",
  },
  {
    quote: `There's a reason they call it a 'knock.'\nYou keep knocking at the door of your potential\nuntil the game opens up.\nStay at the crease.`,
    action: "Spend 20 focused minutes on your craft today.",
  },
  {
    quote: `The slip cordon catches what the batsman edges.\nBut remember — even the edge\nmeans you were brave enough to play the shot.\nKeep swinging.`,
    action: "Take one small risk you've been avoiding.",
  },
  {
    quote: `A captain rotates the field\nnot because the plan failed,\nbut because the game evolved.\nAdapt. Rearrange. Keep leading.`,
    action: "Change one routine that has gone stale.",
  },
  {
    quote: `Some players warm the bench for years\nbefore they get their chance.\nBut when the moment arrives,\nthe ones who were ready — they deliver.`,
    action: "Prepare for something even before you're asked to.",
  },
  {
    quote: `A run-out happens\nwhen two people aren't on the same page.\nIn life, communicate before you run.\nAlignment beats speed.`,
    action: "Have one honest conversation you've been postponing.",
  },
  {
    quote: `You don't need to hit sixes every ball.\nSingles and doubles win matches.\nSmall, consistent progress\nis still progress.`,
    action: "Do one small, boring, important task today.",
  },
  {
    quote: `The pitch cracks under pressure,\nbut only the ones who adapt their technique\nsurvive the final session.\nBe someone who adjusts, not someone who complains.`,
    action: "Accept one difficult truth you've been avoiding.",
  },
  {
    quote: `A fielding position isn't permanent.\nYou move with the game.\nStop clinging to where you were placed\nand start flowing with where the game needs you.`,
    action: "Say yes to something outside your comfort zone.",
  },
  {
    quote: `The third umpire reviews the footage\nbefore making a decision.\nSometimes in life too,\nyou need to slow down and look at the replay before reacting.`,
    action: "Pause before you respond to something stressful today.",
  },
  {
    quote: `A century isn't built on one shot.\nIt's a hundred small decisions —\neach one deliberate, each one earned.\nTrust the accumulation.`,
    action: "Stack three good micro-decisions before noon.",
  },
  {
    quote: `Even Sachin got out on 99.\nBut nobody remembers the dismissal.\nThey remember the innings.\nPlay an innings worth remembering.`,
    action: "Focus on the journey, not just the milestone.",
  },
  {
    quote: `There's no DRS in real life.\nYou can't challenge the umpire's call.\nBut you can choose how you walk back —\nwith grace, with fire, ready for the next innings.`,
    action: "Accept one outcome you can't change, and move forward.",
  },
  {
    quote: `A good wicketkeeper stays low,\nstays quiet, stays ready.\nNot every role is loud.\nSome of the most important work\nhappens behind the stumps.`,
    action: "Do something meaningful that nobody will notice.",
  },
  {
    quote: `The best cover drives\ncome from perfect balance and timing,\nnot brute force.\nFind your balance. The timing will follow.`,
    action: "Slow down one thing you've been rushing.",
  },
  {
    quote: `A follow-on doesn't mean the match is lost.\nIt means you need to bat again,\nwith more intent, more grit.\nThe comeback is always possible.`,
    action: "Pick yourself up from one setback today.",
  },
  {
    quote: `They said the pitch had nothing for the bowler.\nBut the one who kept hitting the right length\neventually found assistance.\nConsistency creates its own luck.`,
    action: "Show up for something consistently, even when it feels pointless.",
  },
  {
    quote: `The dressing room sees your real character.\nNot the crowd, not the camera.\nWho are you when no one is watching?\nThat's your real score.`,
    action: "Do the right thing when nobody is looking.",
  },
  {
    quote: `A square leg becomes a fine leg\nwith just a few steps.\nSmall shifts in positioning\ncan change everything.\nMake your move.`,
    action: "Adjust one small thing in your daily routine.",
  },
  {
    quote: `You can't bat on every pitch forever.\nSome days the ball will move,\nsome days it won't.\nThe skill is in showing up regardless.`,
    action: "Show up even if today feels hard.",
  },
  {
    quote: `Night watchmen don't chase glory.\nThey protect the team, absorb pressure,\nand survive until the light returns.\nSometimes surviving is the bravest act.`,
    action: "Give yourself permission to just survive today.",
  },
];

/**
 * Returns a random index different from the current one.
 * Ensures the user always sees a new message on each click.
 *
 * @param {number} currentIndex - Index of the currently displayed message
 * @returns {number} A new random index
 */
export function getRandomMessage(currentIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * messages.length);
  } while (newIndex === currentIndex && messages.length > 1);
  return newIndex;
}
