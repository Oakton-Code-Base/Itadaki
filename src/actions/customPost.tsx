import { Devvit, useState, Context } from '@devvit/public-api';

export const customPost = {
      name: 'Itadaki',
      description: 'Story',
      height: 'tall' as 'tall',
      render: (_context: Context) => {
        
        //test the different gui buttons through changing the color of the background 
        const [bgColor, setBgColor] = useState<string>("#212846");

        const changeColor =(color: String) => {
          setBgColor("color")
        };

        return (  
          <vstack height="100%" width="100%" alignment="center" gap='small' backgroundColor={bgColor}>
            <hstack height = "5%" width = "100%" alignment = "top center"/>
            
             <hstack height = "25%" width = "100%" alignment = "top center">
                <button onPress={() => changeColor("")}>Red
                  <image
                      url="itadaki.png"
                      description='itadaki'
                      imageHeight={30}
                      imageWidth={256}
                      height="80px"
                      width="350px"
                  />
                  </button>
              
             </hstack>

             <hstack height = "42%" width = "100%" alignment = "top center" gap='none'>
                <image
                  url="rapid.png"
                  description='rapid'
                  imageHeight={30}
                  imageWidth={380}
                  height="170px"
                  width="280px"
                />
                <image
                  url="daily.png"
                  description='daily'
                  imageHeight={30}
                  imageWidth={380}
                  height="170px"
                  width="280px"
                />
             </hstack>

             <hstack height = "12%" width = "100%" alignment = "top center" gap='none'>
                <image
                  url="leaderboard.png"
                  description='leaderboard'
                  imageHeight={30}
                  imageWidth={380}
                  height="50px"
                  width="400px"
                />
             </hstack>

             <hstack height = "12%" width = "100%" alignment = "top center" gap='none'>
                <image
                  url="howto.png"
                  description='leaderboard'
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
            {/*<text size ="large">{text}</text>
            <button onPress={changeText}>C</button>*/}
          </vstack>
          
          </vstack>
        );
    }
};