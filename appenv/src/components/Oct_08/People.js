import '../../assets/Oct_08/css/main.css'
export default function People({detail}){
    return(
        <div className="maincard">
            <div >
            <img className='profile' src={'https://i.imgur.com/'+detail.imageId+'s.jpg'} alt={detail.name}/>
            </div>
            <div className='details'>
                <p>{detail.name}</p>
                <p>{detail.profession}</p>
                <p>{detail.accomplishment}</p>
            </div>
        </div>
    );
}