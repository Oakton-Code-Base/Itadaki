/*
 *  this file serves as the main entry point
 *  => initialize the reddit API
 *  => load the main UI components: poll, story prompt
 *  => handle state management (updating)
 */

/*
 * Jobs
 */
import { Devvit, useState } from '@devvit/public-api';

/*
 * Menu Actions
 */

import {customPost} from './actions/customPost.js';
import {createPost} from './actions/createPost.js';

/*
 * Pluggins
 */
Devvit.configure({
  redditAPI: true,
  redis: true,
  media: true, //can remove this possibly later
});

/*
 * Custom Post
 */
Devvit.addCustomPostType(customPost);


/* 
 * Menu Actions
 */
Devvit.addMenuItem(createPost);

 
// Add a post type definition
/*Devvit.addCustomPostType({
  name: 'Experience Post',
  height: 'regular',
  render: (_context) => {
    const [counter, setCounter] = useState(0);

    const rand = () => {
      return Math.floor(Math.random() * 10) + 1;
    };


    return (
      <vstack height="100%" width="100%" gap="medium" alignment="center middle">
        <image
          url="logo.png"
          description="logo"
          imageHeight={256}
          imageWidth={256}
          height="48px"
          width="48px"
        />
        <text size="large">{`hey: ${counter}`}</text>
        <button appearance="primary" onPress={() => setCounter(rand)}>
          Generate
        </button>


      </vstack>
    );
  },
});*/


export default Devvit;
