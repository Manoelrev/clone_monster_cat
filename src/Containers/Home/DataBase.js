import api from '../../services/api'
import { useEffect, useState } from 'react'

export function getDataBase(id){
    const [Data, setData] = useState(
        {
            Release: {
            CacheTime: "",
            CacheStatus: "",
            CacheStatusDetail: "",
            AlbumNotes: "",
            ArtistsTitle: "",
            BrandId: 0,
            BrandTitle: "",
            CatalogId: "",
            CopyrightPLine: "",
            CoverFileId: "",
            Description: "",
            FeaturedArtistsTitle: "",
            GRid: "",
            GenrePrimary: "",
            GenreSecondary: "",
            Id: "",
            PrereleaseDate: null,
            PresaveDate: null,
            ReleaseDate: "",
            ReleaseDateTimezone: "",
            SpotifyId: null,
            Tags: [],
            Title: "",
            Version: "",
            Type: "",
            UPC: "",
            YouTubeUrl: "",
            Artists: null,
            Tracks: null,
            Links: [
                {
                    "Platform": "",
                    "Url": ""
                }
            ],
            Downloadable: false,
            InEarlyAccess: false,
            Streamable: true
            },
            Tracks: [
                
            ]
        }
    )
    async function getData(){
        const DataFromApi = await api.get('/api/catalog/release/'+id)
        setData(DataFromApi.data)
    }
    useEffect(() => {getData()}, [])

    return (Data)
}


export function getImage(id){
    return( "https://www.monstercat.com/release/" + id + "/cover" )
}

export function getDataString(Data){
    const data = new Date(Data.Release.ReleaseDate);
    var month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (String)("Release " + month_names[data.getMonth()] + " " + data.getDay() + ", " +  data.getUTCFullYear())
}

export function getColor(Data) {
    return((Data.Release.BrandTitle == 'Instinct') ? "#50A584" : (Data.Release.BrandTitle == 'Uncaged') ? "#9a8ff6" : '#F68E2F')
}

export default getDataBase