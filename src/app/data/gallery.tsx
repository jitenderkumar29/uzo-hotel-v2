// types/gallery.ts
export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  alt?: string;
  thumbnail?: string;
  title?: string;
}

export interface GallerySection {
  id: string;
  title: string;
  items: GalleryItem[];
}

export const galleryData: GallerySection[] = [
  {
    id: 'videos',
    title: 'Videos',
    items: [
      {
        id: 'video1',
        type: 'video',
        url: 'https://ingommt-videos.goibibo.com/05709a9eafb011eabb780242ac110003.mp4',
        thumbnail: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/07f55b33_z.jpg',
        title: 'Hotel Tour Video'
      },
      {
        id: 'video2',
        type: 'video',
        url: 'https://videos.pexels.com/video-files/855139/855139-hd_1920_1080_30fps.mp4',
        thumbnail: 'https://images.pexels.com/photos/6235436/pexels-photo-6235436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Hotel Tour Video'
      },
      {
        id: 'video3',
        type: 'video',
        url: 'https://videos.pexels.com/video-files/3015493/3015493-hd_1920_1080_24fps.mp4',
        thumbnail: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Hotel Tour Video'
      },
      {
        id: 'video4',
        type: 'video',
        url: 'https://videos.pexels.com/video-files/3410663/3410663-uhd_2562_1440_30fps.mp4',
        thumbnail: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Hotel Tour Video'
      },
      {
        id: 'video5',
        type: 'video',
        url: 'https://videos.pexels.com/video-files/5138022/5138022-uhd_2732_1440_25fps.mp4',
        thumbnail: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Hotel Tour Video'
      }
    ]
  },
  {
    id: 'room',
    title: 'Room',
    items: [
      {
        id: 'room1',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/07f55b33_z.jpg',
        alt: 'Deluxe Room'
      },
      {
        id: 'room2',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/e517410d_z.jpg',
        alt: 'Suite'
      },
      {
        id: 'room3',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/2abfa0e1_z.jpg',
        alt: 'Bathroom'
      },
      {
        id: 'room4',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/6171b7f9_z.jpg',
        alt: 'Bedroom'
      },
      {
        id: 'room5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/b9d24a3456cb11eab2d10242ac110002.jpg',
        alt: 'Living Area'
      },
      {
        id: 'room-more',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/e59e3694_z.jpg',
        alt: 'More Rooms',
        title: 'More Photos'
      }
    ]
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    items: [
      {
        id: 'pool1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/e7af0dbcc29e11eb8cf70242ac110006.jpg',
        alt: 'Main Pool'
      },
      {
        id: 'pool2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/49e9c474665111e991240242ac110002.jpg',
        alt: 'Pool Area'
      },
      {
        id: 'pool3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/74ab48bef0c511e9bca10242ac110003.jpg',
        alt: 'Pool View'
      },
      {
        id: 'pool4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/74bf9b66f0c511e9aa010242ac110002.jpg',
        alt: 'Poolside'
      }
    ]
  },
  {
    id: 'outdoors',
    title: 'Outdoors',
    items: [
      {
        id: 'outdoor1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/3771e1821eed11e59e4a001ec9b85d13.jfif',
        alt: 'Garden View'
      },
      {
        id: 'outdoor2',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/6f594bec_z.jpg',
        alt: 'Outdoor Seating'
      },
      {
        id: 'outdoor3',
        type: 'image',
        url: 'https://static-images.webbeds.com/0/image/33c20544-bb74-4cf4-99dd-1f174821366e.jpg',
        alt: 'Landscaping'
      },
      {
        id: 'outdoor4',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/64515cdf_z.jpg',
        alt: 'Terrace'
      },
      {
        id: 'outdoor5',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/cb9027e8_z.jpg',
        alt: 'Courtyard'
      },
      {
        id: 'outdoor6',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/be7db1d9_z.jpg',
        alt: 'Patio'
      }
    ]
  },
  {
    id: 'facade',
    title: 'Facade',
    items: [
      {
        id: 'facade1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/d076a970c29e11ebbbed0242ac110005.jpg',
        alt: 'Building Front'
      },
      {
        id: 'facade2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/fb05ca06a71d11ea87640242ac110003.jpeg',
        alt: 'Hotel Entrance'
      },
      {
        id: 'facade3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/95cc2704c2cc11eb87490242ac110005.png',
        alt: 'Exterior View'
      },
      {
        id: 'facade4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/7434c086f0c511e9994d0242ac110003.jpg',
        alt: 'Architectural Detail'
      }
    ]
  },
  {
    id: 'spa',
    title: 'Spa',
    items: [
      {
        id: 'spa1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/392a2242f0c511e9bebc0242ac110005.jpg',
        alt: 'Spa Reception'
      },
      {
        id: 'spa2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/636df8701eed11e580df0022195573b9.jfif',
        alt: 'Treatment Room'
      },
      {
        id: 'spa3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/5a7035801eed11e59e630022195573b9.jfif',
        alt: 'Massage Area'
      },
      {
        id: 'spa4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/3fcb2fdaf52511e78a88025f77df004f.jpg',
        alt: 'Relaxation Zone'
      },
      {
        id: 'spa5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/3c30a2ecf52511e793960a4cef95d023.jpg',
        alt: 'Sauna'
      }
    ]
  },
  {
    id: 'entrance',
    title: 'Entrance',
    items: [
      {
        id: 'entrance1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/b61d86dae0f411e984780242ac110004.png',
        alt: 'Main Entrance'
      },
      {
        id: 'entrance2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/97b8fab8f0c511e9ab200242ac110004.jpg',
        alt: 'Lobby Entrance'
      },
      {
        id: 'entrance3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/73408cf0f0c511e98e590242ac110002.jpg',
        alt: 'Driveway'
      },
      {
        id: 'entrance4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/97a095f4f0c511e9bc960242ac110002.jpg',
        alt: 'Reception Area'
      },
      {
        id: 'entrance5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/976a7db6f0c511e9843b0242ac110002.jpg',
        alt: 'Welcome Area'
      }
    ]
  },
  {
    id: 'washroom',
    title: 'Washroom',
    items: [
      {
        id: 'washroom1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/cf8782e4295e11ea9c6a0242ac110003.jfif',
        alt: 'Bathroom'
      },
      {
        id: 'washroom2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/45b4c67056d211ea97d00242ac110002.jpg',
        alt: 'Shower'
      },
      {
        id: 'washroom3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/af6e1f36295e11ea876d0242ac110003.jfif',
        alt: 'Vanity'
      },
      {
        id: 'washroom4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/44fd136856d211eab49b0242ac110002.jpg',
        alt: 'Toilet'
      },
      {
        id: 'washroom5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/d6f89c9456cb11ea90310242ac110003.jpg',
        alt: 'Amenities'
      },
      {
        id: 'washroom-more',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/18dccddc56dc11eaae280242ac110002.jpg',
        alt: 'More Washroom Photos',
        title: 'More Photos'
      }
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    items: [
      {
        id: 'restaurant1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/aa475d0cc67a11eeb2b20a58a9feac02.jpg',
        alt: 'Dining Area'
      },
      {
        id: 'restaurant2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/aa09e292c67a11eeba340a58a9feac02.jpg',
        alt: 'Buffet'
      },
      {
        id: 'restaurant3',
        type: 'image',
        url: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/200703161155527273-265452-a9c671a6adbc11ed96620a58a9feac02.jpg',
        alt: 'Bar Counter'
      },
      {
        id: 'restaurant4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/466740d4adb911edbe1b0a58a9feac02.jpg',
        alt: 'Outdoor Dining'
      },
      {
        id: 'restaurant5',
        type: 'image',
        url: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/200703161155527273-2809680-72735b84adbb11eda7070a58a9feac02.jpg',
        alt: 'Private Dining'
      },
      {
        id: 'restaurant-more',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/7364abf8f0c511e9b23f0242ac110003.jpg',
        alt: 'More Restaurant Photos',
        title: 'More Photos'
      }
    ]
  },
  {
    id: 'play-area',
    title: 'Play Area',
    items: [
      {
        id: 'play-area1',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/5679554c_z.jpg',
        alt: 'Kids Play Zone'
      }
    ]
  },
  {
    id: 'reception',
    title: 'Reception',
    items: [
      {
        id: 'reception1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/8cff00aef0c511e99a4b0242ac110002.jpg',
        alt: 'Front Desk'
      },
      {
        id: 'reception2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/39602ed2f0c511e9b0de0242ac110003.jpg',
        alt: 'Lobby'
      },
      {
        id: 'reception3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/b13264c6f0c411e995ea0242ac110002.jpg',
        alt: 'Waiting Area'
      },
      {
        id: 'reception4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/b13f163af0c411e992490242ac110002.jpg',
        alt: 'Concierge'
      },
      {
        id: 'reception5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/b0f32c0cf0c411e9ab1e0242ac110003.jpg',
        alt: 'Check-in Counter'
      },
      {
        id: 'reception6',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/b06119a2f0c411e9840d0242ac110002.jpg',
        alt: 'Lounge Area'
      }
    ]
  },
  {
    id: 'common-area',
    title: 'Common Area',
    items: [
      {
        id: 'common1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/82d9d6fe295e11eab75f0242ac110004.jpg',
        alt: 'Hallway'
      },
      {
        id: 'common2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/39a7891cf0c511e99af40242ac110003.jpg',
        alt: 'Sitting Area'
      },
      {
        id: 'common3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/0c17f882396c11ec84570a58a9feac02.png',
        alt: 'Corridor'
      },
      {
        id: 'common4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/aec3f208c67711eeaf3a0a58a9feac02.jpg',
        alt: 'Public Space'
      },
      {
        id: 'common5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/121b550e295f11ea88ac0242ac110003.png',
        alt: 'Shared Lounge'
      },
      {
        id: 'common-more',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/c4de4d68c67711eea8e00a58a9feac02.jpg',
        alt: 'More Common Area Photos',
        title: 'More Photos'
      }
    ]
  },
  {
    id: 'gym',
    title: 'Gym',
    items: [
      {
        id: 'gym1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/20d7bd4ef0c511e98ce00242ac110003.jpg',
        alt: 'Fitness Center'
      },
      {
        id: 'gym2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/2620c9de1eed11e5a6c7001ec9b85d13.jfif',
        alt: 'Cardio Machines'
      },
      {
        id: 'gym3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/049b85d4f0c511e9851c0242ac110002.jpg',
        alt: 'Weight Training'
      },
      {
        id: 'gym4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/04978c86f0c511e9a26c0242ac110003.jpg',
        alt: 'Exercise Area'
      },
      {
        id: 'gym5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/097c4fa61eed11e59135001ec9b85d13.jfif',
        alt: 'Yoga Space'
      },
      {
        id: 'gym-more',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/3f4bc0baf52511e788d3025f77df004f.jpg',
        alt: 'More Gym Photos',
        title: 'More Photos'
      }
    ]
  },
  {
    id: 'conference-room',
    title: 'Conference Room',
    items: [
      {
        id: 'conference1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/4a59b1a81eed11e589ce5ee5da2daa2a.jfif',
        alt: 'Meeting Room'
      },
      {
        id: 'conference2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/4578d4a21eed11e59fad5ee5da2daa2a.jfif',
        alt: 'Boardroom'
      },
      {
        id: 'conference3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/75bd8a3ea8d611e7ad250a9df65c8753.jpg',
        alt: 'Conference Setup'
      },
      {
        id: 'conference4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/5e68df661eed11e5b7ae0022195573b9.jfif',
        alt: 'Presentation Area'
      },
      {
        id: 'conference5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/43bae9201eed11e5b2115ee5da2daa2a.jfif',
        alt: 'Event Space'
      }
    ]
  },
  {
    id: 'banquet',
    title: 'Banquet',
    items: [
      {
        id: 'banquet1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/8d671f5ef0c511e98d570242ac110003.jpg',
        alt: 'Banquet Hall'
      },
      {
        id: 'banquet2',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/3cdcbc781eed11e58b5236cfdd80c293.jfif',
        alt: 'Wedding Setup'
      },
      {
        id: 'banquet3',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/39980bb0f52511e78b4b0a4cef95d023.jpg',
        alt: 'Conference Setup'
      },
      {
        id: 'banquet4',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/4317853af52511e788d3025f77df004f.jpg',
        alt: 'Event Setup'
      },
      {
        id: 'banquet5',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/3bb1385ef52511e791590a4cef95d023.jpg',
        alt: 'Dining Setup'
      },
      {
        id: 'banquet-more',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/3b3c3022f52511e78b4b0a4cef95d023.jpg',
        alt: 'More Banquet Photos',
        title: 'More Photos'
      }
    ]
  },
  {
    id: 'others',
    title: 'Others',
    items: [
      {
        id: 'other1',
        type: 'image',
        url: 'https://r1imghtlak.mmtcdn.com/a8941cc4cd6a11eebc190a58a9feac02.jpg',
        alt: 'Other Facility'
      },
      {
        id: 'other2',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/6171b7f9_z.jpg',
        alt: 'Miscellaneous'
      },
      {
        id: 'other3',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/c8c82fa3_z.jpg',
        alt: 'Additional Facility'
      },
      {
        id: 'other4',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/8f0dd050_z.jpg',
        alt: 'Other Area'
      },
      {
        id: 'other5',
        type: 'image',
        url: 'https://i.travelapi.com/lodging/2000000/1530000/1528800/1528788/2b2d23df_z.jpg',
        alt: 'Extra Space'
      },
      {
        id: 'other6',
        type: 'image',
        url: 'https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/bgdefault_bg.jpg',
        alt: 'More Facilities'
      }
    ]
  }
];