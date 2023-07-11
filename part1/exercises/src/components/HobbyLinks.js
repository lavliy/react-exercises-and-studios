export default function HobbyLinks(){
    let hobbyLinks = ["https://open.spotify.com/", "https://cookdtv.com/"]

    return(
        <div>
            <h3>{HobbyLinks}Things I love to do!</h3>
            <ol>
                <li><a href ={hobbyLinks[0]}>Spotify for listening music</a></li>
                <li><a href = {hobbyLinks[1]}>cookdtv for making good food</a></li>
            </ol>
        </div>
    )

}   