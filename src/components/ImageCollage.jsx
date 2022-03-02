import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useParams } from 'react-router-dom';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
        size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
    }

    export default function QuiltedImageList({setSelectedImg}) {

        const params = useParams();

    return (
        <ImageList
        style={{cursor: 'pointer'}}
        sx={{ width: 300, height: 325, marginLeft: 1 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
        >
        {itemData.filter(el=>el.id === params.id).map((item) => (
            <ImageListItem 
            onClick={()=>setSelectedImg(item.img)}
            key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
    );
    }

    const itemData = [

        // id - 11 - Immerse into the Falls

    {
        id: "11",
        img: 'https://live.staticflickr.com/8322/8051766942_1ab5c2dd20_b.jpg',
        title: 'Immerse into the Falls',
        rows: 2,
        cols: 2,
    },
    {
        id: "11",
        img: 'https://i.pinimg.com/originals/fd/f4/b6/fdf4b6ecd0b30017e913674c63da6668.jpg',
        title: 'Immerse into the Falls',
    },
    {
        id: "11",
        img: 'https://s29588.pcdn.co/wp-content/uploads/sites/2/2019/12/resize2560px-American_Falls_Niagara_Falls_USA_from_Skylon_Tower_on_2002-05-28.jpg.optimal.jpg',
        title: 'Immerse into the Falls',
    },
    {
        id: "11",
        img: 'https://i0.wp.com/www.driftwoodjournals.com/wp-content/uploads/2019/11/Things-to-do-in-and-around-the-Niagara-Falls.jpg?fit=2007%2C1050&ssl=1',
        title: 'Immerse into the Falls',
        cols: 2,
    },
    {
        id: "11",
        img: 'http://www.caingram.info/Worldwide/Waterfalls/Niagara_falls_aerial-2.jpg',
        title: 'Immerse into the Falls',
        cols: 2,
    },
    {
        id: "11",
        img: 'http://images.dailyhive.com/20180705084601/HNC-X-VOYAGE.jpg',
        title: 'Immerse into the Falls',
        rows: 2,
        cols: 2,
    },
    {
        id: "11",
        img: 'https://tourscanner.com/blog/wp-content/uploads/2020/07/best-things-to-do-in-Niagara-Falls.jpg',
        title: 'Immerse into the Falls',
    },
    {
        id: "11",
        img: 'https://overthefallstoursniagara.com/wp-content/uploads/2021/06/complex-color-1024x448.jpg',
        title: 'Immerse into the Falls',
    },
    {
        id: "11",
        img: 'https://overthefallstoursniagara.com/wp-content/uploads/2021/06/niagara_falls_state_park.jpg',
        title: 'Immerse into the Falls',
        rows: 2,
        cols: 2,
    },
    {
        id: "11",
        img: 'https://www.marriott.com/content/dam/marriott-leisure/destinations/hero/north-america/usa/ny/niagara-falls/niagaraFalls-hero-destination.transform/mcom-leisure-transform-2880/image.jpg',
        title: 'Immerse into the Falls',
    },
    {
        id: "11",
        img: 'https://photos.smugmug.com/Canada/Ontario/Niagara-Falls-2021/i-szs9NMF/0/33775e67/L/NiagaraFallsSept2021-55-L.jpg',
        title: 'Immerse into the Falls',
    },
    {
        id: "11",
        img: 'https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/homepage/niagara-falls-mist-880x592.jpg',
        title: 'Immerse into the Falls',
        cols: 2,
    },

        // id - 22 - Helicopter Over the Falls

    {
        id: "22",
        img: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_20813/20181214110405_puYGJ/jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        id: "22",
        img: 'https://www.airbushelicopters.ca/wp-content/uploads/AHCA-35-anniversary-Employees.jpg',
        title: 'Helicopter Over the Falls',
    },
    {
        id: "22",
        img: 'https://www.airbushelicopters.ca/wp-content/uploads/Airbus-Helicopters-Canada-Delivery-Ceremony-4-H130-for-Niagara-Helicopters.jpg',
        title: 'Helicopter Over the Falls',
    },
    {
        id: "22",
        img: 'https://www.niagarafallslive.com/wp-content/uploads/2013/09/opt-niagara-helicopters-966x544.jpg',
        title: 'Helicopter Over the Falls',
        cols: 2,
    },
    {
        id: "22",
        img: 'https://c8.alamy.com/comp/C5810K/pilot-flying-helicopter-flight-over-niagara-falls-ontario-canada-focus-C5810K.jpg',
        title: 'Helicopter Over the Falls',
        cols: 2,
    },
    {
        id: "22",
        img: 'https://www.theworldinaweekend.com/wp-content/uploads/2016/08/IMG_6038.jpg',
        title: 'Helicopter Over the Falls',
        rows: 2,
        cols: 2,
    },
    {
        id: "22",
        img: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/17/2a/3e/niagara-falls-helicopter.jpg',
        title: 'Helicopter Over the Falls',
    },
    {
        id: "22",
        img: 'https://www.trustedtours.com/city/niagarafalls/nfnh/nfhr/photos/01_Niagara%20Falls%20Scenic%20Flightseeing%20Tour.jpg',
        title: 'Helicopter Over the Falls',
    },
    {
        id: "22",
        img: 'http://www.helicopters.airbus.com/website/docs_wsw/img/x750/RUB_155/press_1760/originals%252FMikeReynoNiagara%25C2%25A9%2B009.jpg?t=%C2%A9+Mike+Reyno%2FVertical&tS=8',
        title: 'Helicopter Over the Falls',
        rows: 2,
        cols: 2,
    },
    {
        id: "22",
        img: 'https://www.newyorkbyrail.com/wp-content/uploads/2018/06/Rainbow-Air-Inc_preview-1200x800.jpeg',
        title: 'Helicopter Over the Falls',
        rows: 2,
        cols: 2,
    },

        // id - 33 - The Falls at Night

    {
        id: "33",
        img: 'https://www.toniagara.com/blog/wp-content/uploads/2017/11/Niagara-Falls-Illumination-and-Fireworks.jpg',
        title: 'The Falls at Night',
        rows: 2,
        cols: 2,
    },
    {
        id: "33",
        img: 'https://townsquare.media/site/39/files/2019/06/35269593_1053573588128559_6161150931372081152_n.jpg?w=980&q=75',
        title: 'The Falls at Night',
    },
    {
        id: "33",
        img: 'https://m.media-amazon.com/images/I/81+niKYRSiL._AC_SL1500_.jpg',
        title: 'The Falls at Night',
    },
    {
        id: "33",
        img: 'https://i.ytimg.com/vi/5KjqbkczwFQ/maxresdefault.jpg',
        title: 'The Falls at Night',
        cols: 2,
    },
    {
        id: "33",
        img: 'https://www.niagarafallslive.com/wp-content/uploads/2013/09/opt-fallsilluminated900-1.jpg',
        title: 'The Falls at Night',
        cols: 2,
    },
    {
        id: "33",
        img: 'https://dri.es/files/cache/niagara-on-the-lake-2017/niagara-falls-by-night-1-1280w.jpg',
        title: 'The Falls at Night',
        rows: 2,
        cols: 2,
    },
    {
        id: "33",
        img: 'https://www.niagarafallstourism.com/site/assets/files/82292/american_falls_-_rainbow.jpg',
        title: 'The Falls at Night',
    },
    {
        id: "33",
        img: 'https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-06/c534937ca1ff0b2b2e0dfc177cf69131.jpeg?h=43c28b9b&itok=9OGMx6ml',
        title: 'The Falls at Night',
    },
    {
        id: "33",
        img: 'https://live.staticflickr.com/65535/49254079683_74c1c678bd_b.jpg',
        title: 'The Falls at Night',
        rows: 2,
        cols: 2,
    },
    {
        id: "33",
        img: 'https://cdn.getyourguide.com/img/tour_img-1758917-145.jpg',
        title: 'The Falls at Night',
        rows: 2,
        cols: 2,
    },

        // id - 44 - Maid of the Mist Boat Tour

    {
        id: "44",
        img: 'https://www.choicehotels.com/cms/images/choice-hotels/explore/hero-explore-maid-of-the-mist-tour-falls/hero-explore-maid-of-the-mist-tour-falls.jpg',
        title: 'Maid of the Mist Boat Tour',
        rows: 2,
        cols: 2,
    },
    {
        id: "44",
        img: 'https://resources.news.e.abb.com/images/2019/11/12/0/Niagara_falls_ferries_m9031-02.jpg',
        title: 'Maid of the Mist Boat Tour',
    },
    {
        id: "44",
        img: 'https://www.maidofthemist.com/wp-content/uploads/2021/12/WR_99832_MOTM_21WebsiteUpdates_SchedulePricing.jpg',
        title: 'Maid of the Mist Boat Tour',
    },
    {
        id: "44",
        img: 'https://www.maidofthemist.com/wp-content/uploads/2020/03/99832_MOTM_21WebsiteUpdates_HomePg_V2.jpg',
        title: 'Maid of the Mist Boat Tour',
        cols: 2,
    },
    {
        id: "44",
        img: 'https://i.ytimg.com/vi/OGCzqf2udNI/maxresdefault.jpg',
        title: 'Maid of the Mist Boat Tour',
        cols: 2,
    },
    {
        id: "44",
        img: 'https://i0.wp.com/www.cliftonhill.com/falls_blog/wp-content/uploads/2019/04/maidofthemist-hornblower.jpg?fit=1850%2C1230&ssl=1',
        title: 'Maid of the Mist Boat Tour',
        rows: 2,
        cols: 2,
    },
    {
        id: "44",
        img: 'https://tourscanner.com/blog/wp-content/uploads/2020/12/best-Niagara-Falls-boat-tours.jpg',
        title: 'Maid of the Mist Boat Tour',
    },
    {
        id: "44",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/af/7d/49.jpg',
        title: 'Maid of the Mist Boat Tour',
    },

        // id - 55 - All Around the World

    {
        id: "55",
        img: 'https://www.rwlasvegas.com/wp-content/uploads/2021/10/exterior-2.jpg',
        title: 'All Around the World',
        rows: 2,
        cols: 2,
    },
    {
        id: "55",
        img: 'https://theplanetd.com/images/las-vegas-nevada-5-950x750.jpg',
        title: 'All Around the World',
    },
    {
        id: "55",
        img: 'https://static.toiimg.com/photo/55046716.cms',
        title: 'All Around the World',
    },
    {
        id: "55",
        img: 'https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg',
        title: 'All Around the World',
        cols: 2,
    },
    {
        id: "55",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrVuOXd5BEdw7wWwordUAZPsafzXYJhwI0CCB2wL4JlexStjp6Umwllkl8VO0fAN2EB8&usqp=CAU',
        title: 'All Around the World',
        cols: 2,
    },
    {
        id: "55",
        img: 'https://thepointsguy.global.ssl.fastly.net/us/originals/2021/07/Las-Vegas-Resorts-World-Hilton-Conrad-Crockfords-7.jpeg',
        title: 'All Around the World',
        rows: 2,
        cols: 2,
    },
    {
        id: "55",
        img: 'https://thumbs.dreamstime.com/b/casino-del-castillo-en-las-vegas-6640848.jpg',
        title: 'All Around the World',
    },
    {
        id: "55",
        img: 'https://theonelv.com/wp-content/uploads/2018/09/2018_09_18_Around_World_7Days_Vegas_Style_support_1_768x530.png',
        title: 'All Around the World',
    },

    // id - 66 - All Around the World

    {
        id: "66",
        img: 'https://findtoptenranks.com/wp-content/uploads/2019/10/MGM-Grand-Las-Vegas-1140x570.jpg',
        title: 'View the Casinos',
        rows: 2,
        cols: 2,
    },
    {
        id: "66",
        img: 'https://findtoptenranks.com/wp-content/uploads/2019/10/Aria-Resort-And-Casino-750x375.jpg',
        title: 'View the Casinos',
    },
    {
        id: "66",
        img: 'https://findtoptenranks.com/wp-content/uploads/2019/10/Red-Rock-Casino-Resort-Spa-750x375.jpg',
        title: 'View the Casinos',
    },
    {
        id: "66",
        img: 'https://findtoptenranks.com/wp-content/uploads/2019/10/The-Venetian-750x375.jpg',
        title: 'View the Casinos',
        cols: 2,
    },
    {
        id: "66",
        img: 'https://findtoptenranks.com/wp-content/uploads/2019/10/Bellagio-750x375.jpg',
        title: 'View the Casinos',
        cols: 2,
    },
    {
        id: "66",
        img: 'https://findtoptenranks.com/wp-content/uploads/2019/10/Wynn-Las-Vegas-750x375.jpg',
        title: 'View the Casinos',
        rows: 2,
        cols: 2,
    },
    {
        id: "66",
        img: 'https://findtoptenranks.com/wp-content/uploads/2019/10/Luxor-Las-Vegas-750x375.jpg',
        title: 'View the Casinos',
    },
    {
        id: "66",
        img: 'https://findtoptenranks.com/wp-content/uploads/2019/10/Mirage-Hotel-Casino-1140x570.jpg',
        title: 'View the Casinos',
    },

    // id - 77 - All Around the World

    {
        id: "77",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/29/a1/b8.jpg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        id: "77",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/29/a2/f4.jpg',
        title: '',
    },
    {
        id: "77",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/06/44/2e.jpg',
        title: '',
    },
    {
        id: "77",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e5/98/6e.jpg',
        title: '',
        cols: 2,
    },
    {
        id: "77",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/29/a1/d6.jpg',
        title: '',
        cols: 2,
    },
    {
        id: "77",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e5/98/84.jpg',
        title: '',
        rows: 2,
        cols: 2,
    },
    {
        id: "77",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/29/a3/9e.jpg',
        title: '',
    },
    {
        id: "77",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e5/98/95.jpg',
        title: '',
    },

    // id - 88
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/f0/89/9b.jpg',
        title: 'helicopter fly',
        rows: 2,
        cols: 2,
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/f0/89/b1.jpg',
        title: 'cabin view',
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/03/cd.jpg',
        title: 'las vegas from drone',
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0d/08/37/80.jpg',
        title: 'bar menu',
        cols: 2,
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6c/af/e1.jpg',
        title: 'las vegas bar',
        cols: 2,
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/91/a6/57.jpg',
        title: 'Tower at night',
        rows: 2,
        cols: 2,
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0d/3d/07/3b.jpg',
        title: 'las vegas and planes',
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/91/a6/8c.jpg',
        title: 'las vegas view',
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/91/a6/8d.jpg',
        title: 'las vegas view',
        rows: 2,
        cols: 2,
    },
    {
        id: "88",
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/90/71/d8.jpg',
        title: 'las vegas view',
        rows: 2,
        cols: 2,
    },
];