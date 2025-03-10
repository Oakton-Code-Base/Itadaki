import {Devvit, Context, MenuItemLocation, MenuItemUserType } from '@devvit/public-api';

export const createPost = {
    label: 'new',
    location: 'subreddit' as MenuItemLocation,
    forUserType: 'moderator' as MenuItemUserType, //take this out when its visible for @everyone
    onPress: async (_event: any, context: Context) => {
        const { reddit, ui } = context;
        ui.showToast("Submitting your post - upon completion you'll navigate there.");

        const subreddit = await reddit.getCurrentSubreddit();
        const post = await reddit.submitPost({
        title: 'StoryTime Game',
        subredditName: subreddit.name,
        // The preview appears while the post loads
        preview: (
            <vstack height="100%" width="100%" alignment="middle center">
            <text size="large">Loading ...</text>
            </vstack>
        ),
        });
        ui.navigateTo(post);
    },
};