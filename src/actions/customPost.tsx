import { Devvit, useState, Context, useWebView } from '@devvit/public-api';
import type { DevvitMessage, WebViewMessage } from '../message.js';


export const customPost = {
  name: 'Itadaki',
  description: 'Story',
  height: 'tall' as 'tall',
  render: (_context: Context) => {
  

    return (
      <vstack height="100%" width="100%" alignment="center" gap="small" backgroundColor="#212846">
        <hstack height="5%" width="100%" alignment="top center" />

        <hstack height="25%" width="100%" alignment="top center">
          <image 
            url="itadaki.png"
            description="itadaki"
            imageHeight={30}
            imageWidth={256}
            height="80px"
            width="350px"
          />
        </hstack>

        <hstack height="42%" width="100%" alignment="top center" gap="none">
          <image
          
            url="rapid.png"
            description="rapid"
            imageHeight={30}
            imageWidth={380}
            height="170px"
            width="280px"
          />
          <image
             // Open WebView with the URL
            url="daily.png"
            description="daily"
            imageHeight={30}
            imageWidth={380}
            height="170px"
            width="280px"
          />
        </hstack>

        <hstack height="12%" width="100%" alignment="top center" gap="none">
          <image
            url="leaderboard.png"
            description="leaderboard"
            imageHeight={30}
            imageWidth={380}
            height="50px"
            width="400px"
          />
        </hstack>

        <hstack height="12%" width="100%" alignment="top center" gap="none">
          <image
            url="howto.png"
            description="how to"
            imageHeight={30}
            imageWidth={380}
            height="50px"
            width="400px"
          />
        </hstack>

        <vstack height="100%" width="100%" gap="medium" alignment="center middle">
          <image
            url="logo.png"
            description="logo"
            imageHeight={256}
            imageWidth={256}
            height="48px"
            width="48px"
          />
        </vstack>
      </vstack>
    );
  },
};