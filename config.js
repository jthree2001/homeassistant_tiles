/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/


var CONFIG = {
   customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: "http://localhost:8123",
   wsUrl: "ws://localhost:8123/api/websocket",
   authToken: null, // optional: make an long live token and put it here
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   debug: false, // Prints entities and state change info to the console.

   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         padding: '30px 130px 0',
         fontSize: '28px'
      },
      right: [],
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         }
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
     {
        title: 'Main page',
        bg: 'images/bg1.jpeg',
        icon: 'mdi-home-outline', // home icon
        groups: [
           {
              title: 'Front Door',
              width: 2,
              height: 3,
              items: [
                 {
                    position: [0, 0],
                    width: 2,
                    type: TYPES.TEXT_LIST,
                    id: {}, // using empty object for an unknown id
                    state: false, // disable state element
                    list: [
                       {
                          title: 'Sun',
                          icon: 'mdi-weather-sunny',
                          value: '&sun.sun.state'
                       }
                    ]
                 },
                 {
                    position: [0, 1], // [x, y]
                    width: 1,
                    type: TYPES.SENSOR,
                    id: 'updater.updater',
                    state: '@attributes.release_notes' // https://github.com/resoai/TileBoard/wiki/Templates
                 },
                 {
                    position: [1, 0],
                    type: TYPES.LOCK,
                    id: 'lock.front_door',
                    title: 'Front door',
                    states: {
                       locked: "Locked",
                       unlocked: "Unlocked"
                    },
                    icons: {
                       locked: "mdi-lock",
                       unlocked: "mdi-lock-open",
                    }
                 }
              ]
           },
           {
              title: 'Living Room',
              width: 2,
              height: 3,
              items: [
                {
                   position: [0, 0],
                   width: 2,
                   title: 'Living Room Lights',
                   //subtitle: 'Lounge',
                   id: 'light.living_room',
                   type: TYPES.LIGHT,
                   states: {
                      on: "On",
                      off: "Off"
                   },
                   icons: {
                      on: "mdi-lightbulb-on",
                      off: "mdi-lightbulb",
                   },
                   sliders: [
                      {
                         title: 'Brightness',
                         field: 'brightness',
                         max: 255,
                         min: 0,
                         step: 5,
                         request: {
                            type: "call_service",
                            domain: "light",
                            service: "turn_on",
                            field: "brightness"
                         }
                      }
                   ]
                 },
                 {
                    position: [1, 0],
                    width: 1,
                    title: 'Ceiling lights',
                    subtitle: "Doesn't control the fan",
                    id: 'light.living_room_ceiling',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                    sliders: [
                       {
                          title: 'Brightness',
                          field: 'brightness',
                          max: 255,
                          min: 0,
                          step: 5,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "brightness"
                          }
                       }
                    ]
                  },
                  {
                     position: [1, 1],
                     width: 1,
                     title: 'Black Lamp',
                     //subtitle: "Doesn't control the fan",
                     id: 'light.black_lamp_2',
                     type: TYPES.LIGHT,
                     states: {
                        on: "On",
                        off: "Off"
                     },
                     icons: {
                        on: "mdi-lightbulb-on",
                        off: "mdi-lightbulb",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        }
                     ]
                   },
                   {
                      position: [2, 0],
                      width: 1,
                      title: 'White Lamp',
                      //subtitle: "Doesn't control the fan",
                      id: 'light.white_lamp_2',
                      type: TYPES.LIGHT,
                      states: {
                         on: "On",
                         off: "Off"
                      },
                      icons: {
                         on: "mdi-lightbulb-on",
                         off: "mdi-lightbulb",
                      },
                      sliders: [
                         {
                            title: 'Brightness',
                            field: 'brightness',
                            max: 255,
                            min: 0,
                            step: 5,
                            request: {
                               type: "call_service",
                               domain: "light",
                               service: "turn_on",
                               field: "brightness"
                            }
                         }
                      ]
                    }
              ]
           },

           {
              title: 'Kitchen/Dinning Room',
              width: 2,
              height: 3,
              items: [
                {
                   position: [0, 0],
                   width: 2,
                   title: 'Kitchen Light',
                   //subtitle: "Doesn't control the fan",
                   id: 'light.kitchen',
                   type: TYPES.LIGHT,
                   states: {
                      on: "On",
                      off: "Off"
                   },
                   icons: {
                      on: "mdi-lightbulb-on",
                      off: "mdi-lightbulb",
                   },
                   sliders: [
                      {
                         title: 'Brightness',
                         field: 'brightness',
                         max: 255,
                         min: 0,
                         step: 5,
                         request: {
                            type: "call_service",
                            domain: "light",
                            service: "turn_on",
                            field: "brightness"
                         }
                      }
                   ]
                 },
                 {
                    position: [1, 0],
                    width: 2,
                    title: 'Kitchen Light',
                    subtitle: "All Kitchen Lights",
                    id: 'light.kitchen_2',
                    type: TYPES.LIGHT,
                    states: {
                       on: "On",
                       off: "Off"
                    },
                    icons: {
                       on: "mdi-lightbulb-on",
                       off: "mdi-lightbulb",
                    },
                    sliders: [
                       {
                          title: 'Brightness',
                          field: 'brightness',
                          max: 255,
                          min: 0,
                          step: 5,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "brightness"
                          }
                       },
                       {
                          title: 'Color temp',
                          field: 'color_temp',
                          max: 588,
                          min: 153,
                          step: 15,
                          request: {
                             type: "call_service",
                             domain: "light",
                             service: "turn_on",
                             field: "color_temp"
                          }
                       }
                    ]
                  }

              ]
           }
        ]
     },
      {
         title: 'Second page',
         bg: 'images/bg2.png',
         icon: 'mdi-numeric-2-box-outline',
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        }
                     ]
                  }
               ]
            },
         ]
      }
   ],
}
