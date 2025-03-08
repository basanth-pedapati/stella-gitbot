/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
export default (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Hey there! 👋 Thanks for opening this issue. We appreciate your effort in making GAAC better! Before we get started, please ensure that you've filled out the issue template properly. A well-documented issue helps us solve things faster! 🛠️Our team will review this soon. In the meantime, check out our Contribution Guide and feel free to join the discussion. 🚀If you're interested in working on this, drop a comment below! Happy coding! 😃",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
